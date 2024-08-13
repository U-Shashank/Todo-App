# Task-Todo

## Hosting
Project has been hosted on vercel [click to visit](https://task-todo-nwlj.vercel.app).

## Getting Started

To run locally on your machine, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/U-Shashank/Task-Todo
   ```

2. **Navigate to Project Directory**
   ```bash
   cd Task-Todo
   ```

3. **Install Dependencies**
   ```bash
   npm run install-all
   ```

4. **Set Up Environment Variable**
   #### For client:
   Backend api endpoint (This will change when server is deployed)
   - VITE_HOST_URL = http://localhost:3000/api/v1
   #### For server:
   - MONGO_URI = mongodb connection string
   - JWT_SECRET = your jwt secret

5. **Run the App**
   ### In the main directory Swift-Cart:
   ```bash
   npm run start
   ```
   Will start both server and client together using concurrently

