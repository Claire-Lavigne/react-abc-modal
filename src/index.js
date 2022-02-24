import React, { useState } from "react";
import { render } from "react-dom";
import Modal from "./lib/Components/Modal";

const App = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open modal</button>
      <Modal isOpen={isOpen} setOpen={setOpen} closeOutside={true} icon={true}>
        <h1>This is a customizable React Modal</h1>
      </Modal>
    </>
  );
};

render(<App />, document.getElementById("root"));
