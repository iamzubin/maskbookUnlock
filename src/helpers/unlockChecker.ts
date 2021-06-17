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
    query keyPurchase ($purchaser : String!, $lock : String!){
    
            keyPurchases(where: {purchaser : $purchaser, lock : $lock}) {
                lock
        }
    }
          
    `
    const variables = {
        purchaser: _holder,
        lock : _lockAddress
    }
    const data = await graphQLClient.request(query, variables)
    return data.keyPurchases
}


/**
 * 
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
