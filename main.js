step : 1 // First install  firebase-tools
npm install firebase-tools -g

step : 2 // login in your gmail account and then create one project.

step : 3 // Then go to your project directory 
firebase login // enter details 

step : 4 
npm run build

step : 5
firebase init

// ? What do you want to use as your public directory? build
// ? Configure as a single-page app (rewrite all urls to /index.html)? Yes
// ? Set up automatic builds and deploys with GitHub? No
// ? File build/index.html already exists. Overwrite? No

step : 6 // your project is now deployed 
firebase deploy

step : 7 
// go to firebase account 
// select your project 
// goto Hoisting 
