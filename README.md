# PackEscape - Travel Community Website

A beautiful, fast travel booking website built with **React + Vite + Tailwind CSS**.

## Features

✨ **Fully Static** - No backend needed!
🌍 **Responsive Design** - Perfect on mobile & desktop  
⚡ **Super Fast** - Built with Vite (lightning-quick builds)
🎨 **Modern UI** - Beautiful animations & design
📱 **Mobile-First** - Works great everywhere

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Opens at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```

## Deploy to Netlify

### Option 1: GitHub + Netlify (Recommended)

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/packescape.git
   git push -u origin main
   ```

2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your GitHub repository
5. Build settings should auto-fill:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click Deploy! 🎉

### Option 2: Quick CLI Deploy

```bash
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --prod --dir=dist
```

### Option 3: Drag & Drop

1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder into the deploy area
4. Done!

## Project Structure

```
src/
├── App.jsx          # All components & logic
├── main.jsx         # Entry point
└── index.css        # Tailwind styles

public/
index.html           # HTML template
vite.config.js       # Vite config
netlify.toml         # Netlify routing config
```

## Customization

Edit the tour data directly in `src/App.jsx`:

```javascript
const TRIPS = [
  { id: 't1', title: 'Tour Name', price: '5000', location: 'City', days: 3, image: 'url', rating: '4.9' }
];

const CONTENT = {
  heroTitle: "Your Title",
  heroSubtitle: "Your Subtitle",
  contactPhone: "+91-1234567890",
  contactEmail: "email@example.com"
};
```

## Pages

- **Home** - Hero section + featured tours
- **Tours** - All available packages
- **About** - Company info
- **Contact** - Contact form

## Tech Stack

- React 18
- Vite (build tool)
- Tailwind CSS
- Lucide React (icons)
- Zero backends

## Browser Support

✅ Chrome, Firefox, Safari, Edge (latest versions)

## File Size

- HTML: 0.4 KB
- CSS: 23 KB
- JavaScript: 168 KB
- **Total: ~192 KB** (super fast!)

---

Ready to deploy? Just push to GitHub and connect to Netlify! 🚀
