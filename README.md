# Cars Service

## Installation

- Run `docker build -t cars/cars-service .` within the main directory.
- Then run `docker run -p 3001:3001 cars/cars-service`.
- Make a request to http://localhost:3001/cars.

## Description

- The express web server configuration is located within **./app.js**.
- The router configuration is located within **./src/router.js**.
- The endpoint functionality is located within **./src/routes/**.
- The service (db) functionality is located within **./src/db.js**.
- The schema is located within **./src/schema.js**.

## Testing

- The testing functionality is located within **./test/** and can be run with `npm test`.