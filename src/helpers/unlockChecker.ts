import { GraphQLClient, gql } from 'graphql-request'

const endpoint = {
  1: 'https://api.thegraph.com/subgraphs/name/unlock-protocol/unlock',
  4: 'https://api.thegraph.com/subgraphs/name/unlock-protocol/unlock-rinkeby',
  100: 'https://api.thegraph.com/subgraphs/name/unlock-protocol/xdai',
  137: 'https://api.thegraph.com/subgraphs/name/unlock-protocol/polygon',
}

var graphQLClients = {}

for(const [key, url] of Object.entries(endpoint)){
    graphQLClients[key] = new GraphQLClient(url)
}
/**
 * this function will verify if the eth account owns the unlock protocol NFT
 * @param _lockAddress address of the unlock protocol lock
 * @param _holder account of the holder needed to be verified
 * @returns boolean
 */

  export const verifyOwner = async (_lockAddress : String, _useraddress : String, _lockChain : number) => {
    const query = gql`query locks ($address: String!){
        locks (where : {address : $address}) {
          owner
        }
      }`
      const variables = {
          address : _lockAddress
      }

      const data = await graphQLClients[_lockChain].request(query, variables)
      if ((data.locks[0].owner) == _useraddress.toLowerCase()){
        return true
      }
      return false
  }

/**
 * this function will verify if the eth account actually holds the unlock protocol NFT
 * @param _lockAddress address of the unlock protocol lock
 * @param _holder account of the holder needed to be verified
 * @returns boolean
 */


export const verifyHolder = async  (_lockAddress: String, _holder: String, _chain:number) => {
    const query = gql`
    query keyHolders ($address : String!){
            keyHolders (where : {address : $address}){
              keys{
                expiration
                keyId
                lock{
                  address
                }
              }
            }
          
    }
    
    `
    const variables = {
        address : _holder
    }
    const data = await graphQLClients[_chain].request(query, variables)
    return data.keyHolders
}


/**
 * Fetch list of all the unlock tokens an account hold
 * @param _address1 address of the ETH account holding unlock nfts
 * @returns lisi of all the unlock locks held by the eth account
 */

// export const getLocks = async (_address1: String) => {
//     const query = gql`
//         query lockManager($address: String!) {
//             lockManagers(where: { address: $address }) {
//                 lock {
//                     name
//                     price
//                     address
//                     expirationDuration
//                 }
//             }
//         }
//     `
//     const variables = {
//         address: _address1,
//     }
//     const data = await graphQLClient.request(query, variables)
//     return data.lockManagers
// }

// export func as func

// func().catch((error) => console.error(error))
