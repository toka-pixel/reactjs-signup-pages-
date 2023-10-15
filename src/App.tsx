import Singup from "./components/index";
import { ConfigProvider } from "antd";
import './styles/globals.scss';


function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#7244C8",
          borderRadius: 8,
        },
      }}
    >
      <Singup />
    </ConfigProvider>
  );
}

export default App;
