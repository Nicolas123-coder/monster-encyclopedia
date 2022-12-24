# The Monsters Encyclopedia 👽
>> Project Link : https://nicolas123-coder.github.io/monster-encyclopedia/
## A Brief Explanation

![actions build](https://github.com/Nicolas123-coder/monster-encyclopedia/actions/workflows/CD.yml/badge.svg)

Monsters Encyclopedia is a simple project built for me to learn and remember some concepts of React.
You can search a monster name and see his name and email.

- The project uses React Class Components (Hooks implementation in the other branch).
- In the components folder I separeted the Card/Card-List/Search-Box in different components, to build the components like Lego blocks️.
- Each component folder has the Jsx and his Css.

## App.js
-  In the App.js file, I created 2 state variables, the monsters array is populated when the Component Did Mount runs to fetch the json data.
-  The filtered monsters var is the matched monsters that has been filtered by the ```monsters.filter()``` using the search field (string typed) returned by the SeachBox OnChange property. 
-  The CardList component returns the <Card> Component for each monster in the list.
-  The Card component return the image (requested in robohash) and the monster name and email.

## How to run
```npm i```
```npm run start```

> more scripts in the package.json file

## Deploy Info
- I also use GitHub Pages to deploy the application, with Github actions I can see the deploy and the build steps.
- You can see the details of the steps in the workflow file

