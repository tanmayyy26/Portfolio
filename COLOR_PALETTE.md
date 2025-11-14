# 🎨 Color Palette Guide

## Modern Tech Theme

### Primary Colors

**Indigo (Primary)**
- Hex: `#6366f1`
- Usage: Main brand color, primary buttons, links, focus states
- Pairs with: All colors in palette

**Purple (Secondary)**  
- Hex: `#8b5cf6`
- Usage: Secondary buttons, accents, highlights
- Pairs with: Indigo, Cyan

**Cyan (Accent)**
- Hex: `#06b6d4`
- Usage: Special highlights, hover states, CTAs
- Pairs with: Indigo, Purple

### Neutral Colors

**Background**
- Base: `#0a0a0f` (Deep space black)
- Gradient stops:
  - `#0a0a0f` → `#1a1a2e` → `#16213e`

**Foreground**
- Primary text: `#f0f0f5` (Off-white)
- Muted text: `#a1a1b5` (Light gray)

**Glass Surfaces**
- Base: `rgba(30, 30, 46, 0.6)` with backdrop-blur(12px)
- Strong: `rgba(30, 30, 46, 0.8)` with backdrop-blur(20px)
- Light: `rgba(30, 30, 46, 0.4)` with backdrop-blur(8px)

### Borders & Glows

**Borders**
- Standard: `rgba(99, 102, 241, 0.2)` (Indigo 20%)
- Enhanced: `rgba(99, 102, 241, 0.3)` (Indigo 30%)
- Strong: `rgba(99, 102, 241, 0.4)` (Indigo 40%)

**Glow Effects**
- Primary glow: Indigo with 3-layer shadow
- Accent glow: Cyan with 3-layer shadow
- Secondary glow: Purple with 3-layer shadow

### Gradient Combinations

**Gradient Text**
```css
linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)
```

**Background Gradient**
```css
linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%)
```

## Usage Examples

### Buttons
- **Primary**: `bg-primary` with `glow-primary` on hover
- **Secondary**: `glass-strong` with `glow-accent` on hover
- **Outline**: `glass-light` with border

### Cards
- **Standard**: `glass` base
- **Enhanced**: `glass-strong` on hover
- **Subtle**: `glass-light` for less emphasis

### Interactive Elements
- **Default**: `glass-light`
- **Focus**: `glass-strong` + `glow-primary`
- **Hover**: Scale transform + glow effect

## Accessibility

All color combinations meet WCAG AA standards for contrast:
- Primary text (#f0f0f5) on dark backgrounds: ✅ AAA
- Accent colors on glass surfaces: ✅ AA
- Focus indicators: ✅ High contrast with glows
