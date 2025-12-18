'use server';
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);



export async function sendEmail(formData: FormData) {
const name = formData.get('name')as string;
const email = formData.get('email')as string;
const subject = formData.get('subject')as string;
const message = formData.get('message')as string;
await resend.emails.send({
    from: "delivered@resend.dev",
    to: "akunbuatskola@gmail.com",
    subject: subject,
    replyTo: email,
    html: `<p><strong>${name}</strong></p><p>${message}</p>`

});
console.log("Email sent successfully");
}

