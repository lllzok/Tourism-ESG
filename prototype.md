Project name: PolyU ESG Visitor - Campus ESG Behavior Recording App Prototype

1. Project goals (The "Why")

The core goal of this project is to design and develop a static front-end prototype for visitors to The Hong Kong Polytechnic University (PolyU). The prototype simulates a mobile web app that uses gamification to encourage and record sustainable behaviors (ESG actions) on campus, increase visitor engagement and environmental awareness, and showcase PolyU's sustainability efforts and facilities.

Core idea: Turn sustainability into a light, fun and rewarding interactive experience.

2. Core requirements & features (The "What")

Design a front-end app with several core pages to record and track two major categories of ESG behaviors. All operations are front-end simulations; 

ESG action recording features to implement:

Category A: ESG consumption & waste reduction (ESG Consumption & Waste Reduction)

Mindful dining:

- Clean plate action: Users can check in after finishing a meal without waste.
- Low-carbon meals: Users who choose vegetarian or local dishes can record by uploading a menu or food photo.
- BYO containers: Users who bring their own cups/containers for purchases can upload receipts or on-site photos to record.

Sustainable shopping:

- ESG souvenirs: Upload purchase receipts after buying ESG items in the souvenir shop.
- E-receipts: Users choosing electronic receipts can upload screenshots or perform quick check-ins.

Daily waste reduction:

- Refuse single-use items: Honesty check-in when refusing straws and stirrers.
- Paper saving: Use hand dryers instead of paper towels and check in honestly.

Category B: Resource recycling & conservation (Resource Recycling & Conservation)

Recycling:

- Reverse vending machine (RVM): Upload a photo of the RVM screen showing recycled quantity/points.
- Other recyclables: Upload a photo when correctly disposing items into UniRe® recycling bins.

Water conservation:

- Water refill: Check-in after refilling a personal bottle at a drinking fountain; can be based on a photo or simulated geo-check.

Category C: Exploration, learning & advocacy (Exploration, Learning & Advocacy)

ESG exploration:

- ESG landmark tour: Follow the GreenMap@PolyU and capture ESG buildings, rooftop gardens, or solar panels.

ESG education:

- Sustainability quiz: Answer quick questions about PolyU ESG facilities or environmental trivia.

Environmental advocacy:

- Share ESG story: Post your PolyU ESG experience on social channels and log the proof.
- Invite a friend: Share your points or badges to motivate friends to join the app.

3. Page design & structure (Page Design)

Use an SPA approach by showing/hiding different div sections to simulate navigation for smoother UX.

Page A: Home / Dashboard (Home/Dashboard)

Purpose: Welcome users, show current "ESG points" and achievements, and provide clear call-to-action entry points.

Core elements:

-- Header welcome line: "Welcome to PolyU — start your ESG journey!"
- Prominent points card: dynamically show the user's total points.
-- Primary CTA: "Record my ESG action".
-- Category entry cards: three large card buttons pointing to "ESG consumption & waste reduction", "Recycling & conservation", and "Exploration, learning & advocacy", each with a distinct visual.
- Bottom navigation (simulated): includes Home, Log action, and My Impact icons.

Page B: Log action selection (Log Action Page)

Purpose: After clicking the main CTA, this page lists all recordable actions clearly.

Core elements:

- Grid/list of action options (e.g. Clean Plate, Use RVM, ESG landmark tour).
- Each option is a clickable card with an icon, title and short description.

Page C: Action proof upload modal (Action Proof Modal)

Purpose: When choosing a specific action, provide the appropriate recording method. Modal that slides up from bottom offers better UX.

Core elements (varies by action):

- Upload/photo scenarios (e.g. recycling, BYO): Action title and points label (e.g. "Use RVM +20 pts"). A large "Upload / Take photo" button that opens the file picker (simulated). Preview area for uploaded images. "Confirm submit" button.
- Honest check-in scenarios (e.g. Clean Plate, refusal of single-use items): Action title and points label. Large "I've done it" or "Confirm check-in" button. Encouraging copy.

Page D: My Impact (My Impact Page)

Purpose: Show user's history and accumulated achievements.

Core elements:

- Total points and environmental impact summary (e.g. "You have reduced X grams of CO2").
- Reverse-chronological timeline of recorded actions.
- Badge/achievement system: light up badges for milestones (e.g. "Recycler", "Water saver").

4. Visual style & effects (Visual Style)

Overall style: modern, clean, friendly and energetic.

Color scheme:

-- Primary: greens to represent environment and ESG (#4CAF50, #8BC34A) and fresh blue for tech/clarity (#2196F3).
- Accent: use PolyU's signature brick red (#CC3333) for emphasis on important buttons or icons.
- Background: large areas of white or light gray (#F5F5F5) to keep layout clean and readable.
- Typography: choose clear sans-serif fonts such as "Inter", "Helvetica", "Arial".
- Icons: use a consistent line-based SVG icon set (e.g., Feather Icons) for visual harmony.

Visual interaction:

- Micro-animations: smooth transitions and subtle scales for clicks, page switches and point increments.
- Card design: rounded cards used extensively to contain information.
- Immediate feedback: show a celebratory animation (confetti) and a toast upon successful submission.

5. Implementation notes (For Programming Model)

- Tech stack: HTML, CSS and Vanilla JavaScript.
- File layout: classic separation for readability and maintainability:
  - index.html: app skeleton and markup.
  - style.css: theme, components and animations.
  - script.js: UI state, DOM updates and event handling.
- CSS: Link `style.css` from `index.html`. For a quick prototype, utility frameworks can help but local styles are preferred for portability.
- JavaScript: include `script.js` before the closing `</body>`.
- Responsive: ensure the UI looks good on common mobile device sizes.
