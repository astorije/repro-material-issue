# repro-material-issue

Reproduction repository for https://github.com/mui-org/material-ui/issues/17418

1. Install dependencies with `yarn install` and start the app with `yarn start`
2. Go to http://localhost:8080 and notice 1) the warning in the JS console, 2) the button is not red
3. Switch to the `astorije/sort-of-fix` branch where the dependencies were updated to latest, restart the app, and see the red button
