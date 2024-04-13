# Next.js Authentication App

This project is a basic authentication app built using Next.js. It allows users to sign up, log in, and access authenticated routes. Additionally, email verification is required for successful login.

## Check the app here: [NextAuth](https://next-auth-ten-sigma.vercel.app)

## Features

- User Sign Up: Users can create a new account by providing their email and password.
- Email Verification: After signing up, users receive an email with a verification link. They must verify their email before being able to log in.
- User Log In: Once their email is verified, users can log in with their credentials.
- Protected Routes: Certain routes are protected and can only be accessed by authenticated users.

## Technologies Used

- Next.js: A React framework for building server-side rendered applications.
- React: A JavaScript library for building user interfaces.
- Node.js: A JavaScript runtime for building server-side applications.
- Express.js: A minimal and flexible Node.js web application framework.
- MongoDB: A NoSQL database used for storing user data.
- JSON Web Tokens (JWT): For authenticating users and creating secure access tokens.
- Nodemailer: For sending verification emails to users.
- bcrypt: For hashing passwords before storing them in the database.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- MongoDB installed locally or accessible remotely.
- SMTP server for sending emails (e.g., Gmail, SendGrid).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Advanced-Boy-Shreyash/NextAuth.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nextauth
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```
    MONGO_URI = <your-mongodb-uri>
    TOKEN_SECRET = <your-jwt-secret>
    DOMAIN = http://localhost:3000
    EMAIL_HOST = <your-smtp-host>
    EMAIL_PORT = <your-smtp-port>
    EMAIL_USER = <your-smtp-email>
    EMAIL_PASSWORD = <your-smtp-password>
   ```

### Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000` to access the application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any problems or have suggestions for improvements.
