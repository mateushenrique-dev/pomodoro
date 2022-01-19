import { useContext } from "react";
import Clock from "./components/Clock";
import Header from "./components/Header";
import Modal from "./components/Modal";
import Settings from "./components/Settings";
import { ModalContext } from './context/modal';

function App() {
  const {isModalOpen} = useContext(ModalContext)

  return (
    <main className="app">
      <Header />
      <Clock />
      <Settings />
      {isModalOpen && <Modal />}
    </main>
  );
}

export default App;
