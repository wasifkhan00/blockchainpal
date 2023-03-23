// import React,{useState,memo,useEffect} from 'react'

// const APICALLS = (props) => {
   
//     const [responseData, setResponseData] = useState(null)

//     console.log('im rendering redly');

 
//   let coinName = [
//     "bitcoin",
//     "ethereum",
//     "tether",
//     "cardano",
//     "monero",
//     "solana",
//     "dai",
//     "polkadot",
//     "tron",
//     "litecoin",
//     "chainlink",
//     "cosmos",
//   ];

//     let bitcoinUrl =   `https://api.coingecko.com/api/v3/coins/${coinName[0]}/market_chart?vs_currency=${'usd'}&days=${365}`;;
//     let tetherUrl =   `https://api.coingecko.com/api/v3/coins/${coinName[2]}/market_chart?vs_currency=${'usd'}&days=${365}`;;
//     let cardanoUrl =   `https://api.coingecko.com/api/v3/coins/${coinName[3]}/market_chart?vs_currency=${'usd'}&days=${365}`;;
//     let moneroUrl =   `https://api.coingecko.com/api/v3/coins/${coinName[4]}/market_chart?vs_currency=${'usd'}&days=${365}`;;
//     let solanaUrl =   `https://api.coingecko.com/api/v3/coins/${coinName[5]}/market_chart?vs_currency=${'usd'}&days=${365}`;;
//     let daiUrl =   `https://api.coingecko.com/api/v3/coins/${coinName[6]}/market_chart?vs_currency=${'usd'}&days=${365}`;;
//     let polkadotUrl =   `https://api.coingecko.com/api/v3/coins/${coinName[7]}/market_chart?vs_currency=${'usd'}&days=${365}`;;
//     let tronUrl =   `https://api.coingecko.com/api/v3/coins/${coinName[8]}/market_chart?vs_currency=${'usd'}&days=${365}`;;
//     let litecoinUrl =  `https://api.coingecko.com/api/v3/coins/${coinName[9]}/market_chart?vs_currency=${'usd'}&days=${365}`;;
//     let chainlinkUrl =   `https://api.coingecko.com/api/v3/coins/${coinName[10]}/market_chart?vs_currency=${'usd'}&days=${365}`;;
//     let cosmosUrl =   `https://api.coingecko.com/api/v3/coins/${coinName[11]}/market_chart?vs_currency=${'usd'}&days=${365}`;;


//     async function fetchingDatasFromApi() {
     
//    const requestingData= await Promise.all([
//     fetch(bitcoinUrl).then(res=>res.json()),
//     fetch(ethereumUrl).then(res=>res.json()),
//     fetch(tetherUrl).then(res=>res.json()),
//     fetch(cardanoUrl).then(res=>res.json()),
//     fetch(moneroUrl).then(res=>res.json()),
//     fetch(solanaUrl).then(res=>res.json()),
//     fetch(daiUrl).then(res=>res.json()),
//     fetch(polkadotUrl).then(res=>res.json()),
//     fetch(tronUrl).then(res=>res.json()),
//     fetch(litecoinUrl).then(res=>res.json()),
//     fetch(chainlinkUrl).then(res=>res.json()),
//     fetch(cosmosUrl).then(res=>res.json()),
//    ]).then(data=>props.apiResponses(data))

//        }


 


 

// useEffect(() => {
//     fetchingDatasFromApi();
    
// }, [])
       




        

// }






// export default  APICALLS;