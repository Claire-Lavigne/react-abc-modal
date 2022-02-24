# react-abc-modal

[NPM](https://www.npmjs.com/package/react-abc-modal)  
[Yarn](https://yarnpkg.com/package/react-abc-modal)

A react modal as simple as ABC.

- Customize the modal as you wish
- The modal can be closed with :
  - "Escape" key,
  - overlay click/touch (optional)
  - icon click/touch (optional)

<img src="https://github.com/Claire-Lavigne/repo-images/blob/main/React-abc-modal.JPG" width="60%">

**About**

- This project was created as part of my OpenClassrooms apprenticeship as a JavaScript React developer
- Any contributions are welcome!

## Download with NPM or Yarn

```bash
npm i react-abc-modal
yarn add react-abc-modal
```

## How to use it

### What is necessary

```js
import React, { useState } from "react";
import Modal from "react-abc-modal";

const yourComponent = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* Example to open Modal on click */}
      <button onClick={() => setOpen(true)}>Open modal</button>

      {/* Your Modal and its children */}
      <Modal isOpen={isOpen} setOpen={setOpen} closeOutside={true} icon={true}>
        <h1>Write anything inside!</h1>
      </Modal>
    </>
  );
};

export default yourComponent;
```

### What can be customized

```js
{
  /* The variables to set your custom inline css */
}
const styleOverlay = {
  backgroundColor: "red",
};
const styleSection = {
  backgroundColor: "blue",
};
const styleIconClose = {
  backgroundColor: "yellow",
};

return (
  <>
    {/* All existing props */}
    <Modal
      isOpen={isOpen}
      setOpen={setOpen}
      closeOutside={true}
      icon={true}
      classOverlay="myOverlayClass"
      classSection="mySectionClass"
      classIconClose="myIconCloseClass"
      styleOverlay={styleOverlay}
      styleSection={styleSection}
      styleIconClose={styleIconClose}
    >
      <p>Add any tag here</p>
      {/* If you want to use your own component to close the Modal on click */}
      <p onClick={() => setOpen(false)}>Click me!</p>
    </Modal>
  </>
);
```

## About the props

- `isOpen` : Compulsory to get the current state
- `setOpen` : Compulsory to update the state
- `closeOutside` : A boolean to set to true if you want to close the modal when the user clicks the overlay
- `icon` : A boolean to set to true if you want to use our Icon svg
- `classOverlay` : A string to add your custom class for the Overlay component
- `classSection` : A string to add your custom class for the Main component
- `classIconClose` : A string to add your custom class for the Icon Close component
- `styleOverlay` : A variable to add your custom inline style for the Overlay Close component
- `styleSection` : A variable to add your custom inline style for the Main Close component
- `styleIconClose` : A variable to add your custom inline style for the Icon Close component
