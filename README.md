# Alchemy React Base Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Use this template for all your "from scratch" deliverables. To start, simply run

- `npm install`
- `npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan in React
Plan board: https://miro.com/app/board/uXjVPXJoG10=/?share_link_id=418141047166

Actions
-
    - Main: head, middle, bottom, counts
    - Character: images for each section of the character
    - Control: select and options to update/change state
        - counters for each section
    - Stat: retrieve updated counts from main, display catchphrase array



## Additional considerations
- Is any of your state redundant? For example, if you're tracking `wins`, `losses`, and `total`, you can probably get rid of `losses` state, and calculate it as `total - wins`.
- Where should each piece of state live? How are you going to get data from where it lives to where it needs to be?