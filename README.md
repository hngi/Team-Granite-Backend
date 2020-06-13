# Team-Granite-Backend
A Dockerized User Management App

## Run the App: 
- Fork this repository
- Clone to your local machine
- `cd` into the repository and run `npm install && npm start`
- The app will be running on `localhost:5000/v1`
- View the documentation at `localhost:5000/v1/api-docs`

## Using the service
- Open Postman and enter the base url followed by `/addServiceUser?email=youremail` (use your email as query parameter) to get registered on the service
- Generate a token by entering base url followed by `/token?email=youremail` to generate a token
- Copy the generated token and add it to Auth bearer in the authorization panel
- Test by getting the list of users i.e` GET - http://base_url/users`

## Contribute guide
If you're in team-granite-backend:
- Pull the latest version of the repo `git pull`
- Create a feature branch with your feature name, e.g: `<user-pagination>`
- Create the your feature locally and commit
- Send a PR after you have test your feature locally with Postman
- Tell us in your PR in bullet points what you have added
- Add yourself as a user to the database (this will eventually count for contribution points)

### Features (in order of priorities)
Again, as a member of team-granite you are free to choose one. Only start working on a feature after you have confirmed that it is not already worked on:
- add_user
- remove_user
- set_user_first_name
- set_user_last_name
- change_user_email
- set_user_phone
- get_user_phone
- get_user_first_name
- get_user_last_name
- get_user_emails
- get_active_users
- set_user_gender
- get_user_gender
- get_user_address
- get_user_address
- custom ids (this is not priority, but it would be nice to have custom (short) ids)

### User Properties
- _id (custom ids)
- first_name
- last_name
- email
- phone
- gender (male, female)
- status (active, inactive)
- address
