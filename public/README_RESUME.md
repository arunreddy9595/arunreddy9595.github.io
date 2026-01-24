# Resume PDF Conversion Guide

## Current Status
Your resume is currently in HTML format: `Arun_Reddy_Singireddy_Resume.html`

## How to Convert HTML Resume to PDF

### Option 1: Using Browser (Recommended for Quick Solution)
1. Open `Arun_Reddy_Singireddy_Resume.html` in Chrome/Edge
2. Press `Ctrl + P` (or `Cmd + P` on Mac)
3. Select "Save as PDF" as destination
4. Adjust settings:
   - Layout: Portrait
   - Margins: Default
   - Background graphics: Enabled
5. Save as `Arun_Reddy_Singireddy_Resume.pdf` in this `public/` folder

### Option 2: Using Online Tools
- Visit sites like:
  - https://www.adobe.com/acrobat/online/html-to-pdf.html
  - https://cloudconvert.com/html-to-pdf
- Upload your HTML file
- Download the generated PDF

### Option 3: Using Node.js Tool (Puppeteer)
```bash
npm install -g html-pdf-node
# Then run conversion script
```

### After Creating PDF
1. Save the PDF as `Arun_Reddy_Singireddy_Resume.pdf` in the `public/` folder
2. Update the download link in `src/App.jsx`:
   - Change from: `href="/Arun_Reddy_Singireddy_Resume.html"`
   - Change to: `href="/Arun_Reddy_Singireddy_Resume.pdf"`
   - Change download attribute to: `download="Arun_Reddy_Singireddy_Resume.pdf"`

### Benefits of PDF Format
- ✅ Universal compatibility
- ✅ Preserves formatting across all devices
- ✅ Professional appearance
- ✅ ATS (Applicant Tracking System) friendly
- ✅ Smaller file size
- ✅ Cannot be easily modified

## Quick Command to Update Link
After creating the PDF, search for this in App.jsx:
```jsx
href="/Arun_Reddy_Singireddy_Resume.html"
```
And replace with:
```jsx
href="/Arun_Reddy_Singireddy_Resume.pdf"
```
