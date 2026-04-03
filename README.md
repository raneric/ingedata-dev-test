### Setup Instructions

Follow these steps to set up and run the project:

1. **Install dependencies**  
   Run the following commands in both the `client` and `server` directories to install the necessary dependencies:

   ```bash
   cd ingedata-dev-test/client
   npm install
   ```

   ```bash
   cd ../server
   npm install
   ```

2. **Run the frontend and the backend**  
   The `docker-compose.yml` file, start two services `client` and `server` which run the react app and the node.js API:

   ```bash
   cd ..
   docker compose build
   docker compose up
   ```
