# 02 — Home Page & Auth

## Home Page
First impression: engaging, informative, visually appealing. Must use animation.

### Hero Section
- Slider with three banners. Use React-Responsive Carousel / Swiper Slider.
- Each slide: different heading + title.
- Alternative: background video instead of slider.

### Top Funded Campaigns
- Show top 6 campaigns with max credits raised.
- Card: cover image, title, total amount raised.

### Testimonial Section
- Static feedback slider via Swiper Slider.
- Includes user photos, names, brief quotes.

### 3 Extra Sections
Minimum 3 custom sections, e.g. "How It Works", "Explore by Category", "Platform Impact in Numbers".
Current implementation in `src/app/page.js`: `Hero`, `FeaturedCampaigns`, `HowItWorks`, `WhyOpenFund`.

## User Authentication System

### 1. Registration Page
Fields: Name + Email + Profile Picture URL + Password + Role dropdown (Supporter / Creator).

- Validate email format + password strength. Show error for invalid input / existing email.
- Bonus (once only): Supporter +50 credits, Creator +20 credits. Store user info with credit value in DB.
- imgBB upload supported on this route (challenge mark).

### 2. Login Page
- Email + password login.
- Google Sign-In for quick auth.
- Validate incorrect email/password.
- After login/registration: store secret access-token in browser `localStorage`, redirect to Dashboard.
