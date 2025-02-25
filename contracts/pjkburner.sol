// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @title PJKBurner
 * @notice Burns PJK tokens on Polygon to trigger Mojo minting on Optimism.
 */
contract PJKBurner {
    IERC20 public pjkToken = IERC20(0xfc0E40e7D6AbA1079409966bcAcB2273f048Da5F);
    address public constant BURN_ADDRESS = 0x000000000000000000000000000000000000dEaD;
    
    // Record how many tokens each user has burned
    mapping(address => uint256) public burnedAmounts;

    event PJKBurned(address indexed user, uint256 amount);

    /**
     * @notice Burns PJK tokens by sending them to a dead address.
     * @param amount Amount of PJK to burn.
     */
    function burnPJK(uint256 amount) external {
        require(pjkToken.transferFrom(msg.sender, BURN_ADDRESS, amount), "PJK burn failed");
        burnedAmounts[msg.sender] += amount;
        emit PJKBurned(msg.sender, amount);
    }

    /**
     * @notice Verify if the user has burned at least a specified amount.
     * @param user The address to check.
     * @param amount The amount to verify.
     * @return bool True if the user has burned at least 'amount' of PJK.
     */
    function verifyBurn(address user, uint256 amount) external view returns (bool) {
        return burnedAmounts[user] >= amount;
    }
}