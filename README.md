
# Blog Application - Final Project

## Description

Taste of joy is a food blog application, so that users can get inspiration for their daily meals.

The application is build with Mongoose, ExpressJS, React and NodeJs.

## Getting Started

Would you like to see the content of the page? Please use the following credentials to log in: email: user1, password: password1) or create an account using the Sign up button. Click this link to get access to the page: [Link]("").

# Backend Configuration

## API Entities / Collection

1. Users
2. Recipes
3. Reviews

## Routes

Path: / Method: GET Description: Returns welcome message: "Welcome tot the API"!

## API Routes - CRUD

* User Routes

Path: /api/users Method: GET Description: Returns all users

Path: /api/users/:id Method: GET Description: Returns a single users selected by id

Path: /api/users Method: POST Body: {username: String, password: String} Description: Creates a new User

Path: /api/users/:id Method: PUT Description: Update an existing user selected by the id

Path: /api/users/:id Method: DELETE Description: Delete a user selected by the id

Path: /api/users/signup Method: POST  Description: Allow the user to sign up and access the page

Path: /api/users/signin Method: POST  Description: Allow the user to sign in and access the page


* Recipes Routes

Path: /api/recipes Method: GET Description: Returns all recipes

Path: /api/recipes/:id Method: GET Description: Returns a single recipe selected by id

Path: /api/recipes Method: POST Body: {title: String, image: String, ingredients: Array, instructions: Array} Description: Creates a new recipe

Path: /api/recipes/:id Method: PUT Description: Update an existing recipe selected by the id

Path: /api/recipes/:id Method: DELETE Description: Delete a recipe selected by the id

* Reviews Routes

Path: /api/reviews Method: GET Description: Returns all reviews

Path: /api/reviews/:id Method: GET Description: Returns a single review  selected by id

Path: /api/reviews Method: POST Body: {user_id: ref: "Users", username: String, review: String} Description: Creates a new review

Path: /api/review/:id Method: PUT Description: Update an existing review selected by the id

Path: /api/review/:id Method: DELETE Description: Delete a review selected by the id




## Future updates

The blog application is going to have more features in the future.

1. I am going to implement a search bar for the user to search the recipes easily.
2. I am planning to create a section where users can add their own recipes.

## Resources
* [Trello website]("https://trello.com/b/V2Mymh3I/capstone-project-blog-app") 

* [Draw.io]("https://app.diagrams.net/")

* [Mongoose Documentation]("https://mongoosejs.com/docs/")

* [Stackoverflow]("https://stackoverflow.com/questions/37669391/how-to-get-rid-of-underline-for-link-component-of-react-router")




Link to the frontend repo:  https://github.com/copilpatricia/capstone_project_frontend

Link to the backend deployed website: https://blog-app-backend-nrpv.onrender.com



