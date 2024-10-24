# Journey Mentor REST Countries API

## Demo & Development Links
- Live Demo: [https://talkhabi.liara.run/](https://talkhabi.liara.run/)

## Technologies Used
- Nuxt 3
- Axios
- BEM Methodology
- Fuse.js
- Vue
- And more...

## Technical Notes

### Filtering and Sorting
While it would have been possible to use API requests for filtering and sorting items on the main page, this approach was deemed unnecessary since all countries need to be loaded initially anyway.

### Potential Improvements
1. **Performance Enhancement**
- Implementation of virtual scroll for better performance

2. **Dark Mode**
- Currently using localStorage for dark mode state management
- Could be alternatively implemented using cookies

3. **Development Environment**
- Recommended to configure ESLint + Prettier for better development experience

4. **Additional Improvements**
- Further improvements could be considered but were skipped due to time constraints

## Installation & Running

### Prerequisites
- Node.js version 20 or higher

### Setup Instructions
```bash
# Install dependencies
npm ci

# Development server
npm run dev

# OR

# Production build
npm run build
npm run preview
