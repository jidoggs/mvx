import { createContext, useCallback, useState } from "react";
import Layout from "./components/Layout";
import Modal from "./components/Modal";

export const ModalContex = createContext(null);

function App() {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = useCallback(() => setShowModal((prev) => !prev), []);

  return (
    <div className="h-screen">
      <ModalContex.Provider value={[showModalHandler]}>
        {showModal ? <Modal /> : null}
        <Layout />
      </ModalContex.Provider>
    </div>
  );
}

export default App;
