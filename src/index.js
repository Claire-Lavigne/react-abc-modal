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
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        closeOutside={true}
        icon={true}
      >
        <h1>This is a customizable React Modal</h1>
      </Modal>
    </>
  );
};

render(<App />, document.getElementById("root"));
