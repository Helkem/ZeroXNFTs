import Layout from "./components/Layout";
import "./App.css";
import { ConfigProvider, theme } from "antd";

export default function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <Layout />
      </ConfigProvider>
    </>
  );
}
