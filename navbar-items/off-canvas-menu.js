import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { createRoot } from 'react-dom/client';

function OffCanvasExample() {
  const [show, setShow] = useState(false);
  const [bodyScroll, setBodyScroll] = useState(true); // Default to enable body scrolling

  const handleClose = () => setShow(false);
  const toggleShow = () => {
    console.log("Button clicked!"); // Log when the button is clicked
    setShow(true); // Show the Offcanvas
  };

  return (
    <>
      <button id="toggle-offcanvas" className="text-2xl cursor-pointer" onClick={toggleShow}>
        &#9776;
      </button>

      <Offcanvas show={show} onHide={handleClose} scroll={bodyScroll} backdrop={false}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <img src='../assets/img1.jpeg' alt="Sample" className="w-full h-auto"/>
            <h1 className='text-black'>Hello</h1>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

// Render the OffCanvasExample component to the DOM
const domNode = document.getElementById('off-canvas-root');
const root = createRoot(domNode);
root.render(<OffCanvasExample />);
