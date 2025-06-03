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

2. **Start the React frontend (Vite)**  
   Inside the `client` directory, start the development server:

   ```bash
   npm run dev
   ```

3. **Start the Express.js backend API**  
   Navigate to the backend's source directory and run the server:

   ```bash
   cd ../server/src
   node server.js
   ```

4. **Database Setup**  
   The API uses a lightweight SQLite database. No configuration is needed — the database is already pre-filled with data.  
   If the database is empty, you can seed it with the following command in the folder 

   ```bash
   # under the following folder "ingedata-dev-test/server/src/utils/"
   node utils/dbSeeds.js
   ```

### Architecture Decisions
The project follows a RESTful API architecture and React client application. This approach ensures future integrations such as mobile apps or third-party services without rewriting backend logic. Front-end and back-end can be deployed and maintained independently making them more scalable.

#### technology choices
React is a popular and powerful front-end framework with a great community and ecosystems making it easy to improve if later a more powerful react framework is needed to be implemented.  

SQlite is a lightweight database ideal for prototyping, easy to use, with the need to make a lot of configuration and deployment on a specific server.



#### Backend Design Principles  
Repository Pattern  
Encapsulates data access logic in reusable repositories. This prevents controllers from dealing with database operations directly.

#### Centralized Error Handling
A global middleware intercepts errors, ensuring consistent response formatting and simplifying debugging and logging.

### API Documentation
### 🔧 Setup Instructions

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

2. **Start the React frontend (Vite)**  
   Inside the `client` directory, start the development server:

   ```bash
   npm run dev
   ```

3. **Start the Express.js backend API**  
   Navigate to the backend's source directory and run the server:

   ```bash
   cd ../server/src
   node server.js
   ```

4. **Database Setup**  
   The API uses a lightweight SQLite database. No configuration is needed — the database is already pre-filled with data.  
   If the database is empty, you can seed it with the following command in the folder 

   ```bash
   # under the following folder "ingedata-dev-test/server/src/utils/"
   node utils/dbSeeds.js
   ```

### Additional Features
N/A


### AI Tool Usage
These tools have been used during the development :
  - Chat GPT : 
    - used as an AI assistant documentation for all libraries that I've used (react, express, sequelize). 
    - Helping on creating all fake data as database seeds
    - These tools helped to generate some standard with their css module and then just refined as need example :
      - The Table component
      - Calendar 
  - Codeium (windsurf) : 
    - an extension within VS code used for commenting code and generate JDocs and the refine manually as needed
    - Used for auto completion if the suggestion is interesting, mainly on css modules.

### Assumptions and Limitations
#### Assumptions  
    - A user cannot book dates that overlap with existing bookings they have to make a separate booking if there is another booked date between the range of date.
    - No authentication for now so the user data is based on a DUMMY_USER no constant defined in `ingedata-dev-test/client/src/utils/appConstant.js`
    - Admin endpoints are assumed to be protected (even if not implemented yet).
    - The system supports only one type of room price (no discounts or promo logic).
#### Limitations
    - No user authentication implemented yet.
    - No role-based authorization - all routes are publicly accessible.
    - Limited error feedback on the frontend UI.
    - Admin stats are basic limited to the current month a filter should have done.
    - All tables are not paginated which can lead to a performance issues when the database grow

