USCIS CITIZENSHIP QUIZ APPLICATION
===================================

FILE: USCitizenshipQuiz.html
SIZE: 239 KB
LINES: 4,191

OVERVIEW
--------
A complete, self-contained quiz application for USCIS Naturalization Exam preparation. 
Built with vanilla HTML5, CSS3, and JavaScript (ZERO external dependencies except Google Fonts).

FEATURES
--------
1. THREE SECTIONS:
   - Section 1: USCIS Civics Test (128 official + supplementary questions)
   - Section 2: U.S. History (colonial through modern era)
   - Section 3: U.S. Politics (constitutional foundations through modern governance)

2. QUIZ FUNCTIONALITY:
   - Category filtering (7-8 categories per section)
   - Civics filter: All / Official Only / Supplementary Only
   - Random 20-question test mode (civics only, 12/20 required to pass)
   - Instant feedback with explanations
   - Score tracking across all sections
   - Progress indicators and statistics

3. DESIGN:
   - DHS/USCIS official government style
   - Navy (#002147) and Gold (#8B6914, #C9A73B) color scheme
   - Serif fonts: Merriweather (titles, questions)
   - Sans-serif fonts: Source Sans 3 (body text)
   - Responsive design for mobile/tablet
   - Minimal borders, clean government document aesthetic

4. DATA INCLUDED:
   - All civics questions with official/supplementary distinction
   - USCIS 6520 form markers where applicable
   - Bilingual explanations (English + Japanese)
   - History questions organized by era
   - Politics questions organized by theme
   - 100% complete question database (NO truncation)

USAGE
-----
1. Open the file locally: file:///path/to/USCitizenshipQuiz.html
2. Select a section from the dashboard
3. Choose categories or filters as desired
4. Answer questions and review explanations
5. Track scores and progress across sessions

TECHNOLOGY
----------
✓ Vanilla JavaScript (NO frameworks)
✓ CSS3 with CSS Custom Properties
✓ HTML5 semantic markup
✓ Google Fonts API (loaded via <link> tags - works on file:// protocol)
✓ Client-side state management
✓ Event delegation and onclick handlers
✓ Template literals for rendering

NO EXTERNAL DEPENDENCIES:
✗ No React, Vue, Angular, or other frameworks
✗ No Babel or transpilers
✗ No CDN-hosted libraries
✗ No build process required
✗ No server backend needed

BROWSER COMPATIBILITY
---------------------
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers with ES6 support

NOTES
-----
- Scores persist within the session (not saved to disk)
- Fully self-contained in a single HTML file
- No installation or setup required
- DHS-Symbol.png image reference available but optional (uses emoji fallback)
- Responsive design works on all screen sizes
- Keyboard accessible

SECTIONS & CATEGORIES
---------------------
CIVICS (Section 1):
  - A: Principles of American Government
  - B: Government System & Structure
  - C: Rights & Responsibilities
  - D: Colonial Period
  - E: 1800s-1900s
  - F: Recent History (20th+ centuries)
  - G: Symbols & Traditions

HISTORY (Section 2):
  - Colonial
  - Revolution & Early Republic
  - Antebellum Period
  - Civil War & Reconstruction
  - Gilded Age
  - World Wars
  - Postwar Era

POLITICS (Section 3):
  - Foundations (Constitution, federalism)
  - Expansion (Westward, slavery)
  - Progressive Era
  - Cold War
  - Modern Conservative Movement
  - 21st Century Politics
  - Government Structure & Processes

CUSTOMIZATION
-------------
All styling is in <style> tags - easily customizable.
All data is in <script> tags - can be modified without recompilation.
State management uses a simple object model - easy to extend.
Render functions use template literals - easy to modify layout.

VERSION
-------
Built: April 2026
Database: USCIS Naturalization Exam 2025-2026
Languages: English + Japanese explanations

