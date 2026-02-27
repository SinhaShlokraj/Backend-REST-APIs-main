# Backend REST APIs - FSD Practical 5

## Objective
To create RESTful APIs for Products, Users, Cart, and Orders using Node.js and Express with proper middleware, validation, and server-side error handling.


## Technologies Used
- Node.js
- Express.js
- Postman
- GitHub


## Project Structure

Backend/
├── controllers/
├── routes/
├── app.js
├── package.json
├── .gitignore


## Installation Steps

1. Clone repository:
git clone https://github.com/AmitEpoch08/Backend-REST-APIs.git


2. Install dependencies:
npm install


3. Run server:
node app.js


Server runs on:
http://localhost:3000



## API Endpoints

### Products
- GET /products  
- POST /products  

### Users
- GET /users  
- POST /users  

### Cart
- GET /cart  
- POST /cart  

### Orders
- GET /orders  
- POST /orders  


## Middleware Used
- express.json() for parsing JSON requests


## Validation
- All POST requests validate required fields  
- Returns 400 error for invalid data  


## Error Handling
- Proper status codes
- JSON error messages


## Testing Tool
Postman is used to test all APIs.


## Output
All endpoints tested successfully using Postman.


## Conclusion
Successfully implemented REST APIs with middleware, validation, error handling and tested using Postman.

## Author
Amit Prajapat  
B.Tech CSE  
FSD Practical 5



