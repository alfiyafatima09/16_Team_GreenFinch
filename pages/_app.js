import "../styles/globals.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [pageTitle, setPageTitle] = useState("");
  const [pageDescription, setPageDescription] = useState("");
  useEffect(() => {
    const getCurrentTab = async () => {
      try {
        // Using chrome.tabs.query with Promise syntax for better error handling
        const tabs = await chrome.tabs.query({
          active: true,
          currentWindow: true,
        });

        if (tabs && tabs[0]) {
          const tab = tabs[0];
          setPageTitle(tab.title || tab.url);
          setPageDescription(
            document.querySelector("meta[name='description']")?.textContent
          );
        } else {
          setPageTitle("No active tab found");
        }
      } catch (error) {
        console.error("Error:", error);
        setPageTitle(`Error: ${error.message}`);
      }
    };

    getCurrentTab();
  }, []);

  return (
    <div className="">
      <div className="">
        <h1 className="">{pageTitle}</h1>
        <br />
        <p className="">{pageDescription}</p>
      </div>
    </div>
  );
}
