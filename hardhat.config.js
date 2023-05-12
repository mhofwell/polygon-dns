require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: "https://ultra-fluent-vineyard.matic-testnet.discover.quiknode.pro/da3cdef15e519d2f101e33c49bebd7b90ea00607/",
      accounts: ['e1dcbfde95de53aa972d93c9b03daf59bf9f4eea096d782e96aee1fde32328fd'],
    },
  },
};
