## To Whomever Reviews my challenge

Hey! I'm Dylan! I'm excited for this opportunity, and I had so much fun working on this challenge.
Below is info on everything this challenge I got through.

## Deployment

To deploy this project cd into `api`

```bash
  npm install
  npm run start:dev
```

This starts the API, to start the react app, just run

```bash
  npm start
```

in the root directory.

## API Reference

#### Post Contact Form

```http
  POST contact-form
```

| Parameter | Type     | Description                                |
| :-------- | :------- | :----------------------------------------- |
| `body`    | `object` | firstName, lastName, title, email, message |

#### object {

firstName: 'String'
lastName: 'String'
title: 'String'
email: 'String'
message: 'String'
}

#### Message needs to be longer than 10 characters.

Takes data from the contact form and pushes it to the Mongo database on Atlas
