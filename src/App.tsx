import { useState } from "react";
import Clock from "./components/Clock";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Settings from "./components/Settings";
import { ConfigContextProvider } from "./context/config";

function App() {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <ConfigContextProvider>
      <Header />
      <Clock />
      <Settings setModalOpen={setModalOpen} />
      <div>{isModalOpen && <Modal setModalOpen={setModalOpen} />}</div>
    </ConfigContextProvider>
  );
}

export default App;
