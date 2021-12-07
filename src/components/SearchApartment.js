import React, { useEffect, useState } from "react";
import { useStateValue } from "../providers/StateProvider";
// import htmlToReactParser from "html-to-react";
import { BsCurrencyEuro } from "react-icons/bs";
import Interweave from "interweave";
const SearchApartment = ({ match }) => {
  const [{ details }, dispatch] = useStateValue();
  const [result, setResult] = useState([]);
  const [url, setUrl] = useState(null);
  const [images, setImages] = useState([]);
  useEffect(() => {
    let id = match.params.id;
    details.map((detail) => {
      if (detail.id === id) {
        console.log(result);
        setResult(detail);
        setUrl(detail.Images[0]?.url);
        let tempImages = [];
        detail.Images.map((image) => {
          tempImages.push(image.url);
        });
        setImages(tempImages);
        console.log(detail);
      }
    });
  }, []);

  const handleUrl = (index) => {
    console.log(index);
    result.Images.map((image, i) => {
      if (i === index) {
        setUrl(image.url);
      }
    });
  };
  return (
    <>
      <h1>SearchApartment</h1>
      {result && (
        <div className="searchApartment_container">
          <div className="searchApartment_left">
            <div className="left_1">
              <img src={url} alt="image not found" />
            </div>
            <div className="left_2">
              {images.map((image, i) => (
                <img src={image} alt="not found" onClick={() => handleUrl(i)} />
              ))}
            </div>
          </div>
          <div className="searchApartment_right">
            <div className="price_details">
              <h3 style={{ textAlign: "center" }}>
                <BsCurrencyEuro />
                {result.Floor_Area * result.Price}
                <span> 1 bed | {result.Price_Per_Sqm} sqm</span>
              </h3>
              <p>{result.Reference_Number}</p>
              <button>Contact Agent</button>
            </div>
            <div>
              <table>
                <th>Facts and Features</th>
                <tr>
                  <td className="title">Neighbourhood</td>
                  <td>{result.Area?.Name}</td>
                </tr>
                <tr>
                  <td className="title">Price per sqm</td>
                  <td>{result.Price}</td>
                </tr>
                <tr>
                  <td className="title">Floor plan</td>
                  <td className="plan">View floor plan</td>
                  {/* <td>{result.Area?.Name}</td> */}
                </tr>
              </table>
            </div>
            <div className="description_result">
              <h2>Description</h2>
              <Interweave content={result.Description} />
              {/* <p>{HtmlToReactParser.Parser(result.Description)}</p> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchApartment;
