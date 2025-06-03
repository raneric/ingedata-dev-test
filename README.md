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
The project follows a RESTful API architecture backed by a React client application. This approach ensures future integrations such as mobile apps or third-party services without rewriting backend logic. 

Backend Design Principles
Repository Pattern
Encapsulates data access logic in reusable repositories. This prevents controllers from dealing with database operations directly.

Centralized Error Handling
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

1- The database : Using an embedded database like sqlite comes with some limitations if the project grows, and definitely not a good idea. For example we can’t deploy the api on multiple servers for geographical performance reasons for example, so that the API too becomes vulnerable to fault issues.

2- no security nor access to resources restrictions on the back-end, but hard to implement without a full authentication process

3- Using typescript would be a great idea on the back-end to add more abstraction to the repository. Thee controllers still depend on repository concert class instead of an abstraction. Which could involve a lot of refactoring if the database changes instead of just using different classes implementation. The open closed is not respected.

4- Adding Unit would have helped during the development phase to check if all functionality that had been implemented still work fine.

5- Adding more feedback to user on some action, like notification that booking has been cancelled correctly or has been added correctly

6- Using library on front-end will improve UI/UX and reduce components that had been created

