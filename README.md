# ZeroXNFTs

Web3 application to search for any NFT Collection by contract address. 

## Description

Built with React with Typescript Vite and Node.js. Requires a MORALIS Api key for search funcitonality. 
Select a chain, input any NFT contract address or click the scrolling collections to search for and display an NFT collection. Eligible addresses avaliable on Ethereum mainet, Binance SmartChain, Polygon, Avalanche. 

### Dependencies
* Requires Node.js
* Requires Express.js
* Requires NPM package manager 

### Node Version
Tested with v20.12.2

## Installing
* Before running locally, make sure to navigate to the api folder duplicate `.env_sample` to a new file called `.env`, and update its values to a valid MORALIS API key.
* Get your free API key here https://docs.moralis.io/web3-data-api/evm/reference/get-contract-nfts?address=0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB&chain=eth&format=decimal
* Make sure Node.js is installed on machine. https://nodejs.org/en
  
## Executing program
* Update `.env` file with a valid api key
* Run the API server
* Run the frontend development server
* Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Running the API
  
Navigate to API directory  
```
cd api
```
Install dependencies 
```
npm install
```
Start the node server
```
node index.js
```
## Running the Frontend 

Navigate to frontend app directory  
```
cd app
```
Install dependencies 
```
npm install
```
Start the development server
```
npm run dev
```

## Contact
* Discord - @Helkem
* Gmail - helkemzero@gmail.com
* Twitter/X - [https://twitter.com/Helkem]
