// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";

/**
 * @title OrphiProxy
 * @dev Simple wrapper for ERC1967Proxy to make it deployable via Hardhat
 */
contract OrphiProxy is ERC1967Proxy {
    constructor(address _logic, bytes memory _data) ERC1967Proxy(_logic, _data) {}
}
