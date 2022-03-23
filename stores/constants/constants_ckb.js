import BigNumber from 'bignumber.js'
import * as contracts from './contracts_ckb'
import * as actions from './actions'


// URLS
let scan = 'https://v1.aggron.gwscan.com/'
let cont = contracts


export const ETHERSCAN_URL = scan

export const CONTRACTS = cont
export const ACTIONS = actions

export const MAX_UINT256 = new BigNumber(2).pow(256).minus(1).toFixed(0)
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export const FALLBACK_RPC = 'https://godwoken-testnet-web3-v1-rpc.ckbapp.dev'
