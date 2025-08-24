import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {

    const body = await req.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      estimateCount,
      tellUs,
      location,
      dates,
    } = body;

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.host, // ✅ your domain's mail server
      port: 465,
      secure: true,
      auth: {
        user: process.env.user, // ✅ updated to your domain's email
        pass: process.env.password,   // 🔐 should be stored in environment variable in production
      },
    });

    // Email content
    const mailOptions = {
      from: '"Memoirs Jaipur" <memoirsjaipur@gmail.com>', // ✅ updated "from"
      to: "memoirsjaipur@gmail.com",                    // ✅ your email to receive leads
      subject: "Memoirs - Lead",
      html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background: #f4f4f6; padding: 24px; border-radius: 12px; box-shadow: 0 2px 12px rgba(0,0,0,0.05);">
  <div style="background-color: #736645; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
    <h2 style="margin: 0;"> New Lead</h2>
  </div>

  <div style="padding: 20px; background-color: white; border-radius: 0 0 8px 8px;">

    <!-- Row 1: Full Name | Phone -->
    <div style="display: flex; justify-content: space-between; margin-bottom: 12px; gap: 8px;">
      <div style="display: flex; align-items: center; gap: 8px; width: 50%;">
        <div>
          <p style="margin: 0; font-size: 13px; color: #736645;">Full Name</p>
          <p style="margin: 4px 0; font-size: 16px;"><strong>${firstName} ${lastName}</strong></p>
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 8px; width: 50%;">
        <div>
          <p style="margin: 0; font-size: 13px; color: #736645;">Phone</p>
          <p style="margin: 4px 0; font-size: 16px;"><strong>${phone}</strong></p>
        </div>
      </div>
    </div>

    <!-- Row 2: Email | Estimate Count -->
    <div style="display: flex; justify-content: space-between; margin-bottom: 12px; gap: 8px;">
      <div style="display: flex; align-items: center; gap: 8px; width: 50%;">
        <div>
          <p style="margin: 0; font-size: 13px; color: #736645;">Email</p>
          <p style="margin: 4px 0; font-size: 16px;"><strong>${email}</strong></p>
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 8px; width: 50%;">
        <div>
          <p style="margin: 0; font-size: 13px; color: #736645;">Estimate Count</p>
          <p style="margin: 4px 0; font-size: 16px;"><strong>${estimateCount}</strong></p>
        </div>
      </div>
    </div>

    <hr style="margin: 20px 0; border: none; border-top: 1px solid #e0e0e0;" />

    <div>
      <p style="margin: 0; font-size: 13px; color: #736645;">💬 Tell Us More</p>
      <div style="background-color: #f4f4f6; padding: 12px; border-radius: 8px; margin-top: 6px; color: #333;">
        ${tellUs}
      </div>
    </div>

    <hr style="margin: 20px 0; border: none; border-top: 1px solid #e0e0e0;" />

    <!-- Location -->
<div style="display: flex; justify-content: space-between; margin-top: 20px; gap: 8px;">
<div style="display: flex; align-items: center; gap: 12px; width: 50%;">
  <div>
    <p style="margin: 0; font-size: 13px; color: #736645;">Location</p>
    <p style="margin: 4px 0; font-size: 16px;"><strong>${location}</strong></p>
  </div>
</div>

  <div style="display: flex; align-items: center; gap: 8px; width: 50%;">
    <div>
      <p style="margin: 0; font-size: 13px; color: #736645;">Preferred Dates</p>
      <p style="margin: 4px 0; font-size: 16px;"><strong>${dates}</strong></p>
    </div>
  </div>
</div>

  </div>
</div>

`

      ,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Lead sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ message: "Failed to send email", error }, { status: 500 });
  }
}

