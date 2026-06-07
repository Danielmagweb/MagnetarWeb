import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  details: z.string().trim().min(10).max(2000),
});

const RECIPIENT = "daniel@magnetarweb.com";

export const sendContactInquiry = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => schema.parse(input))
  .handler(async ({ data }) => {
    const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
      throw new Error("Email service is not configured");
    }

    const esc = (s: string) =>
      s.replace(/[&<>"']/g, (c) =>
        ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!),
      );

    const html = `
      <div style="font-family:Inter,Arial,sans-serif;background:#0b0d12;padding:32px;color:#e8edf5">
        <div style="max-width:560px;margin:0 auto;background:#11151c;border:1px solid #1f2733;border-radius:16px;padding:28px">
          <h2 style="margin:0 0 4px;font-size:20px;color:#fff">New project inquiry</h2>
          <p style="margin:0 0 20px;color:#94a3b8;font-size:13px">via magnetarweb.com</p>
          <table style="width:100%;border-collapse:collapse;font-size:14px">
            <tr><td style="padding:6px 0;color:#94a3b8;width:110px">Name</td><td style="padding:6px 0;color:#fff">${esc(data.name)}</td></tr>
            <tr><td style="padding:6px 0;color:#94a3b8">Email</td><td style="padding:6px 0"><a style="color:#4a8eff" href="mailto:${esc(data.email)}">${esc(data.email)}</a></td></tr>
            <tr><td style="padding:6px 0;color:#94a3b8">Company</td><td style="padding:6px 0;color:#fff">${esc(data.company || "—")}</td></tr>
          </table>
          <div style="margin-top:18px;padding-top:18px;border-top:1px solid #1f2733">
            <div style="color:#94a3b8;font-size:13px;margin-bottom:8px">Project details</div>
            <div style="white-space:pre-wrap;color:#e8edf5;line-height:1.55">${esc(data.details)}</div>
          </div>
        </div>
      </div>`;

    const res = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: "MagnetarWeb <hello@magnetarweb.com>",
        to: [RECIPIENT],
        reply_to: data.email,
        subject: `New inquiry from ${data.name}${data.company ? ` (${data.company})` : ""}`,
        html,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Resend error:", res.status, text);
      throw new Error("Failed to send email");
    }

    return { ok: true };
  });