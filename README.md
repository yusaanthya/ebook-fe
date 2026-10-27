<h1 align='center'>缺E-Book<h1>
<h4 align='center'>閱讀，在生活中「缺一不可」<h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#achievements">Achievements</a> •
  <a href="#live-demo">Live Demo</a> •
  <a href="#credits">Credits</a> •
  <a href="#team-biographies">Team Biographies</a> •
</p>

## Key Features
### Digital Bookshelf + Book Reviews
<div align='center'>
  <img src='https://i.imgur.com/HWCe0R6.gif' />
</div>

  
  
## Achievements

### Membership
- [x] Account Registration
- [x] Account Login
- [ ] Registration Validation (WIP)
- [ ] Login Validation (WIP)
### E-commerce Mart
- [x] Shopping Cart
- [x] Wish List
- [x] Product Purchasing
### Digital Bookshelf
- [ ] Add Custom Categories (WIP)
- [x] Filtering in Custom Categories
- [x] Conditional Filter/Sorting
- [ ] Reading Progress Updating (WIP)
- [ ] Gift Sending (WIP)
### Book Reviews
- [x] Leave a comment
- [x] Edit the comments
- [ ] Delete the comments

## Local development

Use Node.js **24.22.1**, recorded in `.nvmrc`. This version includes the October 2026 Node.js security fixes. With nvm installed:

```bash
nvm install
nvm use
npm ci
cp .env.example .env
npm start
```

Open http://localhost:3005. Start `ebook-be` separately on port 3002 and configure its MySQL database and session secret. The frontend defaults to `http://localhost:3002/api/1.0`; set `VITE_API_URL` in `.env` to a full API URL for another environment. Vite embeds this value at build time, so restart the dev server or rebuild after changing it. Do not put secrets in `VITE_*` variables.

The Vite dev and preview servers bind to localhost and use port 3005 to match the backend CORS configuration. A port conflict fails explicitly instead of silently selecting another port.

```bash
npm run build       # Production files in build/
npm run preview     # Preview the production build at http://localhost:3005
npm run lint        # Existing-source lint report; legacy findings remain
npm audit           # Check known dependency advisories
```

Configure production static hosting to serve `index.html` for client-side routes. `npm run preview` is for local verification, not production hosting. There is no automated test suite in this repository; the obsolete CRA test/eject commands were removed.

The application now uses Vite with React 18. JSX source files use `.jsx`, and image imports use ES modules. Existing `.env` files using `REACT_APP_BASE_URL` must be migrated to `VITE_API_URL`. See [SECURITY-REVIEW.md](SECURITY-REVIEW.md) for verification results and remaining application risks.

## Credits

The project uses the following packages:
<br>

Frameworks
- [ReactJS(Hooks)](https://github.com/facebook/react/)
- [Node.js](https://nodejs.org/)

Database:
- [MySQL](https://www.mysql.com/)

CSS Preprocessor
- [Bootstrap5](https://getbootstrap.com/) + [SCSS](https://sass-lang.com/)

3rd Party Dependencies
- [Express](https://expressjs.com/) -- Server
- [express-validator](https://github.com/express-validator/express-validator) -- Data Validation
- [express-session](https://github.com/expressjs/session) -- Authentication
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js) -- Password Hashing
- [cors](https://github.com/expressjs/cors) -- Cross-Origin Resource Sharing
- [axios](https://axios-http.com/docs/intro) -- API Request
- [Chart.js](https://github.com/chartjs/Chart.js) -- Data Visualisation
- [MUI](https://mui.com/)
- [Reactjs-popup](https://github.com/yjose/reactjs-popup)
- [react-toastify](https://github.com/fkhadra/react-toastify)
- [Animate.css](https://animate.style/)
- [React-pdf](https://react-pdf.org/)

## Team Biographies
[YusaLiu](https://github.com/Anthya1104) -- Digital Bookshelf, Review System, Login/Registration, Server Building<br>
[Aaron_Chang](https://github.com/0xAaronFomo) -- Order System<br>
[cocohsieh](https://github.com/cocohsieh) -- E-book Mart, Shopping Cart, Wish List<br>
[vicliu0325](https://github.com/vicliu0325) -- Coupon System, Chat Room ( you will find it out in <a href='https://github.com/vicliu0325/chatrooms'>this repo</a>)<br>
[Jiayu721](https://github.com/Jiayu721) -- Home Page Layout<br>
[Lonck999](https://github.com/Lonck999) -- E-reader

