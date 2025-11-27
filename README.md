# Mohammad Ashfaque Khokhar - Resume Website

https://ashfaque-khokhar.github.io/resume/


A clean, simple, and professional resume website built with pure HTML5, CSS3, and vanilla JavaScript. Designed to match traditional resume layouts with modern web capabilities.

## 🚀 Features

- **Simple & Clean Design**: Traditional resume layout optimized for the web
- **Two-Column Layout**: Sidebar for contact, skills, projects, and languages; main content for experience and education
- **Fully Responsive**: Seamlessly adapts to desktop, tablet, and mobile devices
- **Print-Friendly**: Optimized for printing and PDF generation
- **Fast Loading**: No frameworks or heavy libraries - pure vanilla code
- **Professional Appearance**: Clean typography and minimal color scheme

## 📁 Project Structure

```
resume/
├── index.html          # Semantic HTML structure
├── styles.css          # Clean, responsive styling
├── script.js           # Minimal JavaScript interactions
├── assets/             # Folder for images and resources
└── README.md           # Documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup for better structure
- **CSS3**: Grid layout for two-column design, flexbox for components
- **Vanilla JavaScript**: Simple interactions without dependencies
- **CSS Variables**: Easy color and spacing customization

## 🎨 Design Features

### Layout
- **Desktop**: Two-column layout (300px sidebar + flexible main content)
- **Mobile**: Single column stack for easy reading
- **Header**: Full-width with name, title, and professional summary

### Color Palette
- Primary: `#2c3e50` (Dark slate)
- Accent: `#3b5998` (Professional blue)
- Skill Tags: `#34495e` (Charcoal)
- Background: Clean white with subtle gray accents

### Typography
- System fonts for optimal performance
- Clear hierarchy with proper sizing
- Professional and readable

## 📱 Sections Included

### Sidebar (Left Column)
1. **Contact Information**: Email, phone, LinkedIn, GitHub with icons
2. **Skills**: Tag-based display of technical skills
3. **Projects**: Key project highlights
4. **Languages**: Spoken languages with proficiency level

### Main Content (Right Column)
1. **Work Experience**: Three positions with detailed responsibilities
2. **Education**: Academic qualifications with dates and grades

## 🚦 Getting Started

### No Installation Required!

1. Download or clone the repository
2. Open `index.html` in any modern web browser
3. That's it! No build process, no dependencies

### Optional: Local Server

For a better development experience:

```bash
# Using Python
cd /path/to/resume
python3 -m http.server 8000

# Using PHP
php -S localhost:8000

# Then visit http://localhost:8000
```

## 📝 Customization Guide

### Update Your Information

**Edit `index.html`:**
- Header section: Name, title, professional summary
- Contact section: Email, phone, social links
- Skills section: Add/remove skill tags
- Projects section: Update project descriptions
- Experience section: Add your work history
- Education section: Update academic information

### Modify Colors

**Edit `styles.css`** (at the top in `:root`):

```css
:root {
    --primary-color: #2c3e50;   /* Main text and headings */
    --accent-color: #3b5998;    /* Accent color */
    --bg-tag: #34495e;          /* Skill tag background */
    /* ... customize other colors ... */
}
```

### Adjust Layout

**Sidebar Width:**
```css
.resume-content {
    grid-template-columns: 300px 1fr; /* Change 300px to your preference */
}
```

**Spacing:**
Change spacing variables in `:root` section of `styles.css`

## 🌐 Browser Support

Works on all modern browsers:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 📄 Print & PDF Export

### Print from Browser
1. **Chrome/Edge**: Press `Ctrl+P` (Windows) or `Cmd+P` (Mac)
2. **Settings**: 
   - Layout: Portrait
   - Margins: Default or None
   - Background graphics: Enabled
3. **Save as PDF** or Print

### Tips for Best Results
- The design automatically optimizes for print
- Skill tags maintain their colors when printed
- Layout adjusts to fit standard paper sizes
- All content fits cleanly on pages

## ✨ JavaScript Features

This design uses minimal JavaScript for a clean, simple experience:

1. **Smooth Scrolling**: For any anchor links
2. **External Link Security**: Automatic `rel="noopener noreferrer"` for safety
3. **Print Optimization**: Detect and handle print events
4. **Keyboard Accessibility**: Full keyboard navigation support
5. **Responsive Detection**: Mobile-friendly interactions
6. **Performance Monitoring**: Optional load time tracking

## 📦 Deployment Options

### GitHub Pages
1. Create a repository and push your files
2. Go to Settings → Pages
3. Select main branch
4. Your site will be live at `https://username.github.io/repo-name`

### Netlify
1. Drag and drop the project folder to Netlify
2. Site goes live instantly
3. Free SSL certificate included

### Vercel
1. Import your GitHub repository
2. Automatic deployment on push
3. Custom domain support

### Traditional Web Hosting
1. Upload files via FTP/cPanel
2. Ensure `index.html` is in the root directory
3. Access via your domain

## 🎯 SEO & Performance

- **Fast Loading**: < 100KB total size
- **Semantic HTML**: Better search engine indexing
- **Mobile Optimized**: Google mobile-first indexing friendly
- **Accessibility**: ARIA labels and keyboard navigation
- **Print Optimized**: Professional PDF generation

## 📸 Adding a Profile Photo

1. Save your photo as `profile.jpg` in the `assets/` folder
2. Add to header in `index.html`:

```html
<div class="header-content">
    <img src="assets/profile.jpg" alt="Mohammad Ashfaque Khokhar" class="profile-photo">
    <h1>Mohammad Ashfaque Khokhar</h1>
    <!-- ... rest of content ... -->
</div>
```

3. Add CSS styling:

```css
.profile-photo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 1rem;
}
```

## 🔧 Troubleshooting

### Layout Issues on Mobile?
- Clear browser cache
- Check viewport meta tag in HTML
- Test in multiple browsers

### Skills Tags Not Wrapping?
- Ensure `.skills-list` has `flex-wrap: wrap`
- Check for very long skill names

### Print Layout Problems?
- Enable "Background graphics" in print settings
- Use "Save as PDF" for best results
- Check print preview before printing

## 💡 Tips for Success

1. **Keep it Updated**: Regularly update your experience and skills
2. **Concise Content**: Use bullet points and clear descriptions
3. **Keywords**: Include relevant keywords for your industry
4. **Proofread**: Check for typos and grammar
5. **Test Print**: Always preview how it looks printed/as PDF
6. **Mobile Check**: View on different devices before publishing

## 📞 Contact

**Mohammad Ashfaque Khokhar**
- Email: [63ashfaque@gmail.com](mailto:63ashfaque@gmail.com)
- Phone: [+918793215893](tel:+918793215893)
- LinkedIn: [linkedin.com/in/ashfaque-khokhar](https://linkedin.com/in/ashfaque-khokhar)
- GitHub: [github.com/63Ashfaque](https://github.com/63Ashfaque)

## 📄 License

This project is open source and available for personal use. Feel free to use it as a template for your own resume!

## 🙏 Credits

Designed and developed following traditional resume best practices with modern web standards. Built with clean code and attention to detail.

---

**Simple, Clean, Professional** - Built with HTML5, CSS3, and Vanilla JavaScript
