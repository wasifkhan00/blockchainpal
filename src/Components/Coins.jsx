import React, { useContext, useState, useEffect } from "react";
import { themeContext } from "../App";

function Coins(props) {
  const [btcD, setBtcD] = useState(null);
  const [ethD, setEthD] = useState(null);
  const [tethD, setTethD] = useState(null);
  const [cardD, setCardD] = useState(null);
  const [monD, setMonD] = useState(null);
  const [solD, setSolD] = useState(null);
  const [daiD, setDaiD] = useState(null);
  const [polD, setPolD] = useState(null);
  const [tronD, setTronD] = useState(null);
  const [ltcD, setLtcD] = useState(null);
  const [chainD, setChainD] = useState(null);
  const [cosmosD, setCosmosD] = useState(null);
  const [uniD, setUniD] = useState(null);
  const [fantD, setFantD] = useState(null);
  const [iotaD, setIotaD] = useState(null);

  const [btcPrices, setBtcPrices] = useState({
    currentPrice: "",
    marketCapital: "",
    TFHVol: "",
  });

  const [ethPrices, setEthPrices] = useState({
    currentPrice: "",
    marketCapital: "",
    TFHVol: "",
  });

  const [tethPrices, setTethPrices] = useState({
    currentPrice: "",
    marketCapital: "",
    TFHVol: "",
  });

  const [cardPrices, setCardPrices] = useState({
    currentPrice: "",
    marketCapital: "",
    TFHVol: "",
  });

  const [monPrices, setMonPrices] = useState({
    currentPrice: "",
    marketCapital: "",
    TFHVol: "",
  });

  const [solPrices, setSolPrices] = useState({
    currentPrice: "",
    marketCapital: "",
    TFHVol: "",
  });

  const [daiPrices, setDaiPrices] = useState({
    currentPrice: "",
    marketCapital: "",
    TFHVol: "",
  });

  const [polPrices, setPolPrices] = useState({
    currentPrice: "",
    marketCapital: "",
    TFHVol: "",
  });

  const [tronPrices, setTronPrices] = useState({
    currentPrice: "",
    marketCapital: "",
    TFHVol: "",
  });

  const [ltcPrices, setLtcPrices] = useState({
    currentPrice: "",
    marketCapital: "",
    TFHVol: "",
  });

  const [chainPrices, setChainPrices] = useState({
    currentPrice: "",
    marketCapital: "",
    TFHVol: "",
  });

  const [cosmosPrices, setCosmosPrices] = useState({
    currentPrice: "",
    marketCapital: "",
    TFHVol: "",
  });

  const [uniPrices, setUniPrices] = useState({
    currentPrice: "",
    marketCapital: "",
    TFHVol: "",
  });

  const [fantPrices, setFantPrices] = useState({
    currentPrice: "",
    marketCapital: "",
    TFHVol: "",
  });

  const [iotaPrices, setIotaPrices] = useState({
    currentPrice: "",
    marketCapital: "",
    TFHVol: "",
  });

  let { dark, bgColor, setLabelName, setUserData, setBitcoinData } =
    useContext(themeContext);

  let coinName = [
    "bitcoin",
    "ethereum",
    "tether",
    "cardano",
    "monero",
    "solana",
    "dai",
    "polkadot",
    "tron",
    "litecoin",
    "chainlink",
    "cosmos",
    "uniswap",
    "fantom",
    "iota",
  ];

  let bitcoinUrl = `https://api.coingecko.com/api/v3/coins/${
    coinName[0]
  }/market_chart?vs_currency=${"usd"}&days=${365}`;
  let ethereumUrl = `https://api.coingecko.com/api/v3/coins/${
    coinName[1]
  }/market_chart?vs_currency=${"usd"}&days=${365}`;
  let tetherUrl = `https://api.coingecko.com/api/v3/coins/${
    coinName[2]
  }/market_chart?vs_currency=${"usd"}&days=${365}`;
  let cardanoUrl = `https://api.coingecko.com/api/v3/coins/${
    coinName[3]
  }/market_chart?vs_currency=${"usd"}&days=${365}`;
  let moneroUrl = `https://api.coingecko.com/api/v3/coins/${
    coinName[4]
  }/market_chart?vs_currency=${"usd"}&days=${365}`;
  let solanaUrl = `https://api.coingecko.com/api/v3/coins/${
    coinName[5]
  }/market_chart?vs_currency=${"usd"}&days=${365}`;
  let daiUrl = `https://api.coingecko.com/api/v3/coins/${
    coinName[6]
  }/market_chart?vs_currency=${"usd"}&days=${365}`;
  let polkadotUrl = `https://api.coingecko.com/api/v3/coins/${
    coinName[7]
  }/market_chart?vs_currency=${"usd"}&days=${365}`;
  let tronUrl = `https://api.coingecko.com/api/v3/coins/${
    coinName[8]
  }/market_chart?vs_currency=${"usd"}&days=${365}`;
  let litecoinUrl = `https://api.coingecko.com/api/v3/coins/${
    coinName[9]
  }/market_chart?vs_currency=${"usd"}&days=${365}`;
  let chainlinkUrl = `https://api.coingecko.com/api/v3/coins/${
    coinName[10]
  }/market_chart?vs_currency=${"usd"}&days=${365}`;
  let cosmosUrl = `https://api.coingecko.com/api/v3/coins/${
    coinName[11]
  }/market_chart?vs_currency=${"usd"}&days=${365}`;
  let uniSwapUrl = `https://api.coingecko.com/api/v3/coins/${
    coinName[12]
  }/market_chart?vs_currency=${"usd"}&days=${365}`;
  let fantomUrl = `https://api.coingecko.com/api/v3/coins/${
    coinName[13]
  }/market_chart?vs_currency=${"usd"}&days=${365}`;
  let iotaUrl = `https://api.coingecko.com/api/v3/coins/${
    coinName[14]
  }/market_chart?vs_currency=${"usd"}&days=${365}`;

  useEffect(() => {
    async function fetchingDatasFromApi() {
      await Promise.all([
        fetch(bitcoinUrl).then((res) => res.json()),
        fetch(ethereumUrl).then((res) => res.json()),
        fetch(tetherUrl).then((res) => res.json()),
        fetch(cardanoUrl).then((res) => res.json()),
        fetch(moneroUrl).then((res) => res.json()),
        fetch(solanaUrl).then((res) => res.json()),
        fetch(daiUrl).then((res) => res.json()),
        fetch(polkadotUrl).then((res) => res.json()),
        fetch(tronUrl).then((res) => res.json()),
        fetch(litecoinUrl).then((res) => res.json()),
        fetch(chainlinkUrl).then((res) => res.json()),
        fetch(cosmosUrl).then((res) => res.json()),
        fetch(uniSwapUrl).then((res) => res.json()),
        fetch(fantomUrl).then((res) => res.json()),
        fetch(iotaUrl).then((res) => res.json()),
      ]).then((data) => {
        setBtcD(data[0]);
        setEthD(data[1]);
        setTethD(data[2]);
        setCardD(data[3]);
        setMonD(data[4]);
        setSolD(data[5]);
        setDaiD(data[6]);
        setPolD(data[7]);
        setTronD(data[8]);
        setLtcD(data[9]);
        setChainD(data[10]);
        setCosmosD(data[11]);
        setUniD(data[12]);
        setFantD(data[13]);
        setIotaD(data[14]);

        setBtcPrices({
          currentPrice: data[0].prices[365][1],
          marketCapital: Math.floor(data[0].market_caps[365][1]),
          TFHVol: Math.floor(data[0].total_volumes[365][1]),
        });

        setEthPrices({
          currentPrice: data[1].prices[365][1],
          marketCapital: Math.floor(data[1].market_caps[365][1]),
          TFHVol: Math.floor(data[1].total_volumes[365][1]),
        });

        setTethPrices({
          currentPrice: data[2].prices[365][1],
          marketCapital: Math.floor(data[2].market_caps[365][1]),
          TFHVol: Math.floor(data[2].total_volumes[365][1]),
        });

        setCardPrices({
          currentPrice: data[3].prices[365][1],
          marketCapital: Math.floor(data[3].market_caps[365][1]),
          TFHVol: Math.floor(data[3].total_volumes[365][1]),
        });

        setMonPrices({
          currentPrice: data[4].prices[365][1],
          marketCapital: Math.floor(data[4].market_caps[365][1]),
          TFHVol: Math.floor(data[4].total_volumes[365][1]),
        });

        setSolPrices({
          currentPrice: data[5].prices[365][1],
          marketCapital: Math.floor(data[5].market_caps[365][1]),
          TFHVol: Math.floor(data[5].total_volumes[365][1]),
        });

        setDaiPrices({
          currentPrice: data[6].prices[365][1],
          marketCapital: Math.floor(data[6].market_caps[365][1]),
          TFHVol: Math.floor(data[6].total_volumes[365][1]),
        });

        setPolPrices({
          currentPrice: data[7].prices[365][1],
          marketCapital: Math.floor(data[7].market_caps[365][1]),
          TFHVol: Math.floor(data[7].total_volumes[365][1]),
        });

        setTronPrices({
          currentPrice: data[8].prices[365][1],
          marketCapital: Math.floor(data[8].market_caps[365][1]),
          TFHVol: Math.floor(data[8].total_volumes[365][1]),
        });

        setLtcPrices({
          currentPrice: data[9].prices[365][1],
          marketCapital: Math.floor(data[9].market_caps[365][1]),
          TFHVol: Math.floor(data[9].total_volumes[365][1]),
        });

        setChainPrices({
          currentPrice: data[10].prices[365][1],
          marketCapital: Math.floor(data[10].market_caps[365][1]),
          TFHVol: Math.floor(data[10].total_volumes[365][1]),
        });

        setCosmosPrices({
          currentPrice: data[11].prices[365][1],
          marketCapital: Math.floor(data[11].market_caps[365][1]),
          TFHVol: Math.floor(data[11].total_volumes[365][1]),
        });

        setUniPrices({
          currentPrice: data[12].prices[365][1],
          marketCapital: Math.floor(data[12].market_caps[365][1]),
          TFHVol: Math.floor(data[12].total_volumes[365][1]),
        });

        setFantPrices({
          currentPrice: data[13].prices[365][1],
          marketCapital: Math.ceil(data[13].market_caps[365][1]),
          TFHVol: Math.ceil(data[13].total_volumes[365][1]),
        });

        setIotaPrices({
          currentPrice: data[14].prices[365][1],
          marketCapital: Math.ceil(data[14].market_caps[365][1]),
          TFHVol: Math.ceil(data[14].total_volumes[365][1]),
        });
      });
    }

    fetchingDatasFromApi();
  }, []);

  function functionForBtc() {
    setLabelName("BTC PRICE IN USD");

    window.scrollTo({ top: -10, behavior: "smooth" });

    let response = btcD.prices;

    setBitcoinData(response);
    let resDate = [];
    let resPrices = [];

    response.forEach((el) => {
      let unixDate = el[0];
      let date = new Date(unixDate - 1000);
      resDate.push(date.toLocaleDateString());
      resPrices.push(el[1]);
    });

    setUserData({
      labels: resDate,
      datasets: [
        {
          label: " BTC PRICE IN USD",
          data: resPrices,
          backgroundColor: bgColor,
          borderColor: bgColor,
          pointRadius: 2,
          borderWidth: 2,
        },
      ],
    });
  }

  function functionForEth() {
    setLabelName("ETH PRICE IN USD");

    window.scrollTo({ top: -20, behavior: "smooth" });

    let response = ethD.prices;
    setBitcoinData(response);

    let resDate = [];
    let resPrices = [];

    response.forEach((el) => {
      let unixDate = el[0];
      let date = new Date(unixDate - 1000);
      resDate.push(date.toLocaleDateString());
      resPrices.push(el[1]);
    });

    setUserData({
      labels: resDate,
      datasets: [
        {
          label: "ETH PRICE IN USD",
          data: resPrices,
          backgroundColor: bgColor,
          borderColor: bgColor,
          pointRadius: 2,
          borderWidth: 2,
        },
      ],
    });
  }

  function functionForTeth() {
    setLabelName("USDT PRICE IN USD");

    window.scrollTo({ top: -30, behavior: "smooth" });

    let response = tethD.prices;
    setBitcoinData(response);

    let resDate = [];
    let resPrices = [];

    response.forEach((el) => {
      let unixDate = el[0];
      let date = new Date(unixDate - 1000);
      resDate.push(date.toLocaleDateString());
      resPrices.push(el[1]);
    });

    setUserData({
      labels: resDate,
      datasets: [
        {
          label: "USDT PRICE IN USD",
          data: resPrices,
          backgroundColor: bgColor,
          borderColor: bgColor,
          pointRadius: 2,
          borderWidth: 2,
        },
      ],
    });
  }

  function functionForCard() {
    setLabelName("ADA PRICE IN USD");

    window.scrollTo({ top: -40, behavior: "smooth" });

    let response = cardD.prices;

    setBitcoinData(response);

    let resDate = [];
    let resPrices = [];

    response.forEach((el) => {
      let unixDate = el[0];
      let date = new Date(unixDate - 1000);
      resDate.push(date.toLocaleDateString());
      resPrices.push(el[1]);
    });

    setUserData({
      labels: resDate,
      datasets: [
        {
          label: "ADA PRICE IN USD",
          data: resPrices,
          backgroundColor: bgColor,
          borderColor: bgColor,
          pointRadius: 2,
          borderWidth: 2,
        },
      ],
    });
  }

  function functionForMone() {
    setLabelName("XMR PRICE IN USD");

    window.scrollTo({ top: -50, behavior: "smooth" });

    let response = monD.prices;
    setBitcoinData(response);

    let resDate = [];
    let resPrices = [];

    response.forEach((el) => {
      let unixDate = el[0];
      let date = new Date(unixDate - 1000);
      resDate.push(date.toLocaleDateString());
      resPrices.push(el[1]);
    });

    setUserData({
      labels: resDate,
      datasets: [
        {
          label: "XMR PRICE IN USD",
          data: resPrices,
          backgroundColor: bgColor,
          borderColor: bgColor,
          pointRadius: 2,
          borderWidth: 2,
        },
      ],
    });
  }

  function functionForSola() {
    setLabelName("SOL PRICE IN USD");

    window.scrollTo({ top: -60, behavior: "smooth" });

    let response = solD.prices;
    setBitcoinData(response);

    let resDate = [];
    let resPrices = [];

    response.forEach((el) => {
      let unixDate = el[0];
      let date = new Date(unixDate - 1000);
      resDate.push(date.toLocaleDateString());
      resPrices.push(el[1]);
    });

    setUserData({
      labels: resDate,
      datasets: [
        {
          label: "SOL PRICE IN USD",
          data: resPrices,
          backgroundColor: bgColor,
          borderColor: bgColor,
          pointRadius: 2,
          borderWidth: 2,
        },
      ],
    });
  }

  function functionForDai() {
    setLabelName("DAI PRICE IN USD");

    window.scrollTo({ top: -70, behavior: "smooth" });

    let response = daiD.prices;

    setBitcoinData(response);

    let resDate = [];
    let resPrices = [];

    response.forEach((el) => {
      let unixDate = el[0];
      let date = new Date(unixDate - 1000);
      resDate.push(date.toLocaleDateString());
      resPrices.push(el[1]);
    });

    setUserData({
      labels: resDate,
      datasets: [
        {
          label: "DAI PRICE IN USD",
          data: resPrices,
          backgroundColor: bgColor,
          borderColor: bgColor,
          pointRadius: 2,
          borderWidth: 2,
        },
      ],
    });
  }

  function functionForPolk() {
    setLabelName("DOT PRICE IN USD");

    window.scrollTo({ top: -80, behavior: "smooth" });

    let response = polD.prices;
    setBitcoinData(response);

    let resDate = [];
    let resPrices = [];

    response.forEach((el) => {
      let unixDate = el[0];
      let date = new Date(unixDate - 1000);
      resDate.push(date.toLocaleDateString());
      resPrices.push(el[1]);
    });

    setUserData({
      labels: resDate,
      datasets: [
        {
          label: "DOT PRICE IN USD",
          data: resPrices,
          backgroundColor: bgColor,
          borderColor: bgColor,
          pointRadius: 2,
          borderWidth: 2,
        },
      ],
    });
  }

  function functionForTron() {
    setLabelName("TRX PRICE IN USD");

    window.scrollTo({ top: -90, behavior: "smooth" });

    let response = tronD.prices;

    setBitcoinData(response);

    let resDate = [];
    let resPrices = [];

    response.forEach((el) => {
      let unixDate = el[0];
      let date = new Date(unixDate - 1000);
      resDate.push(date.toLocaleDateString());
      resPrices.push(el[1]);
    });

    setUserData({
      labels: resDate,
      datasets: [
        {
          label: "TRX PRICE IN USD",
          data: resPrices,
          backgroundColor: bgColor,
          borderColor: bgColor,
          pointRadius: 2,
          borderWidth: 2,
        },
      ],
    });
  }

  function functionForLite() {
    setLabelName("LTC PRICE IN USD");

    window.scrollTo({ top: -100, behavior: "smooth" });

    let response = ltcD.prices;
    setBitcoinData(response);

    let resDate = [];
    let resPrices = [];

    response.forEach((el) => {
      let unixDate = el[0];
      let date = new Date(unixDate - 1000);
      resDate.push(date.toLocaleDateString());
      resPrices.push(el[1]);
    });

    setUserData({
      labels: resDate,
      datasets: [
        {
          label: "LTC PRICE IN USD",
          data: resPrices,
          backgroundColor: bgColor,
          borderColor: bgColor,
          pointRadius: 2,
          borderWidth: 2,
        },
      ],
    });
  }

  function functionForChain() {
    setLabelName("LINK PRICE IN USD");

    window.scrollTo({ top: -110, behavior: "smooth" });

    let response = chainD.prices;
    setBitcoinData(response);

    let resDate = [];
    let resPrices = [];

    response.forEach((el) => {
      let unixDate = el[0];
      let date = new Date(unixDate - 1000);
      resDate.push(date.toLocaleDateString());
      resPrices.push(el[1]);
    });

    setUserData({
      labels: resDate,
      datasets: [
        {
          label: "LINK PRICE IN USD",
          data: resPrices,
          backgroundColor: bgColor,
          borderColor: bgColor,
          pointRadius: 2,
          borderWidth: 2,
        },
      ],
    });
  }

  function functionForCosmos() {
    setLabelName("ATOM PRICE IN USD");

    window.scrollTo({ top: -110, behavior: "smooth" });

    let response = cosmosD.prices;

    setBitcoinData(response);

    let resDate = [];
    let resPrices = [];

    response.forEach((el) => {
      let unixDate = el[0];
      let date = new Date(unixDate - 1000);
      resDate.push(date.toLocaleDateString());
      resPrices.push(el[1]);
    });

    setUserData({
      labels: resDate,
      datasets: [
        {
          label: "ATOM PRICE IN USD",
          data: resPrices,
          backgroundColor: bgColor,
          borderColor: bgColor,
          pointRadius: 2,
          borderWidth: 2,
        },
      ],
    });
  }

  function functionForUniswap() {
    setLabelName("UNI PRICE IN USD");

    window.scrollTo({ top: -120, behavior: "smooth" });

    let response = uniD.prices;
    setBitcoinData(response);

    let resDate = [];
    let resPrices = [];

    response.forEach((el) => {
      let unixDate = el[0];
      let date = new Date(unixDate - 1000);
      resDate.push(date.toLocaleDateString());
      resPrices.push(el[1]);
    });

    setUserData({
      labels: resDate,
      datasets: [
        {
          label: "UNI PRICE IN USD",
          data: resPrices,
          backgroundColor: bgColor,
          borderColor: bgColor,
          pointRadius: 2,
          borderWidth: 2,
        },
      ],
    });
  }

  function functionForFantom() {
    setLabelName("FTM PRICE IN USD");

    window.scrollTo({ top: -130, behavior: "smooth" });

    let response = fantD.prices;
    setBitcoinData(response);

    let resDate = [];
    let resPrices = [];

    response.forEach((el) => {
      let unixDate = el[0];
      let date = new Date(unixDate - 1000);
      resDate.push(date.toLocaleDateString());
      resPrices.push(el[1]);
    });

    setUserData({
      labels: resDate,
      datasets: [
        {
          label: "FTM PRICE IN USD",
          data: resPrices,
          backgroundColor: bgColor,
          borderColor: bgColor,
          pointRadius: 2,
          borderWidth: 2,
        },
      ],
    });
  }

  function functionForIota() {
    setLabelName("MIOTA PRICE IN USD");

    window.scrollTo({ top: -140, behavior: "smooth" });

    let response = iotaD.prices;

    setBitcoinData(response);

    let resDate = [];
    let resPrices = [];

    response.forEach((el) => {
      let unixDate = el[0];
      let date = new Date(unixDate - 1000);
      resDate.push(date.toLocaleDateString());
      resPrices.push(el[1]);
    });

    setUserData({
      labels: resDate,
      datasets: [
        {
          label: "MIOTA PRICE IN USD",
          data: resPrices,
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
      <table className="table">
        <thead>
          <tr className={dark ? "dark" : ""}>
            <th>{props.theadOne}</th>
            <th>{props.theadTwo}</th>
            <th>{props.theadThree}</th>
            <th>{props.theadFour}</th>
            <th>{props.theadFive}</th>
          </tr>
        </thead>

        <tbody
          style={{
            backgroundColor: dark ? "#2a302f" : "white",
            color: dark ? "white" : "black",
          }}>
          <tr onClick={functionForBtc}>
            <td className="img">
              <img src={props.imgSource} className="imgg" alt={props.alts} />
              {props.bodyOne}
            </td>
            <td>{props.bodyTwo}</td>
            <td>{`$${btcPrices.currentPrice?btcPrices.currentPrice.toLocaleString():"Failed to load Data"}`}</td>
            <td>{`$${btcPrices.marketCapital?btcPrices.marketCapital.toLocaleString():"Failed to load Data"}`}</td>
            <td>{`$${btcPrices.TFHVol?btcPrices.TFHVol.toLocaleString():"Failed to load Data"}`}</td>
          </tr>

          <tr onClick={functionForEth}>
            <td className="img">
              <img
                src={props.secondimgSource}
                className="imgg"
                alt={props.alts}
              />
              {props.secondBodyOne}
            </td>
            <td>{props.secondBodyTwo}</td>
            <td>{`$${
              ethPrices.currentPrice
                ? ethPrices.currentPrice.toLocaleString()
                : "Failed to load Data"
            }`}</td>
            <td>{`$${
              ethPrices.marketCapital
                ? ethPrices.marketCapital.toLocaleString()
                : "Failed to load Data"
            }`}</td>
            <td>{`$${
              ethPrices.TFHVol
                ? ethPrices.TFHVol.toLocaleString()
                : "Failed to load Data"
            }`}</td>
          </tr>

          <tr onClick={functionForTeth}>
            <td className="img">
              <img
                src={props.thirdimgSource}
                className="imgg"
                alt={props.alts}
              />
              {props.thirdBodyOne}
            </td>
            <td>{props.thirdBodyTwo}</td>
            <td>{`$${
              tethPrices.currentPrice
                ? tethPrices.currentPrice.toLocaleString()
                : "Failed to load Data"
            }`}</td>
            <td>{`$${
              tethPrices.marketCapital
                ? tethPrices.marketCapital.toLocaleString()
                : "Failed to load Data"
            }`}</td>
            <td>{`$${
              tethPrices.TFHVol
                ? tethPrices.TFHVol.toLocaleString()
                : "Failed to load Data"
            }`}</td>
          </tr>

          <tr onClick={functionForCard}>
            <td className="img">
              <img
                src={props.fourthimgSource}
                className="imgg"
                alt={props.alts}
              />
              {props.fourthBodyOne}
            </td>
            <td>{props.fourthBodyTwo}</td>
            <td>{`$${
              cardPrices.currentPrice
                ? cardPrices.currentPrice.toLocaleString()
                : "Failed to load Data"
            }`}</td>
            <td>{`$${
              cardPrices.marketCapital
                ? cardPrices.marketCapital.toLocaleString()
                : "Failed to load Data"
            }`}</td>
            <td>{`$${
              cardPrices.TFHVol
                ? cardPrices.TFHVol.toLocaleString()
                : "Failed to load Data"
            }`}</td>
          </tr>

          <tr onClick={functionForMone}>
            <td className="img">
              <img
                src={props.fifthimgSource}
                className="imgg"
                alt={props.alts}
              />
              {props.fifthBodyOne}
            </td>
            <td>{props.fifthBodyTwo}</td>
            <td>{`$${
              monPrices.currentPrice
                ? monPrices.currentPrice.toLocaleString()
                : "Failed to load Data"
            }`}</td>
            <td>{`$${
              monPrices.marketCapital
                ? monPrices.marketCapital.toLocaleString()
                : "Failed to load Data"
            }`}</td>
            <td>{`$${
              monPrices.TFHVol
                ? monPrices.TFHVol.toLocaleString()
                : "Failed to load Data"
            }`}</td>
          </tr>

          <tr onClick={functionForSola}>
            <td className="img">
              <img
                src={props.sixthimgSource}
                className="imgg"
                alt={props.alts}
              />
              {props.sixthBodyOne}
            </td>
            <td>{props.sixthBodyTwo}</td>
            <td>{`$${
              solPrices.currentPrice
                ? solPrices.currentPrice.toLocaleString()
                : "Failed to load Data"
            }`}</td>
            <td>{`$${
              solPrices.marketCapital
                ? solPrices.marketCapital.toLocaleString()
                : "Failed to load Data"
            }`}</td>
            <td>{`$${
              solPrices.TFHVol
                ? solPrices.TFHVol.toLocaleString()
                : "Failed to load Data"
            }`}</td>
          </tr>

          <tr onClick={functionForDai}>
            <td className="img">
              <img
                src={props.seventhimgSource}
                className="imgg"
                alt={props.alts}
              />
              {props.seventhBodyOne}
            </td>
            <td>{props.seventhBodyTwo}</td>
            <td>{`$${
              daiPrices.currentPrice
                ? daiPrices.currentPrice.toLocaleString()
                : "Failed to load Data"
            }`}</td>
            <td>{`$${
              daiPrices.marketCapital
                ? daiPrices.marketCapital.toLocaleString()
                : "Failed to load Data"
            }`}</td>
            <td>{`$${
              daiPrices.TFHVol
                ? daiPrices.TFHVol.toLocaleString()
                : "Failed to load Data"
            }`}</td>
          </tr>

          <tr onClick={functionForPolk}>
            <td className="img">
              <img
                src={props.eighthimgSource}
                className="imgg"
                alt={props.alts}
              />
              {props.eighthBodyOne}
            </td>
            <td>{props.eighthBodyTwo}</td>
            <td>{`$${
              polPrices.currentPrice
                ? polPrices.currentPrice.toLocaleString()
                : "Failed to load Data"
            }`}</td>
            <td>{`$${
              polPrices.marketCapital
                ? polPrices.marketCapital.toLocaleString()
                : "Failed to load Data"
            }`}</td>
            <td>{`$${
              polPrices.TFHVol
                ? polPrices.TFHVol.toLocaleString()
                : "Failed to load Data"
            }`}</td>
          </tr>

          <tr onClick={functionForTron}>
            <td className="img">
              <img
                src={props.ninthimgSource}
                className="imgg"
                alt={props.alts}
              />
              {props.ninthBodyOne}
            </td>
            <td>{props.ninthBodyTwo}</td>
            <td>{`$${
              tronPrices.currentPrice
                ? tronPrices.currentPrice.toLocaleString()
                : "Failed to load Data"
            }`}</td>
            <td>{`$${
              tronPrices.marketCapital
                ? tronPrices.marketCapital.toLocaleString()
                : "Failed to load Data"
            }`}</td>
            <td>{`$${
              tronPrices.TFHVol
                ? tronPrices.TFHVol.toLocaleString()
                : "Failed to load Data"
            }`}</td>
          </tr>

          <tr onClick={functionForLite}>
            <td className="img">
              <img
                src={props.tenthimgSource}
                className="imgg"
                alt={props.alts}
              />
              {props.tenthBodyOne}
            </td>
            <td>{props.tenthBodyTwo}</td>
            <td>{`$${
              ltcPrices.currentPrice
                ? ltcPrices.currentPrice.toLocaleString()
                : "Failed to load Data"
            }`}</td>
            <td>{`$${
              ltcPrices.marketCapital
                ? ltcPrices.marketCapital.toLocaleString()
                : "Failed to load Data"
            }`}</td>
            <td>{`$${
              ltcPrices.TFHVol
                ? ltcPrices.TFHVol.toLocaleString()
                : "Failed to load Data"
            }`}</td>
          </tr>

          <tr onClick={functionForChain}>
            <td className="img">
              <img
                src={props.eleventhimgSource}
                className="imgg"
                alt={props.alts}
              />
              {props.eleventhBodyOne}
            </td>
            <td>{props.eleventhBodyTwo}</td>
            <td>{`$${
              chainPrices.currentPrice
                ? chainPrices.currentPrice.toLocaleString()
                : "Failed to load Data"
            }`}</td>
            <td>{`$${
              chainPrices.marketCapital
                ? chainPrices.marketCapital.toLocaleString()
                : "Failed to load Data"
            }`}</td>
            <td>{`$${
              chainPrices.TFHVol
                ? chainPrices.TFHVol.toLocaleString()
                : "Failed to load Data"
            }`}</td>
          </tr>

          <tr onClick={functionForCosmos}>
            <td className="img">
              <img
                src={props.twelvethimgSource}
                className="imgg"
                alt={props.alts}
              />
              {props.twelvethBodyOne}
            </td>
            <td>{props.twelvethBodyTwo}</td>
            <td>{`$${
              cosmosPrices.currentPrice
                ? cosmosPrices.currentPrice.toLocaleString()
                : "Failed to load Data"
            }`}</td>
            <td>{`$${
              cosmosPrices.marketCapital
                ? cosmosPrices.marketCapital.toLocaleString()
                : "Failed to load Data"
            }`}</td>
            <td>{`$${
              cosmosPrices.TFHVol
                ? cosmosPrices.TFHVol.toLocaleString()
                : "Failed to load Data"
            }`}</td>
          </tr>

          <tr onClick={functionForUniswap}>
            <td className="img">
              <img
                src={props.thirteenthimgSource}
                className="imgg"
                alt={props.alts}
              />
              {props.thirteenthBodyOne}
            </td>
            <td>{props.thirteenthBodyTwo}</td>
            <td>{`$${
              uniPrices.currentPrice
                ? uniPrices.currentPrice.toLocaleString()
                : "Failed to load Data"
            }`}</td>
            <td>{`$${
              uniPrices.marketCapital
                ? uniPrices.marketCapital.toLocaleString()
                : "Failed to load Data"
            }`}</td>
            <td>{`$${
              uniPrices.TFHVol
                ? uniPrices.TFHVol.toLocaleString()
                : "Failed to load Data"
            }`}</td>
          </tr>

          <tr onClick={functionForFantom}>
            <td className="img">
              <img
                src={props.fourteenthimgSource}
                className="imgg"
                alt={props.alts}
              />
              {props.fourteenthBodyOne}
            </td>
            <td>{props.fourteenthBodyTwo}</td>
            <td>{`$${
              fantPrices.currentPrice
                ? fantPrices.currentPrice.toLocaleString()
                : "Failed to load Data"
            }`}</td>
            <td>{`$${
              fantPrices.marketCapital
                ? fantPrices.marketCapital.toLocaleString()
                : "Failed to load Data"
            }`}</td>
            <td>{`$${
              fantPrices.TFHVol
                ? fantPrices.TFHVol.toLocaleString()
                : "Failed to load Data"
            }`}</td>
          </tr>

          <tr onClick={functionForIota}>
            <td className="img">
              <img
                src={props.fifteenthimgSource}
                className="imgg"
                alt={props.alts}
              />
              {props.fifteenthBodyOne}
            </td>
            <td>{props.fifteenthBodyTwo}</td>
            <td>{`$${
              iotaPrices.currentPrice
                ? iotaPrices.currentPrice.toLocaleString()
                : "Failed to load Data"
            }`}</td>
            <td>{`$${
              iotaPrices.marketCapital
                ? iotaPrices.marketCapital.toLocaleString()
                : "Failed to load Data"
            }`}</td>
            <td>{`$${
              iotaPrices.TFHVol
                ? iotaPrices.TFHVol.toLocaleString()
                : "Failed to load Data"
            }`}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Coins;
