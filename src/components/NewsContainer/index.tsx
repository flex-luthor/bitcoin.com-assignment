import { useEffect } from "react";
import { Row } from "../Containers";
import NewsBox from "./NewsBox";
import { useSharedState } from "../../store";
import axios from "axios";

function NewsContainer() {
  const [state, setState] = useSharedState();

  useEffect(() => {
    const getNewsData = async () => {
      const res = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://news.bitcoin.com/wp-content/weekly_popular_posts.json"
      );
      const data = res.data
        .sort((a: { publish_date: string }, b: { publish_date: string }) => {
          const dateA = new Date(a.publish_date);
          const dateB = new Date(b.publish_date);
          return dateA.getTime() - dateB.getTime();
        })
        .slice(0, 4);
      setState((prev) => ({ ...prev, newsData: data }));
    };
    getNewsData();
  });
  return (
    <Row>
      {state.newsData.map((data, index) => (
        <NewsBox data={data} key={index} />
      ))}
    </Row>
  );
}

export default NewsContainer;
