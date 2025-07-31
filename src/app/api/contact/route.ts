import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, phone, message } = await req.json();
        console.log("req", await req.json())
        // Nodemailer setup
        // const transporter = nodemailer.createTransport({
        //     host: "mail.chirayuhospitaljaipur.com",
        //     port: 465,
        //     secure: true,
        //     auth: {
        //         user: "no-reply@chirayuhospitaljaipur.com",
        //         pass: "9TOEOYSkjXT0bl0", // Make sure not to expose sensitive data in production
        //     },
        // });


        // Email details
        // const mailOptions = {
        //     from: 'Chirayu Hospital <no-reply@chirayuhospitaljaipur.com>',
        //     to: "leads@chirayuhospitaljaipur.com",
        //     subject: "Chirayu Cancer Hospital",
        //     html: ` 
        //         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background: #fff; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        //             <h2 style="text-align: center; color: #333;">New  Lead</h2>
        //             <p>You have received a new lead from your contact form of chirayu cancer hospital website:</p>
        //             <p><strong>Name:</strong> ${name}</p>
        //             <p><strong>Email:</strong> ${email}</p>
        //             <p><strong>Phone:</strong> ${phone}</p>
        //             <p><strong>Message:</strong> ${message}</p>
        //             <p>Please respond as soon as possible.</p>
        //         </div>
        //     `,
        // };

        // await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Resume sent successfully" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Failed to send email", error }, { status: 500 });
    }
}

