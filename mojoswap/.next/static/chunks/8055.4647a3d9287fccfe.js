"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8055],{28055:e=>{e.exports=JSON.parse('[{"type":"constructor","inputs":[{"name":"_nativeTokenWrapper","type":"address","internalType":"address"}],"stateMutability":"nonpayable"},{"type":"receive","stateMutability":"payable"},{"type":"function","name":"DEFAULT_ADMIN_ROLE","inputs":[],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"view"},{"type":"function","name":"addPackContents","inputs":[{"name":"_packId","type":"uint256","internalType":"uint256"},{"name":"_contents","type":"tuple[]","internalType":"struct ITokenBundle.Token[]","components":[{"name":"assetContract","type":"address","internalType":"address"},{"name":"tokenType","type":"uint8","internalType":"enum ITokenBundle.TokenType"},{"name":"tokenId","type":"uint256","internalType":"uint256"},{"name":"totalAmount","type":"uint256","internalType":"uint256"}]},{"name":"_numOfRewardUnits","type":"uint256[]","internalType":"uint256[]"},{"name":"_recipient","type":"address","internalType":"address"}],"outputs":[{"name":"packTotalSupply","type":"uint256","internalType":"uint256"},{"name":"newSupplyAdded","type":"uint256","internalType":"uint256"}],"stateMutability":"payable"},{"type":"function","name":"balanceOf","inputs":[{"name":"account","type":"address","internalType":"address"},{"name":"id","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"balanceOfBatch","inputs":[{"name":"accounts","type":"address[]","internalType":"address[]"},{"name":"ids","type":"uint256[]","internalType":"uint256[]"}],"outputs":[{"name":"","type":"uint256[]","internalType":"uint256[]"}],"stateMutability":"view"},{"type":"function","name":"canUpdatePack","inputs":[{"name":"","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"contractType","inputs":[],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"pure"},{"type":"function","name":"contractURI","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"contractVersion","inputs":[],"outputs":[{"name":"","type":"uint8","internalType":"uint8"}],"stateMutability":"pure"},{"type":"function","name":"createPack","inputs":[{"name":"_contents","type":"tuple[]","internalType":"struct ITokenBundle.Token[]","components":[{"name":"assetContract","type":"address","internalType":"address"},{"name":"tokenType","type":"uint8","internalType":"enum ITokenBundle.TokenType"},{"name":"tokenId","type":"uint256","internalType":"uint256"},{"name":"totalAmount","type":"uint256","internalType":"uint256"}]},{"name":"_numOfRewardUnits","type":"uint256[]","internalType":"uint256[]"},{"name":"_packUri","type":"string","internalType":"string"},{"name":"_openStartTimestamp","type":"uint128","internalType":"uint128"},{"name":"_amountDistributedPerOpen","type":"uint128","internalType":"uint128"},{"name":"_recipient","type":"address","internalType":"address"}],"outputs":[{"name":"packId","type":"uint256","internalType":"uint256"},{"name":"packTotalSupply","type":"uint256","internalType":"uint256"}],"stateMutability":"payable"},{"type":"function","name":"getDefaultRoyaltyInfo","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"},{"name":"","type":"uint16","internalType":"uint16"}],"stateMutability":"view"},{"type":"function","name":"getPackContents","inputs":[{"name":"_packId","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"contents","type":"tuple[]","internalType":"struct ITokenBundle.Token[]","components":[{"name":"assetContract","type":"address","internalType":"address"},{"name":"tokenType","type":"uint8","internalType":"enum ITokenBundle.TokenType"},{"name":"tokenId","type":"uint256","internalType":"uint256"},{"name":"totalAmount","type":"uint256","internalType":"uint256"}]},{"name":"perUnitAmounts","type":"uint256[]","internalType":"uint256[]"}],"stateMutability":"view"},{"type":"function","name":"getRoleAdmin","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"}],"outputs":[{"name":"","type":"bytes32","internalType":"bytes32"}],"stateMutability":"view"},{"type":"function","name":"getRoleMember","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"},{"name":"index","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"member","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"getRoleMemberCount","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"}],"outputs":[{"name":"count","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"getRoyaltyInfoForToken","inputs":[{"name":"_tokenId","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"address","internalType":"address"},{"name":"","type":"uint16","internalType":"uint16"}],"stateMutability":"view"},{"type":"function","name":"getTokenCountOfBundle","inputs":[{"name":"_bundleId","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"getTokenOfBundle","inputs":[{"name":"_bundleId","type":"uint256","internalType":"uint256"},{"name":"index","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"tuple","internalType":"struct ITokenBundle.Token","components":[{"name":"assetContract","type":"address","internalType":"address"},{"name":"tokenType","type":"uint8","internalType":"enum ITokenBundle.TokenType"},{"name":"tokenId","type":"uint256","internalType":"uint256"},{"name":"totalAmount","type":"uint256","internalType":"uint256"}]}],"stateMutability":"view"},{"type":"function","name":"getUriOfBundle","inputs":[{"name":"_bundleId","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"grantRole","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"},{"name":"account","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"hasRole","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"},{"name":"account","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"hasRoleWithSwitch","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"},{"name":"account","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"initialize","inputs":[{"name":"_defaultAdmin","type":"address","internalType":"address"},{"name":"_name","type":"string","internalType":"string"},{"name":"_symbol","type":"string","internalType":"string"},{"name":"_contractURI","type":"string","internalType":"string"},{"name":"_trustedForwarders","type":"address[]","internalType":"address[]"},{"name":"_royaltyRecipient","type":"address","internalType":"address"},{"name":"_royaltyBps","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"isApprovedForAll","inputs":[{"name":"account","type":"address","internalType":"address"},{"name":"operator","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"isTrustedForwarder","inputs":[{"name":"forwarder","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"multicall","inputs":[{"name":"data","type":"bytes[]","internalType":"bytes[]"}],"outputs":[{"name":"results","type":"bytes[]","internalType":"bytes[]"}],"stateMutability":"nonpayable"},{"type":"function","name":"name","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"nextTokenIdToMint","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"onERC1155BatchReceived","inputs":[{"name":"","type":"address","internalType":"address"},{"name":"","type":"address","internalType":"address"},{"name":"","type":"uint256[]","internalType":"uint256[]"},{"name":"","type":"uint256[]","internalType":"uint256[]"},{"name":"","type":"bytes","internalType":"bytes"}],"outputs":[{"name":"","type":"bytes4","internalType":"bytes4"}],"stateMutability":"nonpayable"},{"type":"function","name":"onERC1155Received","inputs":[{"name":"","type":"address","internalType":"address"},{"name":"","type":"address","internalType":"address"},{"name":"","type":"uint256","internalType":"uint256"},{"name":"","type":"uint256","internalType":"uint256"},{"name":"","type":"bytes","internalType":"bytes"}],"outputs":[{"name":"","type":"bytes4","internalType":"bytes4"}],"stateMutability":"nonpayable"},{"type":"function","name":"onERC721Received","inputs":[{"name":"","type":"address","internalType":"address"},{"name":"","type":"address","internalType":"address"},{"name":"","type":"uint256","internalType":"uint256"},{"name":"","type":"bytes","internalType":"bytes"}],"outputs":[{"name":"","type":"bytes4","internalType":"bytes4"}],"stateMutability":"nonpayable"},{"type":"function","name":"openPack","inputs":[{"name":"_packId","type":"uint256","internalType":"uint256"},{"name":"_amountToOpen","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"tuple[]","internalType":"struct ITokenBundle.Token[]","components":[{"name":"assetContract","type":"address","internalType":"address"},{"name":"tokenType","type":"uint8","internalType":"enum ITokenBundle.TokenType"},{"name":"tokenId","type":"uint256","internalType":"uint256"},{"name":"totalAmount","type":"uint256","internalType":"uint256"}]}],"stateMutability":"nonpayable"},{"type":"function","name":"owner","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"renounceRole","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"},{"name":"account","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"revokeRole","inputs":[{"name":"role","type":"bytes32","internalType":"bytes32"},{"name":"account","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"royaltyInfo","inputs":[{"name":"tokenId","type":"uint256","internalType":"uint256"},{"name":"salePrice","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"receiver","type":"address","internalType":"address"},{"name":"royaltyAmount","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"safeBatchTransferFrom","inputs":[{"name":"from","type":"address","internalType":"address"},{"name":"to","type":"address","internalType":"address"},{"name":"ids","type":"uint256[]","internalType":"uint256[]"},{"name":"amounts","type":"uint256[]","internalType":"uint256[]"},{"name":"data","type":"bytes","internalType":"bytes"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"safeTransferFrom","inputs":[{"name":"from","type":"address","internalType":"address"},{"name":"to","type":"address","internalType":"address"},{"name":"id","type":"uint256","internalType":"uint256"},{"name":"amount","type":"uint256","internalType":"uint256"},{"name":"data","type":"bytes","internalType":"bytes"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setApprovalForAll","inputs":[{"name":"operator","type":"address","internalType":"address"},{"name":"approved","type":"bool","internalType":"bool"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setContractURI","inputs":[{"name":"_uri","type":"string","internalType":"string"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setDefaultRoyaltyInfo","inputs":[{"name":"_royaltyRecipient","type":"address","internalType":"address"},{"name":"_royaltyBps","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setOwner","inputs":[{"name":"_newOwner","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setRoyaltyInfoForToken","inputs":[{"name":"_tokenId","type":"uint256","internalType":"uint256"},{"name":"_recipient","type":"address","internalType":"address"},{"name":"_bps","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"supportsInterface","inputs":[{"name":"interfaceId","type":"bytes4","internalType":"bytes4"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"symbol","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"totalSupply","inputs":[{"name":"","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"uri","inputs":[{"name":"_tokenId","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"event","name":"ApprovalForAll","inputs":[{"name":"account","type":"address","indexed":true,"internalType":"address"},{"name":"operator","type":"address","indexed":true,"internalType":"address"},{"name":"approved","type":"bool","indexed":false,"internalType":"bool"}],"anonymous":false},{"type":"event","name":"ContractURIUpdated","inputs":[{"name":"prevURI","type":"string","indexed":false,"internalType":"string"},{"name":"newURI","type":"string","indexed":false,"internalType":"string"}],"anonymous":false},{"type":"event","name":"DefaultRoyalty","inputs":[{"name":"newRoyaltyRecipient","type":"address","indexed":true,"internalType":"address"},{"name":"newRoyaltyBps","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"Initialized","inputs":[{"name":"version","type":"uint8","indexed":false,"internalType":"uint8"}],"anonymous":false},{"type":"event","name":"OwnerUpdated","inputs":[{"name":"prevOwner","type":"address","indexed":true,"internalType":"address"},{"name":"newOwner","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"PackCreated","inputs":[{"name":"packId","type":"uint256","indexed":true,"internalType":"uint256"},{"name":"recipient","type":"address","indexed":false,"internalType":"address"},{"name":"totalPacksCreated","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"PackOpened","inputs":[{"name":"packId","type":"uint256","indexed":true,"internalType":"uint256"},{"name":"opener","type":"address","indexed":true,"internalType":"address"},{"name":"numOfPacksOpened","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"rewardUnitsDistributed","type":"tuple[]","indexed":false,"internalType":"struct ITokenBundle.Token[]","components":[{"name":"assetContract","type":"address","internalType":"address"},{"name":"tokenType","type":"uint8","internalType":"enum ITokenBundle.TokenType"},{"name":"tokenId","type":"uint256","internalType":"uint256"},{"name":"totalAmount","type":"uint256","internalType":"uint256"}]}],"anonymous":false},{"type":"event","name":"PackUpdated","inputs":[{"name":"packId","type":"uint256","indexed":true,"internalType":"uint256"},{"name":"recipient","type":"address","indexed":false,"internalType":"address"},{"name":"totalPacksCreated","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"RoleAdminChanged","inputs":[{"name":"role","type":"bytes32","indexed":true,"internalType":"bytes32"},{"name":"previousAdminRole","type":"bytes32","indexed":true,"internalType":"bytes32"},{"name":"newAdminRole","type":"bytes32","indexed":true,"internalType":"bytes32"}],"anonymous":false},{"type":"event","name":"RoleGranted","inputs":[{"name":"role","type":"bytes32","indexed":true,"internalType":"bytes32"},{"name":"account","type":"address","indexed":true,"internalType":"address"},{"name":"sender","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"RoleRevoked","inputs":[{"name":"role","type":"bytes32","indexed":true,"internalType":"bytes32"},{"name":"account","type":"address","indexed":true,"internalType":"address"},{"name":"sender","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"RoyaltyForToken","inputs":[{"name":"tokenId","type":"uint256","indexed":true,"internalType":"uint256"},{"name":"royaltyRecipient","type":"address","indexed":true,"internalType":"address"},{"name":"royaltyBps","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"TransferBatch","inputs":[{"name":"operator","type":"address","indexed":true,"internalType":"address"},{"name":"from","type":"address","indexed":true,"internalType":"address"},{"name":"to","type":"address","indexed":true,"internalType":"address"},{"name":"ids","type":"uint256[]","indexed":false,"internalType":"uint256[]"},{"name":"values","type":"uint256[]","indexed":false,"internalType":"uint256[]"}],"anonymous":false},{"type":"event","name":"TransferSingle","inputs":[{"name":"operator","type":"address","indexed":true,"internalType":"address"},{"name":"from","type":"address","indexed":true,"internalType":"address"},{"name":"to","type":"address","indexed":true,"internalType":"address"},{"name":"id","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"value","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"URI","inputs":[{"name":"value","type":"string","indexed":false,"internalType":"string"},{"name":"id","type":"uint256","indexed":true,"internalType":"uint256"}],"anonymous":false},{"type":"error","name":"ContractMetadataUnauthorized","inputs":[]},{"type":"error","name":"CurrencyTransferLibMismatchedValue","inputs":[{"name":"expected","type":"uint256","internalType":"uint256"},{"name":"actual","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"OwnableUnauthorized","inputs":[]},{"type":"error","name":"PermissionsAlreadyGranted","inputs":[{"name":"account","type":"address","internalType":"address"},{"name":"role","type":"bytes32","internalType":"bytes32"}]},{"type":"error","name":"PermissionsInvalidPermission","inputs":[{"name":"expected","type":"address","internalType":"address"},{"name":"actual","type":"address","internalType":"address"}]},{"type":"error","name":"PermissionsUnauthorizedAccount","inputs":[{"name":"account","type":"address","internalType":"address"},{"name":"neededRole","type":"bytes32","internalType":"bytes32"}]},{"type":"error","name":"RoyaltyExceededMaxFeeBps","inputs":[{"name":"max","type":"uint256","internalType":"uint256"},{"name":"actual","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"RoyaltyInvalidRecipient","inputs":[{"name":"recipient","type":"address","internalType":"address"}]},{"type":"error","name":"RoyaltyUnauthorized","inputs":[]}]')}}]);