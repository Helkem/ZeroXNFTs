# ZeroXNFTs

Web3 application to search for any NFT Collection by contract address. 

## Description

Built with React with Typescript Vite and Node.js. Requires a MORALIS Api key for search funcitonality. 
Select a chain, input any NFT contract address or click the scrolling collections to search for and display an NFT collection. Eligible addresses avaliable on Ethereum mainet, Binance SmartChain, Polygon, Avalanche. 

### Dependencies
* Requires Node.js

### Node Version
Tested with v20.12.2

### Installing
* Before running locally, make sure to navigate to the api folder duplicate `.env_sample` to a new file called `.env`, and update its values to a valid MORALIS API key.
  
### Executing program
* Update `.env` file with a valid api key
* Run the API server
* Run the frontend development server
* Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Running the API
  
Navigate to API directory  
```
cd api
```
Start the node server
```
node index.js
```
### Running the Frontend 

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



