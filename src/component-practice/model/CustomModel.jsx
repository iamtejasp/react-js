import { useEffect } from "react";
import { createPortal } from "react-dom";

const CustomModel = ({ isOpen, onClose, children }) => {
  //* here we check that if Escape key press then we can close the model
  useEffect(() => {
    const handlePress = (e) => {
      if (e?.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handlePress);

    return () => {
      document.removeEventListener("keydown", handlePress);
    };
  }, [onClose]);

  //* create portal is directly open the model in model id div

  return createPortal(
    <div className={`modal-overlay ${isOpen && "show"}`}>
      <div className="modal">
        {children}
        <button onClick={onClose}>Close</button>
      </div>

      <style>
        {`.modal {
          position: absolute;
          top: 50%;
          left: 50%;
          translate: -50% -50%;
          padding: 1rem;
          background: white;
          border: 1px solid black;
          z-index: 1;
        }

        .modal-overlay.show {
          display: block;
        }

        .modal-overlay {
          display: none;
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.1);
        }`}
      </style>
    </div>,
    document.querySelector("#model")
  );
};

export default CustomModel;
