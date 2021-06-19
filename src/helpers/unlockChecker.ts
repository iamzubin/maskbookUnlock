import { GraphQLClient, gql } from 'graphql-request'

const endpoint = 'https://api.thegraph.com/subgraphs/name/unlock-protocol/unlock-rinkeby'
const graphQLClient = new GraphQLClient(endpoint)

/**
 * this function will verify if the eth account actually holds the unlock protocol NFT
 * @param _lockAddress address of the unlock protocol lock
 * @param _holder account of the holder needed to be verified
 * @returns boolean
 */


// export const verifyHolder = async  (_holder: String) => {
export const verifyHolder = async  (_lockAddress: String, _holder: String) => {
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
    const data = await graphQLClient.request(query, variables)
    return data.keyHolders
}


/**
 * Fetch list of all the unlock tokens an account hold
 * @param _address1 address of the ETH account holding unlock nfts
 * @returns lisi of all the unlock locks held by the eth account
 */

export const getLocks = async (_address1: String) => {
    const query = gql`
        query lockManager($address: String!) {
            lockManagers(where: { address: $address }) {
                lock {
                    name
                    price
                    address
                    expirationDuration
                }
            }
        }
    `
    const variables = {
        address: _address1,
    }
    const data = await graphQLClient.request(query, variables)
    return data.lockManagers
}

// export func as func

// func().catch((error) => console.error(error))
