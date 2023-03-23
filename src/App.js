import React, { useState, useEffect, createContext } from "react";
import tetherforicon from "./Components/Images/tetherforicon.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import chainlink from "./Components/Images/chainlink.png";
import litecoin from "./Components/Images/litecoin.png";
import ethIcon from "./Components/Images/ethIcon.png";
import cardano from "./Components/Images/cardano.png";
import ErrorMessage from "./Components/ErrorMessage";
import CoinsGallery from "./Components/CoinsGallery";
import btcForGallery from "./Components/Images/btcForGallery.png";
import ethForGallery from "./Components/Images/ethForGallery.png";
import daiForGallery from "./Components/Images/daiForGallery.png";
import chainlinkForGallery from "./Components/Images/chainlinkForGallery.png";
import litecoinForGallery from "./Components/Images/litecoinForGallery.png";
import cosmosForGallery from "./Components/Images/cosmosForGallery.png";
import uniswapForGallery from "./Components/Images/uniswapForGallery.png";
import fantomForGallery from "./Components/Images/fantomForGallery.png";
import iotaForGallery from "./Components/Images/iotaForGallery.png";
import tronForGallery from "./Components/Images/tronForGallery.png";
import polkadotForGallery from "./Components/Images/polkadotForGallery.png";
import tetherForGallery from "./Components/Images/tetherForGallery.png";
import cardanoForGallery from "./Components/Images/cardanoForGallery.png";
import moneroForGallery from "./Components/Images/monero.png";
import solanaForGallery from "./Components/Images/solanaForGallery.png";
import monero from "./Components/Images/monero.png";
import solana from "./Components/Images/solana.png";
import cosmos from "./Components/Images/cosmos.png";
import uniswap from "./Components/Images/uniswap.png";
import Iota from "./Components/Images/Iota.png";
import fantom from "./Components/Images/fantom.png";
import tron from "./Components/Images/tron.png";
import TableData from "./Components/TableData";
import LineChart from "./Components/LineChart";
import btc from "./Components/Images/btc.png";
import dai from "./Components/Images/dai.png";
import dot from "./Components/Images/dot.png";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Coins from "./Components/Coins";
import Body from "./Components/Body";
import axios from "axios";
import "./App.css";

export let themeContext = createContext(null);

function App() {
  let [bitcoinData, setBitcoinData] = useState({});
  let [labelName, setLabelName] = useState("BTC PRICE IN USD");
  let [dark, setDark] = useState(false);
  let [responseData, setResponseData] = useState(null);
  let [active, setActive] = useState("Yearly");
  const [bgColor, setBgColor] = useState("rgb(240,200,0)");
  const [userData, setUserData] = useState({
    labels: [],
    datasets: [
      {
        label: "BTC PRICE IN USD",
        data: [],
        backgroundColor: bgColor,
        borderColor: bgColor,
        pointRadius: 2,
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    if (active === "Yearly") {
      let bitcoinUrl = `https://api.coingecko.com/api/v3/coins/${"bitcoin"}/market_chart?vs_currency=${"usd"}&days=${365}`;
      fetchingDatasFromApi();

      async function fetchingDatasFromApi() {
        const sendingRequest = await axios.get(bitcoinUrl);

        let response = sendingRequest.data.prices;

        setBitcoinData(response);

        let resDate = [];
        let resPrices = [];

        for (let i = 358; i <= response.length -1; i++) {
          let unixDate = response[i][0];
          let date = new Date(unixDate - 1000);
          resDate.push(date.toLocaleDateString());
          resPrices.push(response[i][1]);
        }

        setUserData({
          labels: resDate,
          datasets: [
            {
              label: labelName,
              data: resPrices,
              backgroundColor: bgColor,
              borderColor: bgColor,
              pointRadius: 2,
              borderWidth: 2,
            },
          ],
        });
      }
    }
  }, []);

  function forOneYearForecast(e) {
    let resDates = [];
    let resPrices = [];
    for (let i = 0; i <= bitcoinData.length - 1; i++) {
      let btcYearlyPrice = bitcoinData[i][1];
      let unixDate = bitcoinData[i][0];
      let date = new Date(unixDate - 1000);
      let fullDate = date.toLocaleDateString();
      resDates.push(fullDate);
      resPrices.push(btcYearlyPrice);
    }
    setUserData({
      labels: resDates,
      datasets: [
        {
          label: labelName,
          data: resPrices,
          backgroundColor: bgColor,
          borderColor: bgColor,
          pointRadius: 2,
          borderWidth: 2,
        },
      ],
    });
  }

  function forOneMonthForecast(e) {
    setActive("Monthly");
    let resDates = [];
    let resPrices = [];
    for (let i = 334; i <= bitcoinData.length - 1; i++) {
      let unixDate = bitcoinData[i][0];
      let date = new Date(unixDate - 1000);
      let fullDate = date.toLocaleDateString();
      resDates.push(fullDate);
      resPrices.push(bitcoinData[i][1]);
    }

    setUserData({
      labels: resDates,
      datasets: [
        {
          label: labelName,
          data: resPrices,
          backgroundColor: bgColor,
          borderColor: bgColor,
          pointRadius: 2,
          borderWidth: 2,
        },
      ],
    });
  }

  function forOneWeekForecast(e) {
    let resDate = [];
    let resPrice = [];

    setActive("Weekly");

    for (let i = 358; i <= bitcoinData.length - 1; i++) {
      let unixDate = bitcoinData[i][0];
      let date = new Date(unixDate - 1000);
      resDate.push(date.toLocaleDateString());
      resPrice.push(bitcoinData[i][1]);
    }

    setUserData({
      labels: resDate,
      datasets: [
        {
          label: labelName,
          data: resPrice,
          backgroundColor: bgColor,
          borderColor: bgColor,
          pointRadius: 2,
          borderWidth: 2,
        },
      ],
    });
  }

  return (
    <>
      <BrowserRouter>
        <themeContext.Provider
          value={{
            dark,
            bgColor,
            setDark,
            userData,
            setUserData,
            bitcoinData,
            setBitcoinData,
            labelName,
            setLabelName,
            responseData,
          }}>
          <div className={dark ? "AppContain dark" : "AppContain"}>
            <Navbar firstC="Home" secondC="Dashboard" />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <Body />
                    <CoinsGallery
                      imgOne={btcForGallery}
                      imgTwo={ethForGallery}
                      imgThree={tetherForGallery}
                      firstImage="galleryItemIconsOne"
                      secondImage="galleryItemIconsTwo"
                      thirdImage="galleryItemIconsThree"
                      descripOne=" Bitcoin is a decentralized digital currency that can be transferred
            on the peer-to-peer bitcoin network. The cryptocurrency was invented
            in 2008 by an unknown person or group of people using the name
            Satoshi Nakamoto. The currency began use in 2009."
                      descripTwo="Ethereum is a decentralized, open-source blockchain with smart contract functionality. 
                      Ethereum is the native cryptocurrency of the platform. Ethereum is second only to Bitcoin in market capitalization. 
                      Ethereum was conceived in 2013 by programmer Vitalik Buterin."
                      descripThree="Tether, is an asset-backed cryptocurrency stablecoin. 
                      It was launched by the company Tether Limited Inc. in 2014. 
                      Tether Limited is owned by the Hong Kong-based company iFinex Inc., 
                      which also owns the Bitfinex cryptocurrency exchange."
                      coinName="Bitcoin"
                      coinSecondName="Ethereum"
                      coinThirdName="Tether"
                    />

                    <CoinsGallery
                      imgOne={cardanoForGallery}
                      imgTwo={moneroForGallery}
                      imgThree={solanaForGallery}
                      firstImage="galleryItemIconsOne"
                      secondImage="galleryItemIconsThree"
                      thirdImage="galleryItemIconsThree"
                      descripOne="Cardano is a public blockchain platform. It is open-source and decentralized, with consensus achieved using proof of stake. 
                      It can facilitate peer-to-peer transactions with its internal cryptocurrency, ADA. 
                      Cardano was founded in 2015 by Ethereum co-founder Charles Hoskinson."
                      descripTwo="Monero is a decentralized cryptocurrency.
                       It uses a public distributed ledger with privacy-enhancing technologies that obfuscate transactions to achieve anonymity and fungibility.
                        Observers cannot decipher addresses trading monero, transaction amounts, address balances, or transaction histories."
                      descripThree="
                             Solana is a fast-growing blockchain with striking similarities to Ethereum—often referred to as an “Ethereum killer.” 
                             Like Ethereum, the SOL token can be purchased on most major exchanges. The token's real value is in conducting transactions on 
                             the Solana network, which has unique advantages."

                      coinName="Cardano"
                      coinSecondName="Monero"
                      coinThirdName="Solana"
                    />
                    <CoinsGallery
                      imgOne={daiForGallery}
                      imgTwo={polkadotForGallery}
                      imgThree={tronForGallery}
                      firstImage="galleryItemIconsThree"
                      secondImage="galleryItemIconsThree"
                      thirdImage="galleryItemIconsThree"

                      descripOne="Dai is a stablecoin cryptocurrency on the Ethereum blockchain which aims to keep its value as close
                       to one United States dollar as possible through a system of smart contracts and the decentralized participants 
                       which those contracts incentivize to perform maintenance and governance functions."

                      descripTwo="DOT is the native cryptocurrency of Polkadot; a blockchain interoperability protocol founded in 2016. Polkadot is an open source blockchain platform and cryptocurrency. 
                      It provides interconnectivity and interoperability between blockchains, by enabling independent chains to 
                      securely exchange messages and perform transactions with each other without a trusted third-party."

                      descripThree="TRON was founded by Justin Sun in 2017. The TRON Foundation was established in July 2017 in Singapore. 
                      The TRON Foundation raised $70 million in 2017 through an initial coin offering shortly before China outlawed the digital tokens.
                      The testnet, Blockchain Explorer, and Web Wallet were all launched by March 2018."

                      coinName="Dai"
                      coinSecondName="Polkadot"
                      coinThirdName="Tron"
                    />
                    <CoinsGallery
                      imgOne={litecoinForGallery}
                      imgTwo={chainlinkForGallery}
                      imgThree={cosmosForGallery}
                      firstImage="galleryItemIconsThree"
                      secondImage="galleryItemIconsThree"
                      thirdImage="galleryItemIconsThree"

                      descripOne="Litecoin is a decentralized peer-to-peer cryptocurrency and open-source software project 
                      released under the MIT/X11 license. Inspired by Bitcoin, Litecoin was among the earliest altcoins, 
                      starting in October 2011. In technical details, the Litecoin main chain shares a slightly modified Bitcoin codebase."

                      descripTwo="Chainlink is a cryptocurrency aiming to incentivize a global network of 
                      computers to provide reliable, real-world data to smart contracts running on top of 
                      blockchains. If you're unfamiliar, smart contracts are agreements programmed to execute 
                      if and when certain conditions are met. As of 2020, Chainlink is seeking to support all blockchain-based smart contract networks."

                      descripThree="Cosmos (ATOM) is a cryptocurrency that powers an ecosystem of blockchains designed to scale and interoperate with each other. The team aims to create an Internet of Blockchains, a network of blockchains able to communicate with each other in a decentralized way. Cosmos is a proof-of-stake chain."
                     
                      coinName="Litecoin"
                      coinSecondName="Chainlink"
                      coinThirdName="Cosmos"
                    />
                    <CoinsGallery
                      imgOne={uniswapForGallery}
                      imgTwo={fantomForGallery}
                      imgThree={iotaForGallery}
                      firstImage="galleryItemIconsThree"
                      secondImage="galleryItemIconsThree"
                      thirdImage="galleryItemIconsThree"

                      descripOne="
Uniswap (UNI) is an Ethereum token that powers Uniswap, an automated liquidity provider that's designed to make it easy to exchange Ethereum (ERC-20) tokens. There is no orderbook or central facilitator on Uniswap. Instead, tokens are exchanged through liquidity pools that are defined by smart contracts."
                      
descripTwo="The Fantom system generates its own digital coin, abbreviated to FTM. The purpose is to lend users of these speedier blockchain networks a native medium of exchange. Further, each blockchain on the Fantom system can have its own tokens and rules on how these tokens are generated and traded."
                      
            descripThree="IOTA is a distributed ledger developed to handle transactions between connected devices in the IoT ecosystem, and its cryptocurrency is known as MIOTA. It began life as a hardware project whose goal was to design low-cost general-purpose processors."
                      coinName="Uniswap"
                      coinSecondName="Fantom"
                      coinThirdName="Iota"
                    />
                  </>
                }
              />

              <Route
                exact
                path="/dashboard"
                element={
                  <>
                    <div
                      className="container"
                      style={{
                        background: dark ? "rgb(27, 27, 27)" : `white`,
                      }}>
                      <LineChart chartData={userData} />
                      <div className="optionsContainer">
                        <button onClick={forOneWeekForecast}>
                          Weekly Data
                        </button>
                        <button onClick={forOneMonthForecast}>
                          Monthly Data
                        </button>
                        <button onClick={forOneYearForecast}>
                          Yearly Data
                        </button>
                      </div>
                    </div>

                    <Coins
                      theadOne={TableData[0].theadOne}
                      theadTwo={TableData[0].theadTwo}
                      theadThree={TableData[0].theadThree}
                      theadFour={TableData[0].theadFour}
                      theadFive={TableData[0].theadFive}
                      bodyOne={TableData[0].bodyOne}
                      bodyTwo={TableData[0].bodyTwo}
                      imgSource={btc}
                      secondBodyOne={TableData[1].secondBodyOne}
                      secondBodyTwo={TableData[1].secondBodyTwo}
                      secondimgSource={ethIcon}
                      thirdBodyOne={TableData[2].thirdBodyOne}
                      thirdBodyTwo={TableData[2].thirdBodyTwo}
                      thirdimgSource={tetherforicon}
                      fourthBodyOne={TableData[3].fourthBodyOne}
                      fourthBodyTwo={TableData[3].fourthBodyTwo}
                      fourthimgSource={cardano}
                      fifthBodyOne={TableData[4].fifthBodyOne}
                      fifthBodyTwo={TableData[4].fifthBodyTwo}
                      fifthimgSource={monero}
                      sixthBodyOne={TableData[5].sixthBodyOne}
                      sixthBodyTwo={TableData[5].sixthBodyTwo}
                      sixthimgSource={solana}
                      seventhBodyOne={TableData[6].seventhBodyOne}
                      seventhBodyTwo={TableData[6].seventhBodyTwo}
                      seventhimgSource={dai}
                      eighthBodyOne={TableData[7].eighthBodyOne}
                      eighthBodyTwo={TableData[7].eighthBodyTwo}
                      eighthimgSource={dot}
                      ninthBodyOne={TableData[8].ninthBodyOne}
                      ninthBodyTwo={TableData[8].ninthBodyTwo}
                      ninthimgSource={tron}
                      tenthBodyOne={TableData[9].tenthBodyOne}
                      tenthBodyTwo={TableData[9].tenthBodyTwo}
                      tenthimgSource={litecoin}
                      eleventhBodyOne={TableData[10].eleventhBodyOne}
                      eleventhBodyTwo={TableData[10].eleventhBodyTwo}
                      eleventhimgSource={chainlink}
                      twelvethBodyOne={TableData[11].twelvethBodyOne}
                      twelvethBodyTwo={TableData[11].twelvethBodyTwo}
                      twelvethimgSource={cosmos}
                      thirteenthBodyOne={TableData[12].thirteenthBodyOne}
                      thirteenthBodyTwo={TableData[12].thirteenthBodyTwo}
                      thirteenthimgSource={uniswap}
                      fourteenthBodyOne={TableData[13].fourteenthBodyOne}
                      fourteenthBodyTwo={TableData[13].fourteenthBodyTwo}
                      fourteenthimgSource={fantom}
                      fifteenthBodyOne={TableData[14].fifteenthBodyOne}
                      fifteenthBodyTwo={TableData[14].fifteenthBodyTwo}
                      fifteenthimgSource={Iota}
                    />
                  </>
                }
              />
              <Route path="*" element={<ErrorMessage />} />
            </Routes>
            <Footer />
          </div>
        </themeContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
