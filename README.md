# This is the continued version of Medwallet.

# Medwallet

Medwallet is a resource to view payment data for healthcare providers and teaching hospitals. Users can search payments by healthcare provider type (also referred to as recipient type), and can export the search results to an XLS file.

<!-- The data is updated once the newest year's datastore is released by the Open Payments API. -->

#### Contents

- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Features](#features)
- [Limitations](#limitations)
- [About the Developer](#about-the-developer)

## Tech Stack

**Backend:** Python3, Flask

**Frontend:** JavaScript, React, HTML5, CSS3, SASS, Tailwind, Bootstrap, Cypress

**APIs:** Open Payments API

**Deployment:** Render, Vercel

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
Click E2E Testing.\
Click Start E2E Testing in Chrome. You should now see a list of the test specs.\
Click on the spec you want to run and watch your tests run!

## Features

**Viewing Most Recent Year's Payment Data**

The payment data is visible on the homepage. Users can navigate this data using the page numbers at the top. Each page change makes a call to the Open Payments API which then returns a JSON response containing 50 record objects. Records of payments below $10 are filtered out and the resulting response is parsed, mapped out, and displayed as rows. The rows are populated using JavaScript, and formatted using Tailwind. The pages component is provided by the react-paginate library and formatted using Bootstrap.

**Search by Recipient Type**

Users can search by recipient type. Clicking submit sends a GET request to the backend and Open Payment API, which returns the relevant data.

**Export Search Results to XLS file**

After a search, users can click on the "Export to Excel" button to download the search results as an XLS file.

## Limitations

**Slow Loading for Middle Pages**

Due to the slow response time of the Open Payments API, users may experience slow loading times when navigating to middle pages of the payment data. This delay is primarily attributed to the API's performance.

**Exporting Search Results Limitation**

Presently, the application only exports a maximum of 50 search results due to the current implementation. Each page change triggers an API call for the next 50 data points. Although this approach ensures smooth pagination, it restricts the export functionality to only include the results displayed on each page. 

To overcome this limitation and enable exporting of all results, significant architectural changes would be required. Implementing a solution to store and manage all results could work but may potentially impact the application's performance due to the volume of data involved.

**Search Input Handling Limitation**

The handling of invalid inputs in the search functionality is currently rudimentary, utilizing alerts for error notification. This approach lacks sophistication and could be enhanced to provide a more user-friendly experience, such as providing a typahead dropdown of valid inputs.


## About the Developer

Cindy Wong is a software engineer based in New York City. She loves warm weather, good music, and that moment when you finally get your code to work.