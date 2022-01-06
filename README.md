# react-abc-modal

[NPM](https://www.npmjs.com/package/react-abc-modal)

A react modal as simple as ABC.

- Customize the modal as you wish
- Contributions welcome!

## Download

```bash
npm i react-abc-modal
```

## How to use it

```javascript
import React, { useState } from "react";
import Modal from "react-abc-modal";

const yourComponent = () => {
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
        <h1>Write anything inside!</h1>
      </Modal>
    </>
  );
};

export default yourComponent;
```
