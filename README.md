## Quick Repository Setup

        echo "# otpless_react_node" >> README.md
        git init
        git add README.md
        git commit -m "first commit"
        git branch -M main
        git remote add origin https://github.com/YatinDevs/otpless_react_node.git
        git push -u origin main

## Create a Vite React App (Client) :

> Setup react app with Tailwind css and Vite :

> 1.  Create a React Vite Project

            npm create vite@latest otpless_react_client -- --template react
            cd otpless_react_node
            npm install
            npm run dev

> 2.  Install Tailwind CSS

            npm install -D tailwindcss postcss autoprefixer
            npx tailwindcss init -p

> 3.  Configure your template paths -> In tailwind.config.js

          /** @type {import('tailwindcss').Config} */
          export default {
          content: [
              "./index.html",
              "./src/**/*.{js,ts,jsx,tsx}",
          ],
          theme: {
              extend: {},
          },
          plugins: [],
          }

> 4.  Start Your build process :

            npm run dev

## Create a Node App (Server) :

> Setup Node App with PostgresSQL ORM & Digital Ocean ManagedDB & S3 Multer Storage DO :

> 1.  Create Node Project :

            npm init or npm init -y
            npm install
            npm i express
            npm i nodemon
            npm run dev or npm start
            Add .gitignore
            Add App folder
              - config
              - controller
              - middleware
              - models
              - routes
              - index.js

> 2. Setup Database to Node server :

            npm i pg
            npm i sequelize

    > created config folder -> db.config.js -> configuration with env

    > created utils folder -> db.js -> configured db with sequelize

    > index.js -> dotenv config for env

    > sequelize -> authentication -> synchronization with models -> port connection

> 3. Creating Model :

        user model
