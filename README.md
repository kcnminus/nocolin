# My Biographical Website, aka nocolin.com

This is a simple React-based web app to introduce myself and some of the work I've been doing.
I have a few different components - a Bio, a Spotify Player, and a Gallery. 
The Spotify Player features my own music, and has the player rendered onscreen with a simple embed link for now.
The Gallery showcases a small collection of photographs I've taken, and should render EXIF data once backend integration is complete. 
Other features and updates are currently in progress!

I intend to introduce a blog component and an admin panel that will use Node to handle blog operations and Express to handle API endpoints. 
I will likely use Postgres for database storage and relationships. 

If you're interested in keeping up with the changes, feel free to give me a shout. Thanks!

07/29/23: 
- I've done bit of very basic styling to make things easier on the eyes. Pure white is hard to look at!
- I think I've got the 'Bio' and 'Background' components up and running, so I made the 'Bio' component my '/' route and 'Background' my '/background' route, which is viewable when you click 'About Me'. 
- I added the react-github-calendar(https://github.com/grubersjoe/react-github-calendar) library to show my GitHub contributions and keep me accountable for pushing code every day. 
- I'm moving very soon, so my next update could take a few days, but I'll continue to update my repo regularly until it is ready for deployment.

07/28/23:
- After doing some more research, I decided to switch libraries from exif-js to ExifReader(https://github.com/mattiasw/ExifReader/) because exif-js hasn't been
updated since 2018, whereas ExifReader is still being updated regularly. 
- Additionally, I added a modal! When you click on an image in the Gallery, you will be able to see a full-size version of it in a popup window and close it by clicking the enlarged image. 
- The size of the images slowed down the rendering of the Gallery page quite a bit, so I added lazy loading, with other fixes to come later. 

07/24/23:
- I have decided to use the exif-js(https://github.com/exif-js/exif-js) library to display the EXIF data from my images as opposed to using exif-parser in the backend. Because exif-js is designed to work with images directly on a website, it seems like a good fit for extracting EXIF data from images that are already loaded in the browser from `src/assets`.

07/23/23: 
- Small refactor to convert the Bio, SpotifyPlayer, and Gallery components into separate routes.
- Added a small suite of unit tests to confirm that each of the frontend components is rendering as expected. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
