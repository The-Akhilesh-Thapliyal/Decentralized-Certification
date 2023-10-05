// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EmailHashContract {
    mapping(string => string) private hashMap;

    constructor() {
        // Add mapping entries for email hashes
        hashMap["f5dffa3b37eabaf610f510079a04d180e470cb18faf779e72470937d1b42efed"] = "c80f57206ebf3b65aca92ea326ca806f4fec13821e5a4d72d9f87e182138d6cc";
    }

    function checkHash(string memory inputHash) public view returns (string memory) {
        return hashMap[inputHash];
    }
}