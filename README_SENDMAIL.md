Setup instructions for contact form email (SMTP)

1. Install nodemailer:

   npm install nodemailer

2. Create a copy of the `.env.example` file in the project root and name it `.env`.
   Fill in your SMTP provider details and the destination email address.

3. Example using Gmail SMTP (not recommended for production):

   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_USER=you@gmail.com
   SMTP_PASS=<app-password>
   TO_EMAIL=you@gmail.com

4. Start the dev server:

   npm run dev

5. Open the Contact page and send a message. The server will POST to `/api/contact` and send an email using the SMTP settings.

Notes:
- For production use, prefer a transactional email provider (SendGrid, Mailgun, Postmark) and their SMTP/API integrations.
- If you use an API-based provider, replace the Nodemailer transport with the provider's official transport or use the SMTP credentials they provide.
