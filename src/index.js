import React, { useState } from "react";
import { render } from "react-dom";
import Modal from "./lib/Components/Modal";

const App = () => {
  const [isOpen, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Open modal</button>
      <Modal isOpen={isOpen} onClose={closeModal} closeOutside={true}>
        <h1>TEST</h1>
      </Modal>
    </>
  );
};

render(<App />, document.getElementById("root"));
