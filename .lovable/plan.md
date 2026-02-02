

## Change Social Preview to Logo

### What will change
The social preview image (shown when sharing links on Facebook, Twitter, LinkedIn, etc.) will be updated to use your CML Property Services logo instead of the favicon.

### Technical details
1. **Copy the logo to the public folder** - The logo at `src/assets/logo.png` needs to be copied to the `public/` folder so it's accessible for social media crawlers
2. **Update index.html** - Change the `og:image` and `twitter:image` meta tags to point to the logo file

### Files to modify
- `public/` - Add logo.png (copy from src/assets/logo.png)
- `index.html` - Update lines 14 and 18 to reference `/logo.png`

### Note
Social media platforms cache preview images, so changes may take some time to appear when sharing links. You can use tools like the [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) to refresh the cache.

