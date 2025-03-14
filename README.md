# ABC Motors Financial & Distribution Solution

A comprehensive web-based Financial & Distribution Management System for ABC Automotive Enterprises (Pvt) Ltd., built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- **User Authentication & Access Control**

  - Secure login system
  - Role-based access control
  - User activity logging

- **Master Data Management**

  - Company profiles
  - Supplier management
  - Customer database
  - Product catalog

- **Inventory Management**

  - Stock control
  - Price management
  - Discount slab configuration
  - Stock alerts
  - Batch tracking

- **Sales & Distribution**

  - Order processing
  - Invoice generation
  - Credit management
  - Returns processing
  - Delivery tracking

- **Financial Management**

  - Payment processing
  - Account transactions
  - Credit control
  - Financial statements

- **Reporting & Analytics**
  - Sales reports
  - Stock reports
  - Debtor reports
  - Financial logs
  - Custom report generation

## Tech Stack

- **Frontend:** React.js, Redux Toolkit, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Real-time Updates:** Socket.io
- **Authentication:** JWT

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/abc-motors.git
   cd abc-motors
   ```

2. Install dependencies

   ```bash
   # Install root dependencies
   npm install

   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   ```

3. Set up environment variables

   - Create `.env` in the server directory
   - Create `.env` in the client directory
   - Configure necessary environment variables

4. Start development servers

   ```bash
   # Start both frontend and backend
   npm run dev

   # Start frontend only
   npm run client

   # Start backend only
   npm run server
   ```

## Project Structure

```
abc-motors/
├── client/          # React frontend
├── server/          # Node.js backend
├── LICENSE
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Avishka Gihan
