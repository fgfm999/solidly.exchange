import abis from "../abis";
/*
deploy WETH 0xA30764B9F073Ef38ce431b1AD2d00134e73Df90c
deploy BaseV1Factory 0xDf56b2cdbFE438b8cabae1Ab74E64824C19bB242
deploy BaseV1Router01 0xfB2FA609033E782fCEC57c6BC9F57e6e75D00ca6
deploy BaseV1 0xF5ed325b82ad725ce91F85863b06c4cde84135F0
deploy Multicall 0x95C902D82cDb9462d31EF68Ca1A21DED0d415529
deploy contracts/ve.sol:ve 0x2901f56ceCd97f4b47aF9Bb5d49786bcD106f1db
deploy contracts/ve_dist.sol:ve_dist 0x63DCB30f942DC052599a0959c04bd408d7e3389b
deploy BaseV1GaugeFactory 0x29EBb259AdAa3b3Fc3003821E5D78Ad81e9FB5E1
deploy BaseV1BribeFactory 0x4Ce299360aa9923AA210C4ea6857f94D8845b286
deploy BaseV1Voter 0xB99a17a707c3371F30F679332CA5718b0457451E
deploy solidly_library 0x3b4f0d0ee01C84F972B33EECbd733C2f64fBbd4E
deploy BaseV1Minter 0x325A891F89b6cdbc8f31f3E81eb144640A1E9244

* */


export const GOV_TOKEN_ADDRESS = '0xF5ed325b82ad725ce91F85863b06c4cde84135F0'
export const GOV_TOKEN_NAME = 'Solid'
export const GOV_TOKEN_SYMBOL = 'SOLID'
export const GOV_TOKEN_DECIMALS = 18
export const GOV_TOKEN_LOGO = 'https://solidly.exchange/Solidly-O.svg'
export const GOV_TOKEN_ABI = abis.tokenABI

export const VE_TOKEN_ADDRESS = '0x2901f56ceCd97f4b47aF9Bb5d49786bcD106f1db'
export const VE_TOKEN_NAME = 'veNFT'
export const VE_TOKEN_SYMBOL = 'veNFT'
export const VE_TOKEN_DECIMALS = 18
export const VE_TOKEN_LOGO = 'https://solidly.exchange/Solidly-O.svg'
export const VE_TOKEN_ABI = abis.veTokenABI

export const WFTM_ADDRESS = '0xA30764B9F073Ef38ce431b1AD2d00134e73Df90c'
export const WFTM_NAME = 'Wrapped CKB'
export const WFTM_SYMBOL = 'WCKB'
export const WFTM_DECIMALS = 8
export const WFTM_ABI = abis.wftmABI

export const FTM_ADDRESS = 'FTM' // logic only
export const FTM_NAME = 'CKB'
export const FTM_SYMBOL = 'CKB'
export const FTM_DECIMALS = 8
export const FTM_LOGO = 'https://assets.coingecko.com/coins/images/9566/large/Nervos.png'

export const FACTORY_ADDRESS = '0xDf56b2cdbFE438b8cabae1Ab74E64824C19bB242'
export const FACTORY_ABI = abis.factoryABI

export const ROUTER_ADDRESS = '0xfB2FA609033E782fCEC57c6BC9F57e6e75D00ca6'
export const ROUTER_ABI = abis.routerABI

export const VE_DIST_ADDRESS = '0x63DCB30f942DC052599a0959c04bd408d7e3389b'
export const VE_DIST_ABI = abis.veDistABI

export const VOTER_ADDRESS = '0xB99a17a707c3371F30F679332CA5718b0457451E'
export const VOTER_ABI = abis.voterABI

export const LIBRARY_ADDRESS = '0x3b4f0d0ee01C84F972B33EECbd733C2f64fBbd4E'
export const LIBRARY_ABI = abis.solidlyLibraryABI

export const ERC20_ABI = abis.erc20ABI
export const PAIR_ABI = abis.pairABI
export const GAUGE_ABI = abis.gaugeABI
export const BRIBE_ABI = abis.bribeABI
export const TOKEN_ABI = abis.tokenABI

export const MULTICALL_ADDRESS = '0x95C902D82cDb9462d31EF68Ca1A21DED0d415529'