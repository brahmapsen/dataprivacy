// Load dependencies
const { accounts, contract } = require('@openzeppelin/test-environment');
const { expect } = require('chai');

// Load compiled artifacts
const Dpt = contract.fromArtifact('DataPrivacyToken');

// Start test block
describe('Dpt', function () {
  const [ owner ] = accounts;

  beforeEach(async function () {
    // Deploy a new Box contract for each test
    this.contract = await Dpt.new({ from: owner });
  });

  // Test case
  it('Get the balance of account', async function () {
    // Store a value - recall that only the owner account can do this!
    await this.contract.balanceOf( { from: owner });

    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await this.contract.retrieve()).toString()).to.equal('100000000000000000000000000');
  });
});