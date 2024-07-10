import { useState } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";
import logo from "../assets/zerologo.svg";
const Layout = () => {
  const [address, setAddress] = useState("");
  const [chain, setChain] = useState("0x1");
  const [cursor, setCursor] = useState(null);
  const [NFTs, setNFTs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function getImgUrl(metadata) {
    if (!metadata) return logo;

    let meta = JSON.parse(metadata);

    if (!meta.image) return logo;

    if (!meta.image.includes("ipfs://")) {
      return meta.image;
    } else {
      return "https://ipfs.io/ipfs/" + meta.image.substring(7);
    }
  }

  async function fetchNFTs() {
    setIsLoading(true);
    try {
      let res;
      if (cursor) {
        res = await axios.get(`http://localhost:3000/allNft`, {
          params: { address: address, chain: chain, cursor: cursor },
        });
      } else {
        res = await axios.get(`http://localhost:3000/allNft`, {
          params: { address: address, chain: chain },
        });
      }

      console.log(res);

      let n = NFTs;
      setNFTs(n.concat(res.data.result.result));
      setCursor(res.data.result.cursor);
      console.log(res);
    } catch (error) {
      console.error("Error fetching NFTs:", error);
    } finally {
      setIsLoading(false);
    }
  }
  function addressChange(e) {
    setAddress(e.target.value);
    setCursor(null);
    setNFTs([]);
  }

  function chainChange(value) {
    setChain(value);
    setCursor(null);
    setNFTs([]);
  }

  return (
    <>
      <div className='App'>
        <Header
          address={address}
          onAddressChange={addressChange}
          fetchNFTs={fetchNFTs}
          onChainChange={chainChange}
        />
        <div className='mainWindow'>
          <Content
            fetchNFTs={fetchNFTs}
            NFTs={NFTs}
            cursor={cursor}
            getImgUrl={getImgUrl}
            isLoading={isLoading}
            setAddress={setAddress}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
