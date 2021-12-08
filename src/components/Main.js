import React, { useEffect, useState } from "react";
import axios from "axios";
import Display from "./Display";
import { ScatterBoxLoaderComponent } from "./Loader";
import Header from "./Header";
const Main = () => {
  const [details, setDetails] = useState([]);

  useEffect(async () => {
    await axios
      .get(
        "https://carolineolds-strapi-dev.q.starberry.com/properties?_limit=10"
      )
      .then((res) => {
        setDetails(res.data);
      });
  }, []);
  return (
    <>
      {/* <h2>Main page</h2> */}

      <>
        <Header />
        <h3 className="display_title">Property for sale</h3>
        <Display details={details} />
      </>
    </>
  );
};

export default Main;
