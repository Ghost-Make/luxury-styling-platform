import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createServerSupabaseClient } from "@/lib/supabase";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  subject: z.string().min(4).max(200),
  message: z.string().min(20).max(5000),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = result.data;

    console.log(`[Contact API] New submission from ${email}`);

    // 1. Save to Supabase
    const supabase = createServerSupabaseClient();
    if (!supabase) {
      console.error("[Contact API] Supabase client failed to initialize (check env vars)");
      return NextResponse.json(
        { success: false, error: "Database configuration missing. Please check .env.local" },
        { status: 500 }
      );
    }

    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert([{ name, email, subject, message }]);

    if (dbError) {
      console.error("[Contact API] Supabase insertion error:", dbError);
      return NextResponse.json(
        { success: false, error: `Database error: ${dbError.message}` },
        { status: 500 }
      );
    }

    console.log("[Contact API] Submission saved to database successfully.");

    // 2. Send email notification via Resend (optional)
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (resendApiKey && contactEmail) {
      try {
        console.log("[Contact API] Attempting to send email notification...");
        const { Resend } = await import("resend");
        const resend = new Resend(resendApiKey);

        const { error: emailError } = await resend.emails.send({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: [contactEmail],
          subject: `New Portfolio Contact: ${subject}`,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
              <h1 style="color: #c9a84c;">New Contact Message</h1>
              <p><strong>From:</strong> ${name} (${email})</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <hr />
              <p style="white-space: pre-wrap;">${message}</p>
            </div>
          `,
        });

        if (emailError) {
          console.error("[Contact API] Resend specific error:", emailError);
        } else {
          console.log("[Contact API] Email notification dispatched.");
        }
      } catch (emailErr) {
        // Email failure is non-blocking — submission still saved
        console.error("[Contact API] Unexpected Resend error:", emailErr);
      }
    } else {
      console.log("[Contact API] Skipping email notification (Resend credentials missing).");
    }

    return NextResponse.json(
      { success: true, message: "Message received! I'll be in touch soon." },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("[Contact API] Uncaught error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}
