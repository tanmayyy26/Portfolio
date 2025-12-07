# 🔧 Setup Guide

## Email Configuration

### Gmail Setup

1. **Enable 2-Factor Authentication**
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification

2. **Generate App Password**
   - Go to [App passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Windows Computer" (or your device)
   - Google will generate a 16-character password

3. **Update .env.local**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=xxxx xxxx xxxx xxxx
   TO_EMAIL=recipient@example.com
   ```

### Other Email Providers

#### Outlook/Microsoft 365
```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

#### SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=SG.xxxxx...
```

#### AWS SES
```env
SMTP_HOST=email-smtp.region.amazonaws.com
SMTP_PORT=587
SMTP_USER=your-ses-username
SMTP_PASS=your-ses-password
```

---

## Deployment Checklist

- [ ] Update environment variables in Vercel
- [ ] Test contact form functionality
- [ ] Verify all links work
- [ ] Check mobile responsiveness
- [ ] Test form validation
- [ ] Monitor email delivery

---

## Development Tips

### Adding New Skills
Edit `components/resume-section.tsx` - Skills Grid section:
```tsx
{ name: "New Skill", image: "/images/skills/skill.svg" }
```

### Adding New Projects
Edit `components/work-section.tsx` to add project cards

### Adding Certificates
1. Add PDF to `public/images/certificates/`
2. Update `components/resume-section.tsx` - Certificates Grid

### Custom Styling
- Tailwind CSS classes in component files
- Global styles in `app/globals.css`
- Theme colors in `tailwind.config.ts`
