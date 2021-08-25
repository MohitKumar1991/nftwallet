# nftwallet
NFT Wallet is made for normal people to be able to hold nfts

The NFT Wallet can used to buy any NFT and hold it. It abstracts crypto private keys behind email and a passphrase which is the mnemonic. Using Circle's API the NFT wallet can be used to buy an NFT. Simply search and import the NFT from rarible and use wallet to buy NFT.

NFT Wallet also lets you know if a possible scam is in place by matching across a list of scammy smart contracts and by fetching some data from different databases.

Q: How will import work ? (Maybe use APIs or a graph)


Overall Flow

1. Create account using email (support for number later) - ethereum private key generated
2. Select NFT or provide Contract Address for Minting (verify Valid ERC721)
3. Pay using Card and other methods. Get convertion using oracles.

# Plan to work

1. Extension - simple login page - set email and password - generate private keys (how?)
2. USDC Payment Integration - enter card details and send details to usdc servers + fetch expected gas and usdc/eth price from oracles
3. Rarible/OpenSea get contract and token no and send to server
4. Show NFTs using ethersjs filter function

Backend
1. Smart Contract with liquidity
2. Transfer funds to contract
3. Transfer NFTs to privatey keys (preferably without holding)




