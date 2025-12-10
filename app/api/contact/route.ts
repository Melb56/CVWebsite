import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { firstName, lastName, email, subject, message } = await req.json();

  if (
    !firstName || !lastName || !email || !subject || !message ||
    typeof firstName !== 'string' ||
    typeof lastName !== 'string' ||
    typeof email !== 'string' ||
    typeof subject !== 'string' ||
    typeof message !== 'string' ||
    !email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)
  ) {
    return NextResponse.json({ success: false, error: "Champs invalides" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_PASS, 
    },
      secure: true,
  });

  const mailOptions = {
    from:` "Formulaire contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO, 
    subject: `[Contact CV] ${subject}`,
    text: ` Vous avez reçu un nouveau message depuis votre site CV :
      Nom: ${firstName} ${lastName}
      Email: ${email}
      Sujet: ${subject}
      Message: ${message}
    `,
        replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email :", error);

    console.error("Erreur interne:", error);
    return NextResponse.json({ success: false, error: "Erreur serveur" }, { status: 500 });
  }
}

