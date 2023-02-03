# A simple FundMe project that uses Chainlink Pricefeed

FundMe.sol

-Users call the core `fund()` function to send funds to the contract. Alternatively, the contract takes direct ether transfer through the `receive()` function when fund() is not directly invoked;

-All users's address and sent amount are saved and can be accessed through public `getAddressToAmountFunded(address)`

-This contract imports Chainlink's `AggregatorV3Interface.sol` and invokes its `latestRoundData()` to get latest ETH price in USD.

Install

-Built with hardhat. To install dependencies, run `Yarn Install`.
