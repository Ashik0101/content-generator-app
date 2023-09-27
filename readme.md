# Content Generator App

The Content Generator App is a web application built using Node.js and React.js. It utilizes the GPT-3.5 API to generate creative content in four distinct categories: poems, jokes, stories, and quotes. Users can generate content by providing a keyword through the app's interface, and the app will dynamically create content based on the given keyword.

![UI](https://content-generator-app-images.s3.amazonaws.com/thumbnail.png)

![Poem Image](https://content-generator-app-images.s3.amazonaws.com/poem.png)

![Story Image](https://content-generator-app-images.s3.amazonaws.com/story.png)

![Joke Image](https://content-generator-app-images.s3.amazonaws.com/joke.png)
![Text Image](https://content-generator-app-images.s3.amazonaws.com/quote.png)

## Project Structure

The project is structured as follows:

- The `frontend` directory contains all the files and code related to the user interface of the application.
- The `backend` directory contains the server-side code responsible for handling API requests and integrating with the GPT-3.5 API.

## Content Categories and Endpoints

The Content Generator App supports four categories of content, each with its corresponding endpoint:

- **Poem Generator**:

  - Endpoint: [https://content-generator-backend-tnoc.onrender.com/generate/poem](https://content-generator-backend-tnoc.onrender.com/generate/poem)
  - Method : POST
  - Body : { "keyword": String }

- **Story Generator**:

  - Endpoint: [https://content-generator-backend-tnoc.onrender.com/generate/story](https://content-generator-backend-tnoc.onrender.com/generate/story)
  - Method : POST
  - Body : { "keyword": String }

- **Joke Generator**:

  - Endpoint: [https://content-generator-backend-tnoc.onrender.com/generate/joke](https://content-generator-backend-tnoc.onrender.com/generate/joke)
  - Method : POST
  - Body : { "keyword": String }

- **Quote Generator**:
  - Endpoint: [https://content-generator-backend-tnoc.onrender.com/generate/quote](https://content-generator-backend-tnoc.onrender.com/generate/quote)
  - Method : POST
  - Body : { "keyword": String }

## Getting Started

To set up this project on your local machine, follow these steps:

1. Clone the repository to your local environment.

   ```bash
   git clone https://github.com/Ashik0101/content-generator-app.git
   ```

2. Navigate to the project directory.

   ```bash
   cd content-generator-app
   ```

3. Install the dependencies for both the frontend and backend:

   ### Install frontend dependencies

   ```bash
    cd frontend
    npm install
   ```

   ### Install backend dependencies

   ```bash
    cd ../backend
    npm install
   ```

   ### Start the frontend server

   ```bash
   cd ../frontend
   npm start
   ```

   ### Start the backend server

   ```bash
    cd ../backend
    node index.js
   ```

## Usage

    1. Access the application using the provided URL.

    2. Choose one of the four content categories: Poem, Joke, Story, or Quote.

    3. Enter a keyword or phrase that you'd like the content to be based on.

    4. Click the "Generate" button, and the app will request content generation from the GPT-3.5 API based on your input.

    5. Display the generated content to the user.
