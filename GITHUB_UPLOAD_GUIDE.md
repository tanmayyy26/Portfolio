# GitHub Upload Guide

This guide helps you upload your portfolio project to GitHub in manageable batches.

## Method 1: Use Git (Recommended)

Initialize git repository and push all files at once (Git handles large uploads efficiently):

```powershell
# Initialize git repository
git init

# Add all files (respects .gitignore)
git add .

# Create first commit
git commit -m "Initial commit: Portfolio project"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

## Method 2: Upload in 10 TINY Batches (Manual Upload)

Total files: ~123 files organized into 10 batches of 10-15 files each. This WILL work!

### 📦 BATCH 1: Core Config (11 files)
```
package.json
pnpm-lock.yaml
next.config.mjs
tsconfig.json
postcss.config.mjs
components.json
.gitignore
README_SENDMAIL.md
GMAIL_SETUP.md
MODERNIZATION_SUMMARY.md
COLOR_PALETTE.md
```

### 📦 BATCH 2: App Files (9 files)
```
app/globals.css
app/layout.tsx
app/page.tsx
app/contact/page.tsx
app/resume/page.tsx
app/services/page.tsx
app/work/page.tsx
app/api/contact/route.ts
app/api/send-mail/route.ts
```

### 📦 BATCH 3: Components Part 1 (14 files)
```
components/client-background.tsx
components/contact-section.tsx
components/hero.tsx
components/page-transition.tsx
components/portrait-ring.tsx
components/resume-section.tsx
components/services-section.tsx
components/site-header.tsx
components/smooth-scroll-provider.tsx
components/social-links.tsx
components/stats.tsx
components/theme-provider.tsx
components/three-background.tsx
components/work-section.tsx
```

### 📦 BATCH 4: Lib + Hooks + Styles (5 files)
```
lib/animations.ts
lib/utils.ts
hooks/use-mobile.ts
hooks/use-toast.ts
styles/globals.css
```

### 📦 BATCH 5: UI Components 1 (15 files)
```
components/ui/accordion.tsx
components/ui/alert-dialog.tsx
components/ui/alert.tsx
components/ui/aspect-ratio.tsx
components/ui/avatar.tsx
components/ui/badge.tsx
components/ui/breadcrumb.tsx
components/ui/button-group.tsx
components/ui/button.tsx
components/ui/calendar.tsx
components/ui/card.tsx
components/ui/carousel.tsx
components/ui/chart.tsx
components/ui/checkbox.tsx
components/ui/collapsible.tsx
```

### 📦 BATCH 6: UI Components 2 (15 files)
```
components/ui/command.tsx
components/ui/context-menu.tsx
components/ui/dialog.tsx
components/ui/drawer.tsx
components/ui/dropdown-menu.tsx
components/ui/empty.tsx
components/ui/field.tsx
components/ui/form.tsx
components/ui/hover-card.tsx
components/ui/input-group.tsx
components/ui/input-otp.tsx
components/ui/input.tsx
components/ui/item.tsx
components/ui/kbd.tsx
components/ui/label.tsx
```

### 📦 BATCH 7: UI Components 3 (15 files)
```
components/ui/menubar.tsx
components/ui/navigation-menu.tsx
components/ui/pagination.tsx
components/ui/popover.tsx
components/ui/progress.tsx
components/ui/radio-group.tsx
components/ui/resizable.tsx
components/ui/scroll-area.tsx
components/ui/select.tsx
components/ui/separator.tsx
components/ui/sheet.tsx
components/ui/sidebar.tsx
components/ui/skeleton.tsx
components/ui/slider.tsx
components/ui/sonner.tsx
```

### 📦 BATCH 8: UI Components 4 (13 files)
```
components/ui/spinner.tsx
components/ui/switch.tsx
components/ui/table.tsx
components/ui/tabs.tsx
components/ui/textarea.tsx
components/ui/toast.tsx
components/ui/toaster.tsx
components/ui/toggle-group.tsx
components/ui/toggle.tsx
components/ui/tooltip.tsx
components/ui/use-mobile.tsx
components/ui/use-toast.ts
```

### 📦 BATCH 9: Public Images - Main (12 files)
```
public/placeholder.svg
public/placeholder.jpg
public/placeholder-user.jpg
public/placeholder-logo.svg
public/placeholder-logo.png
public/circular-portrait-photo.jpg
public/images/work-01.png
public/images/work-02.png
public/images/work-03.png
public/images/liquid-abstract.jpg
public/images/liquid-abstract-2.jpg
public/images/home-portrait.jpeg
```

### 📦 BATCH 10: Public Images - Skills & Certificates (11 files)
```
public/images/certificates/microsoft-excel.pdf
public/images/certificates/google-cloud-ai.pdf
public/images/certificates/deloitte-cyber.pdf
public/images/skills/tailwind.svg
public/images/skills/react.svg
public/images/skills/nodejs.svg
public/images/skills/nextjs.svg
public/images/skills/javascript.svg
public/images/skills/html5.svg
public/images/skills/figma.svg
public/images/skills/css3.svg
```

## Quick Commands

### Check what will be uploaded:
```powershell
git status
```

### See ignored files:
```powershell
git status --ignored
```

### Count files to upload:
```powershell
git ls-files | Measure-Object -Line
```

## Important Notes

- `node_modules/` is excluded (via .gitignore)
- `.next/` build folder is excluded
- `.env` files are excluded (add them manually to your hosting)
- Total uploadable files: ~120 files (well under GitHub's limits)

## Creating GitHub Repository

1. Go to https://github.com/new
2. Create a new repository
3. Don't initialize with README (you already have files)
4. Copy the repository URL
5. Use the commands in Method 1 above
