---
name: Innova360
colors:
  surface: '#10131a'
  surface-dim: '#10131a'
  surface-bright: '#363941'
  surface-container-lowest: '#0b0e15'
  surface-container-low: '#191b23'
  surface-container: '#1d2027'
  surface-container-high: '#272a31'
  surface-container-highest: '#32353c'
  on-surface: '#e1e2ec'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#e1e2ec'
  inverse-on-surface: '#2e3038'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#b9c8de'
  on-secondary: '#233143'
  secondary-container: '#39485a'
  on-secondary-container: '#a7b6cc'
  tertiary: '#ffb786'
  on-tertiary: '#502400'
  tertiary-container: '#df7412'
  on-tertiary-container: '#461f00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#d4e4fa'
  secondary-fixed-dim: '#b9c8de'
  on-secondary-fixed: '#0d1c2d'
  on-secondary-fixed-variant: '#39485a'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb786'
  on-tertiary-fixed: '#311400'
  on-tertiary-fixed-variant: '#723600'
  background: '#10131a'
  on-background: '#e1e2ec'
  surface-variant: '#32353c'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-sm:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  grid-margin: 40px
  grid-gutter: 24px
---

## Brand & Style
The brand identity is built on a foundation of **High-Precision Minimalism**. It targets high-value B2B decision-makers who equate visual polish with operational excellence. The aesthetic is "Disruptive Luxury"—combining the stability of corporate enterprise with the cutting-edge agility of a digital-first agency.

The design system utilizes **Glassmorphism** as a core functional metaphor, representing transparency and depth. The user experience should feel cinematic yet efficient, utilizing expansive negative space to allow key insights and "hero" metrics to command full attention. Every interaction must feel intentional, smooth, and expensive.

## Colors
The palette is rooted in a deep, nocturnal base to establish authority and focus. 

- **Primary (Electric Blue):** Used sparingly for calls-to-action, active states, and data highlights. It acts as a digital "pulse" against the dark background.
- **Background (Night Blue/Slate):** A deep, saturated navy that provides more warmth and depth than pure black, ensuring the glass effects have a rich backdrop to blur.
- **Typography:** Pure White is reserved for headlines and primary actions. Silver Gray and Slate variants are used for secondary information to create a clear visual hierarchy and reduce eye strain in high-contrast environments.

## Typography
This design system uses **Inter** exclusively to achieve a systematic, Swiss-inspired clarity. 

- **Headlines:** Feature tight letter-spacing and heavy weights to create a "block" feel that anchors the layout.
- **Display Type:** Large-scale typography should be used as a graphic element, often overlapping with glass containers or images to create depth.
- **Labels:** Small caps with increased letter spacing are used for category tags and eyebrow headlines to provide a technical, architectural feel.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy to maintain a sense of structured elegance. 

- **Desktop:** A 12-column grid with a max-width of 1440px. Gutters are kept wide to prevent content crowding.
- **Negative Space:** Use "aggressive" whitespace. Top-level sections should have at least 120px of vertical separation to emphasize the premium nature of the brand.
- **Alignment:** Content should predominantly be left-aligned to maintain a clean vertical axis, with occasional center-aligned "hero" moments for emphasis.

## Elevation & Depth
Depth is created through **Layered Translucency** rather than traditional shadows.

1.  **Base Layer:** The deep Slate Gray background.
2.  **Mid Layer (Glass):** Semi-transparent surfaces (`rgba(255, 255, 255, 0.03)`) with a 20px - 40px backdrop blur.
3.  **Accent Layer:** Subtle 1px borders using a gradient from White (top-left) to Transparent (bottom-right) at low opacity (10-15%).
4.  **Floating Elements:** Elements that require focus use a very soft, large-radius glow (Primary Blue at 10% opacity) instead of a black shadow.

## Shapes
The shape language is **Soft and Precise**. 

A radius of `0.25rem` (4px) is the standard for most functional elements like buttons and inputs, providing a sharp, professional edge. Larger cards and "glass" sections may use `rounded-lg` (8px) to feel slightly more approachable without losing the architectural rigor of the design. Circular shapes are reserved strictly for avatars or status indicators.

## Components
- **Buttons:** Primary buttons feature a solid Electric Blue fill with no border. Secondary buttons are "ghost" style with a 1px Silver Gray border and a subtle hover state that triggers a backdrop blur.
- **Cards (Glass):** Containers must have a `backdrop-filter: blur(20px)` and a subtle `linear-gradient` border. They should feel like physical panes of glass hovering over the interface.
- **Input Fields:** Minimalist under-lines or very subtle 1px containers. Focus states should glow with a soft Primary Blue outer shadow.
- **Chips/Badges:** Small, pill-shaped with high letter-spacing. Backgrounds should be highly transparent versions of the accent color.
- **Lists:** Separated by thin, low-opacity silver lines. Interactive list items should have a horizontal "slide" transition on hover.
- **Data Visualization:** Use thin lines and neon-blue glows for charts. Avoid heavy fills; prefer outlines and gradients to maintain the "lightweight" feel.