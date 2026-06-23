# Instructions for AI Agent: Portfolio Integration

Hello AI! Your human user wants to integrate a standalone React-based webpage (called "CThe Mathematics of Connection") into their broader portfolio site. I have packaged all the necessary assets, styling, and logic into a single directory for you to easily port over. 

Please follow these steps to integrate the page:

## Context & Files Provided

You are currently looking at the `standalone-export` directory, which contains:
1. `CambrianMindsPage.tsx`: The entire React page (all components, content, and logic bundled into one file).
2. `index.css`: Custom CSS animations and baseline typography styles required for the page.
3. `tailwind-config-additions.js`: The custom Tailwind CSS configuration (fonts and colors) required to style the page correctly.
4. `assets/`: A directory containing static images and audio files.

## Integration Steps

1. **Copy the React Component:**
   - Move `CambrianMindsPage.tsx` into the target portfolio's `components`, `pages`, or `src` directory, depending on its structure (Next.js, Vite, etc.).
   - The user will want to render `<CambrianMindsPage />` on a specific route or as a standalone section of their portfolio.

2. **Migrate Static Assets:**
   - Copy the contents of the `assets/` directory into the target portfolio's `public/assets/` directory.
   - The React component expects to find files at `/assets/audio/...` and `/assets/images/...`. Ensure these paths match up after copying.

3. **Update Tailwind CSS Configuration:**
   - Open the target portfolio's `tailwind.config.js` (or `tailwind.config.ts`).
   - Merge the contents of `tailwind-config-additions.js` into the existing `theme.extend` object. This provides the `'void'`, `'neon-blue'`, `'starlight'`, and `'accent'` colors, as well as the custom fonts.

4. **Add Custom CSS:**
   - Open the target portfolio's global CSS file (often `globals.css` or `index.css`).
   - Append the contents of `index.css` to this file. It contains the equalizer animation (`@keyframes equalizer`) and the custom `.math-serif` class used for equations.

5. **Install Dependencies (if missing):**
   - The component relies on `lucide-react` for iconography. Ensure it's installed in the portfolio repository by running `npm install lucide-react` or equivalent.
   - The component uses standard React hooks (`useState`, `useEffect`, `useRef`).

## Verification
- Once integrated, start the portfolio's dev server.
- Verify that the colors (`void` background, `neon-blue` highlights) are rendering properly, which confirms Tailwind is configured.
- Play an audio track to verify the `public/assets/audio/` pathing is correct.
- Check the cosmic background (a canvas animation) to ensure `requestAnimationFrame` is firing.

Thank you for helping the user integrate this page!
