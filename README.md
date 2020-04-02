eJam Weather Report and forcasting using Yahoo API, React - Redux with Bootstrap By Pankaj 10-03-2020

1. download and install the dependenices by running npm install or npm i 
2. also give Yahoo app id, key and secret also from yahoo weather api in .env for production or create new file in config/dev.js for development
3. npm run build
4. npm start or npm run dev

you can change package.json 
"scripts": {
    "start": "node Server.js",
    
    to 
    "scripts": {
    "start": "react-scripts start",

To get weather report of particular city. Kindly follow below step

    Select city and click on submit button.
    You can see weather details of today date.
    Also modify code to see 4-5 days weather forcasting. Beacuse API returning weather forcasting also.

    <h3><a href="https://shielded-cove-60996.herokuapp.com/">Demo</a> </h3>
