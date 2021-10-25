# Think Twice

![Home Page](Screenshot%202021-10-25%20154726.png)

### Description

Full stack application that enables people to share their new project ideas with authentication and voting system.

**Why I made it ?**

I made this app to learn the full workflow of the MERN stack applications from end to end and to make my hands dirty with SPAs.

### Tech Stack

- React
- Material Ui
- Redux
- Node
- Express
- MongoDB
- Joi Validation

### Features

1. custom auth
2. OAuth
3. Post
4. Voting System
5. Responsive
6. Pagination

### Installation Guide

in the Think-Twice/Server directory create a file named **.env** and put your credentials in this file.

```
Mongo_URI = "You database connection URI"
SECRET = "Your jwt secret"
```

run the server ..

```bash
git clone https://github.com/menaaziz27/Think-Twice.git
cd Think-Twice/Server
npm install
npm start
```

open a new shell in the **Think-Twice/Client** directory

```bash
npm install
npm start
```

this will boot the application up on [http://localhost:3000](http://localhost).
