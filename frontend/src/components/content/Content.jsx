import { createContext, useState } from "react";
import "./Content.css";
import url_icon from "./../../assets/url_icon.svg";
import Table from "./../table/Table";

const UrlContext = createContext({});

const SERVER_URL = import.meta.env.VITE_API_URL;

export default function Content() {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const shortenRequest = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${SERVER_URL}/url`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (response.ok) {
        const data = await response.json();
        setShortenedUrl(`${SERVER_URL}/${data.id}`);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <UrlContext.Provider value={{ shortenedUrl, url }}>
      <>
        <section className="hero">
          <div className="hero-subsection">
            <h1 id="title">
              Big Links?{" "}
              <span className="highlight">Nah, We Like ‘Em Small!</span>
            </h1>
            <p id="sub-hero-text">
              Make your links small enough to fit in your pocket. The internet
              should be fun, not stressful!
            </p>
          </div>

          <div className="input-box">
            <img src={url_icon} alt="URL Icon" className="icon" id="url_icon" />
            <input
              type="text"
              placeholder="Type or Paste the url. Your choice."
              onChange={handleUrlChange}
            />
            <button className="shorten-btn" onClick={shortenRequest}>
              Shorten Me
            </button>
          </div>
        </section>
        <div className="table-wrapper">
          <Table />
        </div>
      </>
    </UrlContext.Provider>
  );
}
export { UrlContext };
