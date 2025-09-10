
# Final Project Documentation

## Dulmar (Overview)
Website-kan waxa uu ka kooban yahay backend (Express.js, MongoDB) iyo frontend (React, Vite, TailwindCSS). Waa e-commerce/bookstore app leh user authentication, product management, iyo cart system.

---

## Backend (Node.js/Express)

### Faylasha Muhiimka ah

- **server.js**: Entry point. Waxay connect gareysaa database, waxayna load-gareysaa routers.
- **package.json**: Waxay xafidaa dependencies sida express, mongoose, cors, multer, dotenv, iwm.
- **.env**: Sirta (environment variables) sida db_Url iyo Port.

### Folders
- **controllers/**: Waxay qabataa logic-ka API endpoints.
	- `customerController.js`: Register/login customer, bcrypt hash/compare password.
	- `productController.js`: CRUD products (create, read, update, delete).
- **models/**: Mongoose schemas.
	- `customerModel.js`: Schema for customer (name, phone, email, password).
	- `ProductModel.js`: Schema for product (name, price, desc, quantity, prImage, status, category).
- **routers/**: API endpoints.
	- `customerRouter.js`: /create/customer, /login/customer
	- `ProductRouter.js`: /create/product, /read/product, /readSingle/product/:id, /update/product/:id, /delete/product/:id
- **middlewares/**: Middleware functions.
	- `UploadImage.js`: Multer config for image upload.
- **images/**: Folder for uploaded product images.

### How it works
1. **Start server**: `npm install && npm start` (backend folder)
2. **API endpoints**: 
	 - Register: POST /create/customer
	 - Login: POST /login/customer
	 - Add Product: POST /create/product (with image)
	 - Get Products: GET /read/product
	 - Get Single Product: GET /readSingle/product/:id
	 - Update Product: PUT /update/product/:id
	 - Delete Product: DELETE /delete/product/:id

---

## Frontend (React + Vite)

### Faylasha Muhiimka ah
- **src/App.jsx**: Main app, routes all pages.
- **src/main.jsx**: Entry point, wraps App with BrowserRouter.
- **src/index.css**: TailwindCSS styles.

### Components
- **Header.jsx**: Navigation bar, login/register/logout, shows user initial if logged in.
- **HeroSection.jsx**: Home page hero/banner.
- **Sidebar.jsx**: Dashboard navigation (admin features).
- **AddProducts.jsx**: Form to add new product (with image upload).
- **UpdateProduct.jsx**: Edit product info and image.
- **Cart.jsx**: Shopping cart, add/remove/increment/decrement products, calculates total.

### Pages
- **Home.jsx**: Home page, shows products, filter by category, add to cart.
- **dashboard.jsx**: Admin dashboard, shows sidebar.
- **products.jsx**: Table of all products, edit/delete actions.
- **Login.jsx**: Customer login form, saves user to localStorage.
- **Register.jsx**: Customer registration form.

### How it works
1. **Install dependencies**: `npm install` (frontend folder)
2. **Run dev server**: `npm run dev`
3. **Navigate**:
	 - `/` Home page
	 - `/products` Product list
	 - `/addProducts` Add product
	 - `/updateProduct/:id` Edit product
	 - `/Cart` Shopping cart
	 - `/Register` Register
	 - `/Login` Login

### Features
- User registration/login (localStorage)
- Add/edit/delete products (admin)
- Upload product images
- Shopping cart (localStorage)
- Responsive UI (TailwindCSS)

---

## Step-by-step File Documentation

### Backend
- **server.js**: Connects to MongoDB, loads routers, serves images, starts server.
- **controllers/customerController.js**: Handles register/login, password hashing, error handling.
- **controllers/productController.js**: Handles CRUD for products, error handling.
- **models/customerModel.js**: Customer schema, required fields, unique email.
- **models/ProductModel.js**: Product schema, auto-increment id, status based on quantity.
- **middlewares/UploadImage.js**: Multer config for storing images in /images.
- **routers/customerRouter.js**: POST /create/customer, POST /login/customer.
- **routers/ProductRouter.js**: CRUD endpoints for products, uses uploadImage middleware.

### Frontend
- **src/App.jsx**: Defines all routes, loads Header.
- **src/main.jsx**: Renders App inside BrowserRouter.
- **components/Header.jsx**: Shows navigation, login/register/logout, user initial.
- **components/HeroSection.jsx**: Hero banner for home page.
- **components/Sidebar.jsx**: Dashboard navigation links.
- **components/AddProducts.jsx**: Form to add product, uses axios to POST to backend.
- **components/UpdateProduct.jsx**: Form to edit product, uses axios to PUT to backend.
- **components/Cart.jsx**: Shows products in cart, allows quantity change, remove, calculates total.
- **pages/Home.jsx**: Fetches and displays products, add to cart.
- **pages/dashboard.jsx**: Loads Sidebar for admin.
- **pages/products.jsx**: Table of products, edit/delete actions.
- **pages/Login.jsx**: Login form, saves user to localStorage.
- **pages/Register.jsx**: Registration form.

---

## Setup & Run

1. **Backend**
	 - `cd backend`
	 - `npm install`
	 - Add `.env` file with:
		 - `db_Url=YOUR_MONGODB_URL`
		 - `Port=3003`
	 - `npm start`

2. **Frontend**
	 - `cd frontend`
	 - `npm install`
	 - `npm run dev`

---

## Fariin (Message)
Haddii aad su'aal qabto ama aad rabto in aad wax ka beddesho, eeg faylasha kor ku xusan. Mashruucan waxa uu ku habboon yahay in la barto React, Express, MongoDB, iyo TailwindCSS.

---

## English Summary
This project is a full-stack e-commerce/bookstore app with user authentication, product management, and a shopping cart. Backend is built with Express.js and MongoDB, frontend with React, Vite, and TailwindCSS. See above for detailed file-by-file documentation and setup instructions.
