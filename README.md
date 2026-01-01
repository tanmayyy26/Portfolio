# 🎨 Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Showcasing projects, skills, education, and professional experience with smooth animations and interactive UI.

**🔗 [Live Demo](https://portfolio-rbjj07zi7-tanmayyy26s-projects.vercel.app)**

---

## ✨ Features

- **Modern UI/UX** - Clean, professional design with smooth animations
- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- **Interactive Components** - Animated cards, transitions, and smooth scrolling
- **Contact Form** - Email integration with Nodemailer
- **Dark Mode Support** - Theme switching capability
- **Performance Optimized** - Fast load times and optimized images
- **SEO Friendly** - Proper meta tags and structured data
- **Resume Section** - Organized tabs for experience, education, skills, and certificates

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15.2.4
- **UI Library**: React 19.2.0
- **Styling**: Tailwind CSS 4.1.17
- **Animations**: Framer Motion, GSAP, Lenis
- **3D Graphics**: Three.js, React Three Fiber
- **Form Handling**: React Hook Form, Zod validation
- **Icons & Components**: Lucide React, Radix UI

### Backend
- **Runtime**: Node.js
- **Email Service**: Nodemailer
- **API Routes**: Next.js API Routes

### Deployment
- **Hosting**: Vercel
- **Version Control**: Git & GitHub
- **Package Manager**: pnpm

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── api/                 # API routes
│   │   ├── contact/        # Contact form API
│   │   └── send-mail/      # Email sending API
│   ├── resume/             # Resume page
│   ├── contact/            # Contact page
│   ├── work/               # Work/Projects page
│   ├── services/           # Services page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── hero.tsx            # Hero section
│   ├── resume-section.tsx  # Resume section
│   ├── work-section.tsx    # Work section
│   ├── contact-section.tsx # Contact section
│   └── ...                 # Other components
├── lib/
│   ├── utils.ts            # Utility functions
│   └── animations.ts       # Animation utilities
├── public/                 # Static assets
│   ├── images/
│   │   ├── skills/        # Skill icons
│   │   ├── certificates/  # Certificate PDFs
│   │   └── ...            # Other images
├── hooks/                  # Custom React hooks
├── styles/                 # Global styles
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── next.config.mjs         # Next.js config
├── tailwind.config.ts      # Tailwind config
└── vercel.json            # Vercel deployment config
```

---

## 🎯 Features Breakdown

### Home Page
- Hero section with animated background
- Smooth scrolling navigation
- Call-to-action buttons

### Resume Page
- **Experience**: Work history and positions
- **Education**: Courses and certifications
- **Skills**: Technical skills with icons
- **Certificates**: Downloadable certificate PDFs
- **About Me**: Personal bio and information

### Work/Projects Page
- Showcase of completed projects
- Project descriptions and links
- Responsive grid layout

### Contact Page
- Contact form with validation
- Email integration
- Success/error notifications

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/tanmayyy26/Portfolio.git
cd Portfolio
```

2. **Install dependencies**
```bash
pnpm install
# or
npm install
```

3. **Set up environment variables**
Create a `.env.local` file in the root directory:
```env
# Email Configuration (for contact form)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
TO_EMAIL=recipient@example.com
```

4. **Run development server**
```bash
pnpm dev
# or
npm run dev
```

5. **Open in browser**
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📝 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `SMTP_HOST` | SMTP server host | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP server port | `587` |
| `SMTP_USER` | Email address | `your-email@gmail.com` |
| `SMTP_PASS` | Email app password | `xxxx xxxx xxxx xxxx` |
| `TO_EMAIL` | Recipient email | `recipient@example.com` |

---

## 🔧 Build & Deploy

### Build for Production
```bash
pnpm build
# or
npm run build
```

### Preview Production Build
```bash
pnpm start
# or
npm start
```

### Deploy to Vercel
The project is automatically deployed to Vercel on every push to the main branch.

**Live URL**: [https://portfolio-rbjj07zi7-tanmayyy26s-projects.vercel.app](https://portfolio-rbjj07zi7-tanmayyy26s-projects.vercel.app)

---

## � Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

---

## 📧 Email Configuration

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

## 🎯 Features Breakdown

### Home Page
- Hero section with animated background
- Smooth scrolling navigation
- Call-to-action buttons

### Resume Page
- **Experience**: Work history and positions
- **Education**: Courses and certifications
- **Skills**: Technical skills with icons
- **Certificates**: Downloadable certificate PDFs
- **About Me**: Personal bio and information

### Work/Projects Page
- Showcase of completed projects
- Project descriptions and links
- Responsive grid layout

### Contact Page
- Contact form with validation
- Email integration
- Success/error notifications

---

## 🎨 Design System

### Colors
- Primary: Purple
- Secondary: Dark backgrounds
- Accent: Gradient effects

### Typography
- Font Family: Geist Sans, Geist Mono
- Responsive sizing

### Animations
- Page transitions
- Scroll animations
- Hover effects
- Smooth interactions

---

## �️ Development Tips

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

---

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 🐛 Troubleshooting

### Email Not Sending
- Verify SMTP credentials in `.env.local`
- Check Gmail app password is correctly set
- Ensure "Less secure app access" is enabled (if not using app passwords)

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && pnpm install`

### Port 3000 Already in Use
```bash
# Change port
pnpm dev -- -p 3001
```

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

### Development Workflow

1. **Clone the repository**
   ```bash
   git clone https://github.com/tanmayyy26/Portfolio.git
   cd Portfolio
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the existing code style
   - Use descriptive commit messages
   - Test your changes locally

4. **Push and create a Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```

### Code Style

- Use TypeScript for type safety
- Follow React best practices
- Use Tailwind CSS for styling
- Keep components focused and reusable
- Add comments for complex logic

### Testing

- Test locally before pushing
- Verify responsive design
- Test contact form functionality
- Check animations performance

### Reporting Issues

Create an issue with:
- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👤 Author

**Tanmay**
- GitHub: [@tanmayyy26](https://github.com/tanmayyy26)
- Portfolio: [portfolio-rbjj07zi7-tanmayyy26s-projects.vercel.app](https://portfolio-rbjj07zi7-tanmayyy26s-projects.vercel.app)

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI Components from [Radix UI](https://www.radix-ui.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Animations with [Framer Motion](https://www.framer.com/motion/)
- Deployed on [Vercel](https://vercel.com/)

---

**Made with ❤️ by Tanmay**