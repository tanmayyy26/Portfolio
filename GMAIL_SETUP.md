# Gmail App Password Setup

To send emails from your contact form using Gmail, you need to set up an App Password:

## Steps:

1. **Enable 2-Factor Authentication** on your Gmail account (if not already enabled):
   - Go to https://myaccount.google.com/security
   - Turn on 2-Step Verification

2. **Generate an App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" as the app
   - Select "Other (custom name)" as the device
   - Enter "Portfolio Contact Form" as the name
   - Click "Generate"
   - Copy the 16-character password (something like: abcd efgh ijkl mnop)

3. **Update your .env file**:
   - Replace `your_gmail_app_password_here` with the generated app password
   - Example: `SMTP_PASS=abcd efgh ijkl mnop`

4. **Restart your dev server**:
   ```
   npm run dev
   ```

5. **Test the contact form** at http://localhost:3000/contact

## Alternative SMTP Providers:
If you prefer not to use Gmail, you can use:
- **Outlook/Hotmail**: smtp-mail.outlook.com:587
- **Yahoo**: smtp.mail.yahoo.com:587
- **SendGrid**: smtp.sendgrid.net:587 (requires API key)
- **Mailgun**: smtp.mailgun.org:587 (requires API key)

## Security Note:
Never commit the .env file to version control. Add .env to your .gitignore file.