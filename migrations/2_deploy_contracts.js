const Iris = artifacts.require("Iris");
const Omen = artifacts.require("Omen");
const Owner = artifacts.require("Owner");
const SafeMath = artifacts.require("SafeMath");

module.exports = function(deployer) {
  deployer.deploy(Iris);
  deployer.deploy(Omen);
  deployer.deploy(Owner);
  deployer.deploy(SafeMath);
};
