# Medwallet

Medwallet is a resource to view payment data for healthcare providers and teaching hospitals. Users can search payments by healthcare provider type (also referred to as recipient type), and can export the search results to an XLS file.

<!-- The data is updated once the newest year's datastore is released by the Open Payments API. -->

#### Contents

- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Features](#features)
- [About the Developer](#about-the-developer)

## Tech Stack

**Backend:** Python3, Flask

**Frontend:** JavaScript, React, HTML5, CSS3, SASS, Tailwind, Bootstrap, Cypress

**APIs:** Open Payments API

**Deployment:** Render, Vercel
<!-- ok idt i can deploy on just render bc user needs to be able to download and run on their own local machine as well and make edits too-->

## Installation

**Prerequisites**

To run Medwallet, you will need to have Python 3 (version 3.3 or later), Node, and NPM installed on your machine.

**Running Medwallet on your machine**

Clone the Medwallet backend repository and cd into it
```shell
git clone https://github.com/cindywongdev/medwallet_backend.git
cd medwallet_backend
```
Create and activate the virtual environment
```shell
python3 -m venv flaskenv
source ./flaskenv/bin/activate
```
Install dependencies from requirements.txt
```shell
pip3 install -r requirements.txt
```
Run the app on localhost
```shell
FLASK_APP=server python3 -m flask run
```
Clone the Medwallet frontend repository (this repository) and cd into it
```shell
git clone https://github.com/cindywongdev/medwallet_frontend.git
cd medwallet_frontend
```
Install dependencies using npm
```shell
npm install
```
Run the app on localhost
```shell
npm run dev
```

**Running Cypress Tests**
Open up new terminal in the frontend repository and open the cypress runner:
```shell
npx cypress open
```
Click E2E Testing.
Click Start E2E Testing in Chrome. You should now see a list of the test specs.
Click on the spec you want to run and watch your tests run!

## Features

**Viewing Most Recent Year's Payment Data**

The payment data is visible on the homepage. Users can navigate this data using the page numbers at the top. Each page change makes a call to the Open Payments API which then returns a JSON response containing 50 record objects. Records of payments below $10 are filtered out and the resulting response is parsed, mapped out, and displayed as rows. The rows are populated using JavaScript, and formatted using Tailwind. The pages component is provided by the react-paginate library and formatted using Bootstrap.

<!-- ![View & Navigate Payment Data](https://user-images.githubusercontent.com/58803587/76893349-70a53d00-6849-11ea-9c20-3c328d695a2a.gif "View & Navigate Payment Data") -->

**Search by Recipient Type**

Users can search by recipient type. Clicking submit sends a GET request to the backend and Open Payment API, which returns the relevant data.

<!-- ![Save Trails](https://user-images.githubusercontent.com/58803587/76901133-e1535600-6857-11ea-921a-90676eec85f3.gif "Mark trails saved or completed") -->

**Export Search Results to XLS file**

After a search, users can click on the "Export to Excel" button to download the search results as an XLS file.

<!-- ![Trips](https://user-images.githubusercontent.com/58803587/76902715-d4cffd00-6859-11ea-88f5-0125ed62e983.gif "Plan hiking trips") -->

## About the Developer

Cindy Wong is a software engineer based in New York City. She loves warm weather, good music, and the moments when you finally get your code to work.