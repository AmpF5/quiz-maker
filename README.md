
<p align="center"><img src="https://github.com/AmpF5/quiz-maker/assets/45670706/f4ca11de-e995-4939-95a1-e7368209646e" alt="Logo" height="128"></p>
<h1 align="center">Quiz Maker</h1>


<p align="center">It's a simple personal app just to help me and my friends to create quizes to study at Uni.</p>
<hr>

## Download / How to use it?

### Local download and local run
Git clone repo to desire folder.

Then run following commands.

```npm install```

```npm build```

```ng s``` - to run a local server

### Host a server and firestore
To host a server you need a firebase project.

Then in ```/src``` create a new folder name ```environment```.

Inside a newly created folder type 
```
export const config = {
  firebase: {
    // HERE IS YOUR FIREBASE INFO 
    }
}
```
### How ot use it?


## How it works?

I'm scrapping pdf's to get questions data and add them directly to database as .json. In most cases it's diffcult to get correct answers from scrapping(due to different kinds of marking correct answers) so you need complete whole quiz and edit data here(if you don't have access to database).

Depending on the pdf, it is very possible that you will need to modify the scrapping algorithm.

Hosting is via firebase hosting.

Database is firebase firestore.
