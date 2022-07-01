import { useState } from "react";
import { createContainer } from "react-tracked";
import axios from "axios";

const indexClient = axios.create({
  baseURL: "https://index-api.bitcoin.com/api",
});

const chartData: { data: string; value: number }[] = [];

const priceData: { price: number; stamp: number }[] = [];

const newsData: {
  title: string;
  publish_date: string;
  thumbnail: string;
  excerpt: string;
  href: string;
}[] = [];

const initialState = {
  newsData: newsData,
  priceData: priceData,
  chartData: chartData,
  chartDuration: 30,
  indexClient: indexClient,
};

const useMyState = () => useState(initialState);

const { Provider: SharedStateProvider, useTracked: useSharedState } =
  createContainer(useMyState);

export { SharedStateProvider, useSharedState };
