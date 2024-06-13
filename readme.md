# BTC Prize Pool Backend

BTC Prize Pool Backend is the API responsible for managing the decentralized pool for solving BTC puzzles, authenticating users, and distributing rewards.

## Technologies Used

-   Node.js
-   Express
-   TypeScript
-   Mongoose
-   JSON Web Tokens (JWT)
-   bitcoinjs-message

## Requirements

-   Node.js v14 or higher
-   MongoDB

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/btc-prize-pool-backend.git
cd btc-prize-pool-backend
```

2. Install the dependencies:

```bash
yarn install
```

3. Configure the environment variables:

Rename the `.env.example` file to `.env` and add your settings like mongodb connection string and secret_key.

## Available Scripts

`yarn dev`: Starts the server in development mode using ts-node-dev.
`yarn build`: Compiles the TypeScript project to JavaScript.
`yarn start`: Starts the server with the compiled code.

## Contribution

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
