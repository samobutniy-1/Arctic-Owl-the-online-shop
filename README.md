# Arctic Owl — Winter Clothing & Gear Online Shop

A multi-page e-commerce website for winter clothing and outdoor gear, built with React and a local JSON database.

## Tech Stack

- **React** — component-based UI library used to build the entire interface
- **React Router** — handles client-side navigation between pages
- **JSON Server** — provides a local REST API based on `db.json`, simulating a real backend
- **SCSS** — styling with BEM methodology for structured and maintainable CSS

## Database

All product data is stored in `db.json` and served locally via JSON Server. Each product entry contains the following fields: name, price, discounted price, short description, full description, specifications, category, gender, and image URL.

## Pages

**Home** — hero section with category filters, a product carousel, and a full product listing with prices.

**Product Page** — full product details including long description, specifications, and an interactive size selector.

**Sale** — a dedicated page displaying all products with active discounts.

**Cart** — item list with quantity controls, removal option, and an order summary panel that calculates the total including discounts.

## Features

Products can be searched by name from any page using the search input. Categories available in the hero section and burger menu filter the product listing page accordingly. The navigation bar displays the current number of items in the cart. The carousel on the home page scrolls automatically on mobile and tablet devices. If a product image fails to load, a fallback placeholder is shown instead. The website is fully responsive and adapts to all screen sizes.

**Note:** "Your Account" and "About Us" links are not yet functional. Size selection on the product page is UI-only and is not saved.

## Getting Started

Make sure you have Node.js and npm installed.
```bash
git clone https://github.com/samobutniy-1/Arctic-Owl-the-online-shop.git
cd Arctic-Owl-the-online-shop/ArcticOwl
npm install
npm run start
```

`npm run start` launches both the React development server and JSON Server at the same time.

- App: `http://localhost:3000`
- API: `http://localhost:3001`

## Author

**samobutniy-1** — [GitHub](https://github.com/samobutniy-1)
