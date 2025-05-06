# FundMe Smart Contract Project

This project demonstrates a full-stack Ethereum DApp development flow using Hardhat. It includes the deployment of a simple crowdfunding smart contract (`FundMe`) that integrates with Chainlink price feeds. The setup supports both local and testnet environments using mock and real oracles respectively. It also showcases how scripting can simplify complex Hardhat commands using `yarn`, allowing for shorthand commands to improve development speed and consistency.

---

## 📦 Project Structure

```
├── contracts/
│   └── FundMe.sol             # Main smart contract
├── deploy/
│   ├── 00-deploy-mocks.js    # Deploys mock price feed on local chains
│   └── 01-deploy-fund-me.js  # Deploys the FundMe contract
├── scripts/
│   └── fund.js               # Script to fund and withdraw from the contract
├── test/
│   └── FundMe.test.js        # Unit tests
├── utils/
│   └── verify.js             # Etherscan verification script
├── helper-hardhat-config.js  # Network configurations
├── hardhat.config.js         # Hardhat configuration file
└── package.json              # Project metadata and scripts
```

---

## 🚀 Features

- Smart contract deployment on local and test networks
- Chainlink Price Feed integration
- Mock price feed support for development chains
- Automated contract verification
- Code formatting with Prettier
- Test coverage reporting
- Shorthand CLI commands via custom yarn scripts

---

## 🛠️ Installation

```bash
git clone <repository-url>
cd hardhat-fund-me-fcc
yarn install
```

---

## 📜 Available Scripts

You can run the following scripts using `yarn`:

| Script              | Description                                |
| ------------------- | ------------------------------------------ |
| `yarn test`         | Runs unit tests                            |
| `yarn test:staging` | Runs tests on localhost network            |
| `yarn coverage`     | Runs code coverage report                  |
| `yarn deploy`       | Deploys contracts to localhost             |
| `yarn verify`       | Verifies contracts on local Etherscan fork |
| `yarn format`       | Formats the code using Prettier            |

> 💡 These scripts allow you to use short commands (e.g., `yarn test`) instead of typing out long Hardhat commands like `yarn hardhat test` every time.

---

## 🔧 Environment Setup

Create a `.env` file and include the following variables:

```env
PRIVATE_KEY=your_wallet_private_key
ETHERSCAN_API_KEY=your_etherscan_api_key
```

---

## 🤖 Deployment

- **Localhost / Hardhat**:
  ```bash
  yarn hardhat node
  yarn deploy
  ```
- **Testnet (e.g., Sepolia)**:
  ```bash
  yarn hardhat deploy --network sepolia
  ```

---

## 🧪 Testing

Run all unit tests:

```bash
yarn test
```

Test on a staging network:

```bash
yarn test:staging
```

---

## 📝 License

This project is licensed under the MIT License.

---

## ✍️ Author

Adeyanju Quasim

---

## 📬 Contact

- 📧 Email: [quasim132@gmail.com](mailto:quasim132@gmail.com)
- &#x20;Twitter: [@Working_Defi](https://twitter.com/Working_Defi)
- &#x20;Discord: quasim_100_17462
- &#x20;[LinkedIn](https://www.linkedin.com/in/quasim-adeyanju-858753282/)

---

Happy hacking! 🚀
