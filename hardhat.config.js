require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("hardhat-deploy")
require("hardhat-gas-reporter")
require("@nomiclabs/hardhat-etherscan")
require("solidity-coverage")

/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_RPC_URL =
    process.env.GOERLI_RPC_URL ||
    "https://eth-goerli.g.alchemy.com/v2/JQ0e_zpbYCVCDQc7jVQlRqLa4tuGOVIp"
const PRIVATE_KEY = process.env.PRIVATE_KEY
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

module.exports = {
    solidity: {
        compilers: [{ version: "0.8.8" }, { version: "0.6.6" }]
    },
    defaultNetwork: "hardhat",
    namedAccounts: {
        deployer: {
            default: 0 //here this will by default take the first account as deployer
        }
    },
    networks: {
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: PRIVATE_KEY,
            chainId: 5,
            blockConfirmation: 6
        }
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        token: "MATIC"
    }
}

//https://eth-goerli.g.alchemy.com/v2/JQ0e_zpbYCVCDQc7jVQlRqLa4tuGOVIp
