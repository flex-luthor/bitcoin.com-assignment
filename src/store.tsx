import { useState } from "react";
import { createContainer } from "react-tracked";

const chartData = [
  {
    date: "2022-06-23",
    value: 10501,
  },
  {
    date: "2022-06-24",
    value: 12435,
  },
  {
    date: "2022-06-25",
    value: 11553,
  },
  {
    date: "2022-06-26",
    value: 11444,
  },
  {
    date: "2022-06-27",
    value: 11446,
  },
  {
    date: "2022-06-28",
    value: 11252,
  },
  {
    date: "2022-06-29",
    value: 10532,
  },
];

const priceData = [{ price: 9907, stamp: 1656676320 }];

const newsData = [
  {
    title:
      "Rich Dad Poor Dad's Robert Kiyosaki Says He's Waiting for Bitcoin to Test $1,100 to Buy More",
    publish_date: "2022-06-29 00:30:00",
    thumbnail:
      "https://static.news.bitcoin.com/wp-content/uploads/2022/06/kiyosaki-bitcoin.jpg",
    excerpt:
      "The famous author of the best-selling book Rich Dad Poor Dad, Robert Kiyosaki, says he’s waiting for the price of bitcoin to test $1,100. He added that he will buy more if the cryptocurrency recovers from that price level. Robert Kiyosaki on Bitcoin Testing $1,100 The author of Rich Dad Poor Dad, Robert Kiyosaki, has",
    href: "https://news.bitcoin.com/rich-dad-poor-dads-robert-kiyosaki-says-hes-waiting-for-bitcoin-to-test-1100-to-buy-more/?utm_source=BitcoincomWallet&utm_medium=Discovery&utm_campaign=News",
  },
  {
    title:
      "Reports Claim Russia Defaulted on Foreign Debt for the First Time in a Century, Kremlin Disagrees and Says It Paid",
    publish_date: "2022-06-27 17:30:18",
    thumbnail:
      "https://static.news.bitcoin.com/wp-content/uploads/2022/06/ggggfddssss.jpg",
    excerpt:
      "According to reports, the Russian Federation has defaulted on its foreign debt for the first time since 1918. Bondholders told the press that they had not received payments from the transcontinental country. However, Russia’s finance ministry denies the allegations and says the country made the payments via the Euroclear monetary system. Russia Is Accused of",
    href: "https://news.bitcoin.com/reports-claim-russia-defaulted-on-foreign-debt-for-the-first-time-in-a-century-kremlin-disagrees-and-says-it-paid/?utm_source=BitcoincomWallet&utm_medium=Discovery&utm_campaign=News",
  },
  {
    title:
      "SEC Chair Gensler Affirms Bitcoin Is a Commodity — 'That's the Only One I'm Going to Say'",
    publish_date: "2022-06-28 00:00:39",
    thumbnail:
      "https://static.news.bitcoin.com/wp-content/uploads/2022/06/gensler-bitcoin.jpg",
    excerpt:
      "The chairman of the U.S. Securities and Exchange Commission (SEC), Gary Gensler, says bitcoin is a commodity. He emphasized that the SEC, the Commodity Futures Trading Commission (CFTC), and banking regulators will collaborate to oversee the crypto sector. Gary Gensler: Bitcoin Is a Commodity SEC Chairman Gary Gensler clarified his position on cryptocurrency, particularly bitcoin,",
    href: "https://news.bitcoin.com/sec-chair-gensler-bitcoin-is-a-commodity/?utm_source=BitcoincomWallet&utm_medium=Discovery&utm_campaign=News",
  },
  {
    title:
      "FBI Arrests 2 Men Planning 'Violent' Robbery of Bitcoin Worth Millions of Dollars — They Face 20 Years in Prison",
    publish_date: "2022-06-28 02:30:27",
    thumbnail:
      "https://static.news.bitcoin.com/wp-content/uploads/2022/06/home-robbery.jpg",
    excerpt:
      "The Federal Bureau of Investigation (FBI) has arrested two men who participated “in a violent plan to break into a family’s home in the middle of the night” to steal bitcoin worth tens of millions of dollars,” according to the U.S. Department of Justice. They could go to prison for 20 years. 2 Men Charged",
    href: "https://news.bitcoin.com/fbi-arrests-2-men-planning-violent-robbery-of-bitcoin-worth-millions-of-dollars-they-face-20-years-in-prison/?utm_source=BitcoincomWallet&utm_medium=Discovery&utm_campaign=News",
  },
  {
    title:
      "The New Eminem and Snoop Dogg Music Video Showcases Bored Ape Avatars",
    publish_date: "2022-06-27 19:30:56",
    thumbnail:
      "https://static.news.bitcoin.com/wp-content/uploads/2022/06/fffddddd.jpg",
    excerpt:
      "The prominent rap stars Eminem and Snoop Dogg released a new music video that showcases the Bored Ape Yacht Club (BAYC) non-fungible token (NFT) collection. The duo’s latest single called “From the D 2 The LBC” debuted at this year’s Apefest, an annual gathering for BAYC and Mutant Ape Yacht Club (MAYC) owners. From the",
    href: "https://news.bitcoin.com/the-new-eminem-and-snoop-dogg-music-video-showcases-bored-ape-avatars/?utm_source=BitcoincomWallet&utm_medium=Discovery&utm_campaign=News",
  },
];

const initialState = {
  newsData: newsData,
  priceData: priceData,
  chartData: chartData,
};

const useMyState = () => useState(initialState);

export const { Provider: SharedStateProvider, useTracked: useSharedState } =
  createContainer(useMyState);
