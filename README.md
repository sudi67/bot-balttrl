# Bot Battlr

This is a React application built with Vite that simulates a bot battle game. The app allows users to view a collection of bots, add bots to their army, remove bots, and delete bots.

## Features

- View a collection of bots with detailed stats and avatars.
- Manage your bot army by adding or removing bots.
- Delete bots from the collection.
- Mock backend data is used for bots and army management.

## Project Structure

- `src/`: Contains React components and services.
- `src/components/`: React components like `BotCollection`, `YourBotArmy`, and `BotCard`.
- `src/services/api.js`: Mock API service that manages bot and army data.
- `db.json`: JSON file containing bot data (used previously for backend).
- `vercel.json`: Configuration for deployment on Vercel.
- `vite.config.js`: Vite configuration file.

## Development

To run the app locally:

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser at `http://localhost:3000` (or the port shown in the terminal).

## Deployment

The app can be deployed on Vercel. The current setup uses mock data and does not require a backend server.

## Notes

- The backend was removed and replaced with mock data in `src/services/api.js`.
- The app fetches data from the mock API service for demonstration purposes.

## Future Improvements

- Add real backend integration.
- Enhance UI/UX.
- Add authentication and user management.


