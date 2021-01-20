# memories-app
A MERN stack application about recording memories

### Purpose
The intention behind this project is to learn about how to build a comprehensive and integrated application with includes multiple different unfamiliar technologies.
This project also serves as good practice with technologies I am already familiar with.
This application was built by following the JavaScript Mastery tutorial series, which can be [found here](https://www.youtube.com/watch?v=ngc9gnGgUdA&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu).

### Technologies
- MERN Stack
    - MongoDB<sup>*</sup>
    - Express
    - React
    - Node.js
- Other
    - Redux<sup>*</sup>
    - Google OAuth<sup>*</sup>

<sup>*</sup>: Technologies I am unfamiliar with at the beginning of the project

### Environment Variables
- PORT: port for the Express server to run on
    - Development: Hard coded within `.server/index.js`
    - Production: As specified by Heroku / deployment platform
- MONGO_DB_URL: Connection url to MongoDB Cloud Atlas
    - Development: Placed inside `.vscode/launch.json`
    - Production: Set as an additional environment variable via Heroku / deployment platform