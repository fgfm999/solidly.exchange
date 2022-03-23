import abis from "../abis";

// router: 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0 factory: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512 WETH 0x5FbDB2315678afecb367f032d93F642f64180aa3
// solidlyToken: 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9


export const GOV_TOKEN_ADDRESS = '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9'
export const GOV_TOKEN_NAME = 'Solid'
export const GOV_TOKEN_SYMBOL = 'SOLID'
export const GOV_TOKEN_DECIMALS = 18
export const GOV_TOKEN_LOGO = 'https://solidly.exchange/Solidly-O.svg'
export const GOV_TOKEN_ABI = abis.tokenABI

export const VE_TOKEN_ADDRESS = '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707'
export const VE_TOKEN_NAME = 'veNFT'
export const VE_TOKEN_SYMBOL = 'veNFT'
export const VE_TOKEN_DECIMALS = 18
export const VE_TOKEN_LOGO = 'https://prod.solidly.exchange/Solidly-O.svg'
export const VE_TOKEN_ABI = abis.veTokenABI

export const WFTM_ADDRESS = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
export const WFTM_NAME = 'Wrapped Fantom'
export const WFTM_SYMBOL = 'WFTM'
export const WFTM_DECIMALS = 18
export const WFTM_ABI = abis.wftmABI

export const FTM_ADDRESS = 'FTM'
export const FTM_NAME = 'Fantom'
export const FTM_SYMBOL = 'FTM'
export const FTM_DECIMALS = 18
export const FTM_LOGO = 'https://assets.coingecko.com/coins/images/4001/large/Fantom.png'

export const FACTORY_ADDRESS = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512'
export const FACTORY_ABI = abis.factoryABI

export const ROUTER_ADDRESS = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0'
export const ROUTER_ABI = abis.routerABI

export const VE_DIST_ADDRESS = '0x0165878A594ca255338adfa4d48449f69242Eb8F'
export const VE_DIST_ABI = abis.veDistABI

export const VOTER_ADDRESS = '0x8A791620dd6260079BF849Dc5567aDC3F2FdC318'
export const VOTER_ABI = abis.voterABI

export const LIBRARY_ADDRESS = '0x610178dA211FEF7D417bC0e6FeD39F05609AD788'
export const LIBRARY_ABI = abis.solidlyLibraryABI

export const ERC20_ABI = abis.erc20ABI
export const PAIR_ABI = abis.pairABI
export const GAUGE_ABI = abis.gaugeABI
export const BRIBE_ABI = abis.bribeABI
export const TOKEN_ABI = abis.tokenABI

export const MULTICALL_ADDRESS = '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9'

/*
* deploy WETH 0x5FbDB2315678afecb367f032d93F642f64180aa3
deploy BaseV1Factory 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
deploy BaseV1Router01 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
deploy BaseV1 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9
deploy Multicall 0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9
deploy contracts/ve.sol:ve 0x5FC8d32690cc91D4c39d9d3abcBD16989F875707
deploy contracts/ve_dist.sol:ve_dist 0x0165878A594ca255338adfa4d48449f69242Eb8F
deploy BaseV1GaugeFactory 0xa513E6E4b8f2a923D98304ec87F64353C4D5C853
deploy BaseV1BribeFactory 0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6
deploy BaseV1Voter 0x8A791620dd6260079BF849Dc5567aDC3F2FdC318
*/