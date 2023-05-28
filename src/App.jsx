import "./App.css";
import { Space } from "antd";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import PageContent from "./components/PageContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Space>
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </Space>
      <Footer />
    </div>
  );
}

export default App;
