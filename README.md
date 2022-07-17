# SUS - Simple URL Shortener

Simple URL Shortener built with [Hapi](https://hapi.dev/) and [Sequelize](https://sequelize.org/) (MySQL).

***Note: this API is still in alpha stage. this project is just for hobbyist.***

## Features
- [x] Custom URL.
- [x] Random Generate URL.
- [ ] More features coming soon...

## To-Do
- [ ] API: Make it more stable & secure.
  - [ ] Rewrite to TypeScript: Reduce bugs and improve security.
  - [ ] Object schema validation.
  - [ ] Unit Test (use lab)
- [ ] API: User can custom number of digits of customURL.
- [ ] API: Follow RESTful API principle/standard
- [ ] Frontend: Add sus-client-frontend.
- [ ] Frontend: Add sus-admin-dashboard.
- [ ] Frontend: Using PaperCSS
- [ ] Documentation: Easy to read and follow.
- [ ] Documentation: Guide for Deploying project.

## News
- Jul 16: First Launching!

## Getting started

- Before start
  - Make sure you have MySQL installed in your operating system.
  - Optional: 
    - [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) or [DBeaver](https://dbeaver.io/download/) - MySQL Client.
    - [Insomnia](https://insomnia.rest/download) or [Postman](https://www.postman.com/downloads/?utm_source=postman-home) - API Client.
- Clone Repo
    ```
    git clone https://github.com/Indra2108/sus.git
    cd sus
    npm install
    ```
- Start MySQL service
  ```
  sudo systemctl start mysqld
  ```
  make sure if `mysqld` running correctly with `systemctl status mysqld`.
  ```
  [indra@fedora ~]$ systemctl status mysqld
  ● mysqld.service - MySQL 8.0 database server
     Loaded: loaded (/usr/lib/systemd/system/mysqld.service; disabled; vendor preset: disabled)
     Active: active (running) since Thu 2022-07-14 21:38:18 WIB; 15h ago
    Process: 11216 ExecStartPre=/usr/libexec/mysql-check-socket (code=exited, status=0/SUCCESS)
    Process: 11238 ExecStartPre=/usr/libexec/mysql-prepare-db-dir mysqld.service (code=exited, status=0/SUCCESS)
   Main PID: 11276 (mysqld)
     Status: "Server is operational"
  ```

- Create Database
  ```
  npx sequelize-cli db:create
  ```

- Create Table
  - Go to directory `src/dbconfig/models/index.js`
  - Uncomment the line 37
    ```js
    sequelize.sync({ force: true })
    ```
  - run `node src/dbconfig/models/index.js`
  - Comment the line 37
    ```js
    // sequelize.sync({ force: true })
    ```
  - run `npm test`

## API Documentation

Base URL: `http://localhost:3000`

- **[POST]** `/sendurl`
  - Description: Client send JSON. User can custom their originalURL in customURL. *if you fill blank on customURL, the server will automatically random generate the URL*.
  - Request body type: `JSON`
  - Request body value: 
    - `originalURL`: type: `string`, allowNull: **false**
    - `customURL`: type: `string`, allowNull: **true**
  - Request body: 
    ```json
    {
      "originalURL": "<ORIGINAL-URL-STRING>",
      "customURL": "<USER-COSTUMIZED-URL-STRING>"
    }
    ```
  - Endpoint example: 
    ```
    http://localhost:3000/sendurl
    ```
  - Request body example:
    ```json
    {
      "originalURL": "https://developer.mozilla.org/en-US/",
      "customURL": "mdn"
    }
    ```
    ```json
    {
      "originalURL": "https://developer.mozilla.org/en-US/",
      "customURL": "" // server will automatically random generate the URL, if you fill this blank
    }
    ```

- **[GET]** `/:params`
  - Description: User insert customURL to get redirected to the website. 
  - Request type: `params`
  - Example:
    ```
    http://localhost:3000/mdn
    ```
    ```
    http://localhost:3000/KH0cm // if you previously leave the customURL blank.
    ```

2022 - Indra Damar Jati [Indra2108@github]('https://github.com/Indra2108)
