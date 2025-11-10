import React, { useState } from "react";
import Modal from "react-abc-modal";

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal isOpen={open} setOpen={setOpen}>
        <h1>Hello from react-abc-modal</h1>
        <p>Try Escape key or clicking outside.</p>
      </Modal>
    </div>
  );
};

export default App;
