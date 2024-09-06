import "./Home.css";

import React, { useState } from "react";
import { toast } from "react-toastify";
// import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
// import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
// import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const Home = () => {
  const cardData = [
    {
      img: "https://p2.hiclipart.com/preview/758/279/637/arrow-infinity-symbol-logo-eternity-royaltyfree-png-clipart.jpg",
      para: "2e813de",
      button_text: "Failed",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/2693/2693685.png",
      para: "32 Online Now",
      button_text: "Analytics",
    },
    {
      img: "https://pngimg.com/d/dollar_sign_PNG21539.png",
      para: "2 days left in your trial",
      button_text: "Billing",
    },
  ];

  const [button1Style, setButton1Style] = useState({
    backgroundColor: "white",
    color: "black",
  });

  const [button2Style, setButton2Style] = useState({
    backgroundColor: "white",
    color: "black",
  });

  const [button3Style, setButton3Style] = useState({
    backgroundColor: "white",
    color: "black",
  });

  const [smallButtonStyle, setSmallButtonStyle] = useState({
    backgroundColor: "red",
  });

  const [grapghDataStyle, setGraphDataStyle] = useState({
    display: "none",
  });

  const [transitionStyle, setTransitionStyle] = useState({
    transform: `translateX(0px) `,
  });

  const [imgIcon, setImgIcon] = useState(cardData[0].img);
  const [paragrapgh, setParagraph] = useState("2e813de");
  const [buttonText, setButtonText] = useState("Failed");

  const handleButton1Click = () => {
    setButton1Style({ backgroundColor: "black", color: "white" });
    setButton2Style({ backgroundColor: "white", color: "black" });
    setButton3Style({ backgroundColor: "white", color: "black" });

    setImgIcon(cardData[0].img);
    setParagraph(cardData[0].para);
    setButtonText(cardData[0].button_text);
    setSmallButtonStyle({
      backgroundColor: "red",
      transform: `translateX(-10px) `,
    });

    setGraphDataStyle({ display: "none" });
    setTransitionStyle({
      transform: `translateX(-10px) `,
    });
  };

  const handleButton2Click = () => {
    setButton2Style({ backgroundColor: "black", color: "white" });
    setButton1Style({ backgroundColor: "white", color: "black" });
    setButton3Style({ backgroundColor: "white", color: "black" });
    setImgIcon(cardData[1].img);

    setParagraph(cardData[1].para);
    setButtonText(cardData[1].button_text);
    setSmallButtonStyle({
      backgroundColor: "blue",
    });
    setTransitionStyle({
      transform: `translateX(-10px) `,
    });
  };

  const handleButton3Click = () => {
    setButton3Style({ backgroundColor: "black", color: "white" });
    setButton1Style({ backgroundColor: "white", color: "black" });
    setButton2Style({ backgroundColor: "white", color: "black" });
    setImgIcon(cardData[2].img);

    setParagraph(cardData[2].para);
    setButtonText(cardData[2].button_text);
    setSmallButtonStyle({
      backgroundColor: "green",
    });

    setGraphDataStyle({ display: "none" });
    setTransitionStyle({
      transform: `translateX(-10px) `,
    });
  };

  const handleTopClick = () => {
    // console.log(paragrapgh);
    if (paragrapgh === "2e813de") {
      setParagraph("2e813de Failed to Compile");
      setButtonText("Redeploy");
    } else if (paragrapgh === "32 Online Now") {
      setButtonText("Close");
      setSmallButtonStyle({
        backgroundColor: "black",
      });
      setGraphDataStyle({
        display: "block",
      });
    } else if (paragrapgh === "2 days left in your trial") {
      setButtonText("See Pro");
      setParagraph("Upgrade to Pro and save $12");
    }
  };

  const handleShowHide = () => {
    setGraphDataStyle({ display: "none" });
  };

  return (
    <div className="home-main-container">
      <div className="white-inner-box">
        <div style={grapghDataStyle} className="graph-secrete-container">
          <table>
            <thead>
              <tr>
                <th style={{ display: "flex", justifyContent: "flex-start" }}>
                  Traffic
                </th>
                <th style={{ color: "grey" }}>Last 3 days</th>
                <th style={{ display: "flex", justifyContent: "flex-end" }}>
                  See all
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>/projects</td>
                <td></td>
                <td>2,543 visits</td>
              </tr>
              <tr>
                <td>/groups</td>
                <td></td>
                <td>2,121 visits</td>
              </tr>
              <tr>
                <td>/orders</td>
                <td></td>
                <td>2,433 visits</td>
              </tr>
              <tr>
                <td>/templates</td>
                <td></td>
                <td>1,123 visits</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="box-top-content">
          <img
            src={imgIcon}
            width="30px"
            height="30px"
            style={transitionStyle}
          />
          <button
            style={{
              border: "none",
              cursor: "pointer",
              backgroundColor: "transparent",
            }}
            onClick={handleTopClick}
          >
            <p>{paragrapgh}</p>
          </button>
          <button style={smallButtonStyle} onClick={handleShowHide}>
            {buttonText}
          </button>
        </div>

        <div className="box-bottom-content">
          <button style={button1Style} onClick={handleButton1Click}>
            Commit
          </button>
          <button style={button2Style} onClick={handleButton2Click}>
            Analytics
          </button>
          <button style={button3Style} onClick={handleButton3Click}>
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
