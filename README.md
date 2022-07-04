# The fellowship of the tretton37

## Description

Here we have the fellowship of tretton37. The employees are fetched from the 13|37 api and presented in Cards.\
I've added two search bars, one for searching for a name and one for office.\
You're also able to view the employees in table form by clicking "View in table" toggle button (and back to grid view again if clicked once more).\
I've also included a button for clearing the search fields.

I usually try to split up my code into components for reuseability and to make it easier to maintain and test.\
I also find it easier to review and understand what the code is doing or supposed to do when it's in smaller parts.\
Same goes for the type of code, so you'll see code for the api, components, hooks, mock and assets separated.\

## Packages

I started with create-react-app which comes with a few packages that I've not removed.\

### Dependencies

- Fortawesome/fontawesome
  - I installed these two packages to easily use fontawesome icons as components.
- Axios
  - Axios for a more "capable" http requester instead of `fetch`.

### Dev dependencies

- Tailwind css (autoprefixer, postcss, tailwindcss)
  - Installed these three packages to be able to use Tailwind CSS.
- Axios-mock-adapter
  - This package allows me to setup a mock instance of axios when running on localhost.

## Stories completed

### Design/accessibility

- Responsive design
  - I chose this story because I usually make all sites responsive anyway. It's how I usually start a project (mobile first).
- Use modern CSS
  - I wanted to do this story because I wanted to use Tailwind CSS. I've only used it once before but I'm really starting to like it. It's quite different writing all your CSS inline, but it's surprisingly fast when you learn the Tailwind commands.

### Functionality

- Sort by name and office
  - A natural way to go for a representation of this sort. Wanted to add some functionality to the page.
- Enable switch between grid and a table
  - I had never done a "switch" like this before and I wanted to try it out.
- Available on a free public url
  - Beacuse why not? :) I remembered I have a netlify account and it's really easy to deploy.

### Testing/QA

- Use TypeScript
  - I like using TypeScript! It helps a lot.

## Instructions

Navigate to the root of the project (where you found this file), and run the commands below... But first:

### If you want to run the project locally with mock

You'll need to add an .env file in the projects root directory and add the following:\
`REACT_APP_MOCK=true`

This will enable the mock server and use a mock file instead of making a request.

### If you want to run the project locally with real api

Add the following lines to the .env file if you want to use the real api:
`REACT_APP_API_BASE=insert-real-api-here`
`REACT_APP_API_KEY=insert-real-api-key-here`

Set `REACT_APP_MOCK=false` or remove it completely if it's present in the .env file.

### `npm install`

This will install all necessary dependencies.

### `npm start`

This will spin up the project on port :3000

## Conclusion

This will hopefully get you up and running!
