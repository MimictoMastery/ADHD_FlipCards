# ADHD: We Flip Personalities

An interactive, neon-arcade flip-card page that explains common ADHD experiences in a relatable, honest, slightly funny way. Tap a card to flip it and see what each one *really* feels like.

> **Not medical advice, just lived experience.**

---

## Features

- **6 flip cards** in a 2×3 grid: RSD, Emotional Dysregulation, Anxiety, Impulsivity, Hyperfocus, and Executive Dysfunction
- **3D flip animation** built with pure CSS
- **Neon glow colors**: every card has its own color, set with a single CSS variable
- **Flip All** button to reveal every card at once
- **Reset** button to flip everything back
- **Live counter** that tracks how many cards you've flipped (like "3 of 6 flipped")
- **Responsive layout**: stays 2 rows of 3 and scales down for tablets and phones
- **Keyboard accessible**: tab to a card and press Enter or Space to flip it
- **Reduced-motion support** for people who have animations turned off

---

##  How to Use It

### Run it locally
1. Download or clone this project.
2. Make sure these three files are in the **same folder**:
   ```
   index.html
   style.css
   script.js
   ```
3. Double-click `index.html` to open it in your browser. No installs or build steps needed.

### Play with it
| Action | Mouse / Touch | Keyboard |
|---|---|---|
| Flip a card | Click or tap it | Tab to it, then Enter or Space |
| Reveal everything | Click **Flip All** | Tab to the button, then Enter |
| Start over | Click **Reset** | Tab to the button, then Enter |

> If you change the CSS and nothing updates, do a hard refresh: **Ctrl + Shift + R** (Windows/Linux) or **Cmd + Shift + R** (Mac).

---

##  Tech Stack

| Tool | What I used it for |
|---|---|
| **HTML5** | Page structure and semantic tags (`header`, `main`, `footer`) |
| **CSS3** | Grid layout, 3D transforms, custom properties, media queries, `clamp()` |
| **Vanilla JavaScript** | Flip logic, counter, Flip All, Reset, keyboard support |

No frameworks, no libraries, no dependencies.

---

## Customizing It

### Change a card's glow color
Each card sets its own color in the HTML. Change the hex value:
```html
<div class="flip-card" style="--glow: #ff2e93;">
```

### Add or edit a card
Copy a whole card block and change the text:
```html
<div class="flip-card" style="--glow: #39ff14;">
    <div class="flip-inner">
        <div class="face front">Your Title</div>
        <div class="face back">Your description.</div>
    </div>
</div>
```
If you add cards, update the `of 6 flipped` text in `index.html` and adjust the grid in `style.css`.

---

##  Project Structure

```
├── index.html   # Page structure and card content
├── style.css    # Neon arcade styling, grid, and flip animation
├── script.js    # Flip, Flip All, Reset, counter, keyboard support
└── README.md    # You are here
```

---

##  What I Learned

- **CSS Grid:** how `repeat(3, 1fr)` creates equal columns, and why explicit rows help keep a grid from collapsing.
- **Why things overlap:** fixed pixel widths inside flexible grids spill into neighboring cells. Fluid sizing with `width: 100%` and `box-sizing: border-box` fixes it.
- **3D card flips:** how `perspective`, `transform-style: preserve-3d`, `rotateY(180deg)`, and `backface-visibility: hidden` work together.
- **Blurry text is a real problem:** glowing text, fancy fonts, and hover movement on top of 3D transforms can make text blurry in some browsers. Simpler styling on the cards fixed it.
- **Responsive design:** using `clamp()` for fluid font sizes and media queries to shrink the design for small screens without changing the layout.
- **CSS custom properties:** one `--glow` variable per card controls its border, shadow, and text color.
- **Accessibility matters:** adding `tabindex`, `role="button"`, keyboard events, and reduced-motion support so more people can use the page.
- **Defensive JavaScript:** waiting for `DOMContentLoaded` and checking that elements exist so one missing piece doesn't break everything.
- **Debugging is part of building:** caching, file names, and old code mixed with new code can all cause "it's broken" moments.

---

##  Ideas for Future Updates

- [ ] Add more cards (time blindness, rejection, dopamine seeking, and so on)
- [ ] Add a shuffle button
- [ ] Add sound effects for flips
- [ ] Add a "Share your own" form so people can submit their own card
- [ ] Save flipped cards using `localStorage`
- [ ] Add a light/dark mode toggle

---

## Live Demo

*Add your link here once it's hosted (GitHub Pages, Netlify, and so on).*

---

##  Author

Built by **Mimic**.

If this made you feel seen, share it with someone who might need it. 💚

---

##  License

<p>© 2026 Mimic. Released under the MIT License.</p>