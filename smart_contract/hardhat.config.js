//https://eth-ropsten.alchemyapi.io/v2/kN0k48BZEWAPXv34Niak9Uz4lkwVDt40

// api key we will be using ^


require('@nomiclabs/hardhat-waffle')

module.exports ={
  solidity:'0.8.0',
  networks:{
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/kN0k48BZEWAPXv34Niak9Uz4lkwVDt40',
      accounts:['a50b8db943e645a787a1c5a6572b60f4a9e6999dd38203cd26bb1a2008daf84e']
    }
  }
}

//hardhat- waffle is a plugin to test smart contracts 


/*
require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
*/
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/*
 * @type import('hardhat/config').HardhatUserConfig
 */
/*
module.exports = {
  solidity: "0.8.4",
};
*/

//  This is how the original hard.config.js file looks 