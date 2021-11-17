# Rick and Morty Characteropedia

This site uses the Rick and Morty API to render a database of characters, locations and episodes.


# Project Requirements


Use the Rick and Morty REST API here: https://rickandmortyapi.com/documentation.

Do not use one of the Rick and Morty libraries listed on the page, please use a REST client of you choice, ex: Axios.

Take a look at the API docs for characters: https://rickandmortyapi.com/documentation/#character

The following is a prioritized list of features.

1. Design and build out a functioning character listing page with pagination.
2. Users can filter the results
3. The app is responsive
4. Bonus points if you take advantage of the location and episode endpoints to build your Rick and Morty user experience

# Dependencies

- node-sass
- react-hook-form
- react-router-dom


# Todos

## API Call for All Characters

1. DONE - On page load, an api call should be made to get all of the characters from the database.
2. DONE - Save the api response in state on the Rendered Cards component.

## API Call for Filtered Results

1. DONE - The results of the filtered call.


## Characters

API Endpoint:
https://rickandmortyapi.com/api/character/


# Tech Requirements

## Design and build out a functioning character listing page with pagination.

There should be a list of characters on page load, and if we have an infinite scroll, then users could scroll indefinitely through the pagination.

The character listing card should have the image of the character, their name and all info that appears from the api return to the side.

## Users can filter the results

There should be a search bar on the page header somewhere users can search for their characters.

I could do a search that possibly submits a request for every keypress. I have to see how long it takes to get the results back.

Otherwise, I can just use a submit button.

I went with the submit button to only use state when necessary to improve reliability and performance.

## The app is responsive

The app is responsive from desktop to mobile.

## Bonus points if you take advantage of the location and episode endpoints to build your Rick and Morty user experience

I would like to see more info about the location and episodes of the character, so I could make a request from the characters api, get the return, then loop through the return and make a request for the location and episodes from the api return of the characters.

I didn't end up doing this since I wanted to focus on error handling and cleaning up my existing code. This would be a great future feature.

## Handling Populating the Location Information

On the Character API return, we see the origin property has the display name of the planet with name, and the next property is url. We can make a direct api request for location information from this url and display it directly.

## Handling Populating the Episodes

On the Character API return, there is an array of episodes urls. The names of the episodes are not included.
So we could loop through the episodes array, and display the names of the episodes. When the user clicks on the episode name, and accordion pops down and displays the rest of the information.

---

###  Todo List page
My watch list page should have a simple To-Do functionality. There should be an input field where the
user can write down a new episode to watch later. There are no APIs for this subtask, so please use
local storage to store To-Do items. The To-Do list item should have a remove button to remove it from
the list and the checkbox to mark it as complete (Upon reloading, the data in the list should not
change). this was implemented

# Getting Started with Create React App

To run the app locally, clone the repository, navigate to it's directory.

Follow these commands step by step:-
git clone `https://github.com/taiwo2/Rick-Morty-TV.git`

## Available Scripts

### `npm intall`
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Authors
👤 Taiwo Adetona

- Github: [@taiwo2](https://github.com/taiwo2)

- LinkedIn: [Taiwo Adetona](https://www.linkedin.com/in/taiwo-adetona/)

- Twitter: [@TaiwoAdetona4](https://twitter.com/TaiwoAdetona4/)

<!-- acknowledgments -->

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](issues/).

## Show your support

Give a ⭐️ if you like this project!

## 📝 License



