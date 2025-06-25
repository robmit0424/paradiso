Branding
h1: Silver Streak
h2-h6 : Brasilla Short II
p: monteserrat
primary: #ec9aad
secondary: #1ACAD4

Compare and Contrast
🎨 Design & User Experience
Current Website (WordPress)
New Website (Custom Build)
Feels “flat” and uninspiring
Visually rich, modern, immersive
Limited photography/video usage
Full use of new photos and videos
Single-page layout
Multi-page experience with intuitive navigation
Minimal motion or interactivity
Interactive elements, smooth transitions, lifestyle-first design
Generic template aesthetic
Brand-driven, tropical luxury vibe inspired by The Elmont, The Wonderer

⚙️ Functionality & Performance
Current Website
New Website
Online ordering is broken
Fully functioning Toast integration for The Market
Manual membership access with clunky flow
Stripe-powered payment + PeopleVine API integration
No login or member portal
Member login via PeopleVine to view exclusive content and offerings
No automation for waivers
Daypass → automatic waiver delivery post-purchase
Slow load times, outdated tech stack
Optimized performance and custom frontend architecture

🧭 Site Structure & Navigation
Current Site
New Site
All content lives on a single scrollable page
Separate, focused pages: Home, Dine, Swim, Vibe, Market, Contact, Membership
Difficult to find specific information quickly
Clearly defined navigation with deeper content per section
Static content with no growth path
Expandable, scalable structure that can support updates, events, and seasonal changes

💼 Business & Operational Tools
Current Website
New Website
Manual PeopleVine workflows (nightmare to manage)
New user flow: Stripe → PeopleVine API → Optional login for members
No analytics or engagement tools mentioned
Ability to integrate GA, Hotjar, Meta Pixel, etc. for business intelligence
Membership page is outdated and confusing
Simplified, accurate Membership flow (Individual, Dual, Family only)
No e-commerce capability
Toast integration for food orders, potential for future merch/provision sales

🔌 Technical Platform
Current
New
Hosted on WordPress
Fully custom codebase (React, Next.js, or other modern stack)
Dependent on plugins
Lean, purpose-built components
Difficult to maintain or scale
Built for performance, with optional CMS hooks if needed
Vulnerable to theme limitations
Total design and feature freedom

🧠 Summary
The current Paradiso site is a static, one-page WordPress build that lacks functionality, visual appeal, and operational integration.
The new Paradiso website will be a high-end, immersive, and fully functional experience, reflecting the real-world beauty and offerings of the club. It will provide seamless booking, ordering, membership management, and engaging visuals — making the site a core part of the business, not just a brochure.

Pages
Page Structure
Home

Hero video/image + “Explore Paradiso” CTA

Quick links to Dine, Swim, Vibe, Market

Teasers for Membership + Events

Footer includes Login (PeopleVine), Order Now (Toast)

Dine

Restaurant overview with new food & cocktail photography

Poolside service section

Sample menu or downloadable PDF

Reservations CTA

"Sip" and "Relax" brand language included

Swim

Pool experience and amenities

Cabana Rentals + Booking

ResortPass integration or Daypass info

Waiver automation via Stripe trigger or backend logic

Events & Catering section (formerly its own page)

Vibe

Fitness Center & Wellness Center sections

Group class schedule preview

Social events calendar or teaser

Photos/videos from past events

“Join a class” CTA

Market

Embed or link to Toast page

Kitchen menu highlights

Grab & go, take-and-bake features

Local vendor shoutouts

Order Now button is clearly a Toast link

Contact

Basic info, map, contact form

Social links

FAQ section (waivers, daypass policy, pets, etc.)

Membership

Simplified section: Individual / Dual / Family

“Become a Member” button → PeopleVine login

Stripe payment integration first

After purchase → POST to PeopleVine API + optional login creation

Optional flow for viewing benefits + event invites once logged in

Functionality Plan
Feature
Tool/Platform
Notes
Online Ordering
Toast
Link directly to The Market’s Toast site.
Payment Processing
Stripe
Used for new memberships (Individual, Dual, Family).
Membership Management
PeopleVine (API)
POST new users after Stripe payment. Manual access assignment for now.
Daypass & Waivers
ResortPass + Automation
Auto-send waiver upon purchase (backend logic or 3rd party integration).
Content Management
Custom CMS / Static Site
No more WordPress. Fully custom frontend.
Member Login
PeopleVine
For viewing events, account details, etc.

Suggestions Going Forward
Visual Style: Clean, immersive, lifestyle-forward with motion and tropical warmth. Lean into the aesthetic of The Elmont and The Wonderer, but soften any starkness with warmth, color, and community.

CMS (Optional): If they still want to make basic edits in the future (like updating events or menus), consider headless CMS like Sanity or Contentful.

Waiver Flow: Stripe → Backend webhook → Email waiver PDF/link via DocuSign or similar tool.

PeopleVine Help: Request direct connection with Rand to clarify data structure, login session handling, and available endpoints.
