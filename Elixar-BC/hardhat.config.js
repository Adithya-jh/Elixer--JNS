require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: "https://floral-few-seed.matic-testnet.discover.quiknode.pro/2fbd98391248bebf56e8f7df5bb3724f65ab36ed/",
      accounts: [
        "b5b9b96b79116a4776fc1345315a3524ac1b24b18270d625dbd38d38df598673",
      ],
    },
  },
};
