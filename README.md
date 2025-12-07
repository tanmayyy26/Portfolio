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

## 📧 Contact Form Setup

### Gmail Configuration
1. Enable 2-factor authentication on your Gmail account
2. Generate an [App Password](https://myaccount.google.com/apppasswords)
3. Use the app password in `SMTP_PASS` environment variable

### Other Email Providers
- Update `SMTP_HOST` and `SMTP_PORT` accordingly
- Refer to provider's SMTP documentation

---

## 📚 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

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