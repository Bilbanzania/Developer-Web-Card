# AI & The Future of Dev - Interactive Web Card 

🔗 **[View the Live Demo Here!](https://bilbanzania.github.io/Developer-Web-Card/)**

An interactive, 3D flip card exploring the impact of Generative AI on web development and UI design workflows. 

Inspired by my previous interactive web cards for Mother's Day and Father's Day, I wanted to take that same engaging, single-page format and apply it to a modern tech aesthetic. This project transforms a static infographic into an immersive, cyberpunk-themed micro-experience designed specifically for full-stack developers and UI designers.

## Features

* **3D Physics & Flip Animation:** Utilizes CSS `preserve-3d` and backface visibility for a seamless, interactive card flip.
* **Hover Tilt Micro-interaction:** Custom JavaScript calculates mouse coordinates to apply a dynamic `<10deg` 3D tilt as the user hovers over the card, mimicking a physical trading card.
* **Full Keyboard Accessibility (a11y):** Fully navigable without a mouse. Features custom `:focus-visible` states, `tabindex` structuring, and Space/Enter key event listeners.
* **Dynamic Particle System:** A continuous, randomized background generator that spawns floating code syntax (`{ }`, `/>`, `()`, etc.) to fit the developer theme.
* **Immersive Effects:** Includes a trailing mouse sparkle effect, a ripple burst on click, and an authentic blinking terminal cursor (`|`).
* **Responsive Design:** Uses CSS `clamp()` and flexbox to automatically scale typography, images, and container sizes seamlessly across all devices without breaking the "card" illusion or triggering scrollbars.

## Tech Stack

* **HTML5:** Semantic structure and accessibility tagging.
* **CSS3:** Custom properties (variables), Flexbox layout, 3D transforms, keyframe animations, and backdrop filters.
* **Vanilla JavaScript (ES6):** DOM manipulation, event delegation, math logic for 3D tracking, and dynamic element generation.