NANA - MERN Stack Clothing E-commerce Website

Overview
--------
Nana is a full-stack clothing e-commerce web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It offers a seamless shopping experience for users and includes a dedicated admin panel to manage products and deliveries. The project is inspired by real-world e-commerce platforms and developed as a long-term personal learning project.

Features
--------
- User authentication (register/login with JWT)
- Browse and search clothing products
- Product details with images, sizes, and prices
- Add to cart and checkout (payment integration optional)
- Order history for users
- Responsive design for all screen sizes

Admin Panel
-----------
- Admin login with secure access
- Create, edit, and delete clothing products
- Upload product images, set sizes and prices
- View customer orders
- Update delivery status (Pending, Shipped, Delivered)

Tech Stack
----------
- Frontend (User): React.js, Redux, Tailwind CSS
- Admin: React.js, separate dashboard UI
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT (JSON Web Tokens)
- File Upload: Multer / Cloudinary (optional)

Project Structure
-----------------
/frontend     - User-facing React application  
/admin        - Admin dashboard React application  
/backend      - Express.js API and MongoDB logic  
/uploads      - (Optional) Product image storage  
.env          - Environment variables

Setup Instructions
------------------
1. Clone the repository:
   git clone https://github.com/your-username/nana.git

2. Install dependencies:
   cd frontend && npm install  
   cd ../admin && npm install  
   cd ../backend && npm install

3. Configure environment variables:
   Create a `.env` file in the `/backend` folder with:
   MONGO_URI=your_mongodb_connection_string  
   JWT_SECRET=your_jwt_secret  
   CLOUDINARY_API_KEY=... (if used)

4. Run the app locally:
   - Backend: `npm run dev` (inside /backend)
   - Frontend (User): `npm start` (inside /frontend)
   - Admin Panel: `npm start` (inside /admin)

5. Access the app:
   - User Site: http://localhost:3000  
   - Admin Panel: http://localhost:3001 (or whichever port is configured)

Contributing
------------
This is a solo learning and development project. Contributions, forks, and ideas are welcome.

License
-------
MIT License

Author
------
Jyoti Bhushan Dahal
