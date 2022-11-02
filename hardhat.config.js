/** @type import('hardhat/config').HardhatUserConfig */

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
   networks: {
      hardhat: {},
      goerli: {
        url: "https://eth-goerli.g.alchemy.com/v2/vnZKuQVRTPzwuu2CuVeEtGqLS5yiwO3l",
        accounts: [`0x000cb94a17fac99f3b1cb27d1a7328968464b5b29aecec932d5bdbfcb0e49c85`]
      }
   },
};
