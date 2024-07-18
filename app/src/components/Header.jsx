/* eslint-disable react/prop-types */
import { Input, Select } from "antd";
import Logo from "../assets/zerologo.svg";
const { Search } = Input;

function Header({ address, onAddressChange, fetchNFTs, onChainChange }) {
  function handleSearch() {
    fetchNFTs();
  }

  return (
    <header className='header'>
      <img src={Logo} className='logo' alt='logo' />

      <div className='headerSearch'>
        <Search
          placeholder='Input contract address'
          onSearch={handleSearch}
          allowClear={true}
          enterButton
          size='large'
          value={address}
          onChange={(e) => onAddressChange(e)}
        />
      </div>
      <div className='rightH'>
        <Select
          size='large'
          defaultValue='Ethereum'
          style={{ width: 120 }}
          onChange={(value) => onChainChange(value)}
          options={[
            { value: "0x1", label: "Ethereum" },
            { value: "0x38", label: "BSC" },
            { value: "0x89", label: "Polygon" },
            { value: "0xa86a", label: "Avalanche" },
          ]}
        />
      </div>
    </header>
  );
}

export default Header;
