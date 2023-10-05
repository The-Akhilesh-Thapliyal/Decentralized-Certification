const EmailHashContract = artifacts.require("EmailHashContract");

module.exports = function (deployer) {
  deployer.deploy(EmailHashContract);
};
