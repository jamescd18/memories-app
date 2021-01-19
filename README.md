# memories-app
A MERN stack application about recording memories


This application was built by following the JavaScript Mastery tutorial series which can be [found here](https://www.youtube.com/watch?v=ngc9gnGgUdA&list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu).

The intention behind this project is to learn about how to build a comprehensive and integrated application with includes multiple different unfamiliar technologies.

Those technologies unfamiliar to me at the beginning of the project include: MongoDB, Redux, and Google OAuth.

This project also serves as good practice with technologies I am already familiar with, which include: Node.js, Express, and React.

Environment Variables:
- PORT: port for the Express server to run on
    - Development: Hard coded within `.server/index.js`
    - Production: As specified by Heroku / deployment platform
- MONGO_DB_URL: Connection url to MongoDB Cloud Atlas
    - Development: Placed inside `.vscode/launch.json`
    - Production: Set as an additional environment variable via Heroku / deployment platform