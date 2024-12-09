import { useState } from "react";
import CustomModel from "./CustomModel";

const Model = () => {
  const [modelOpen, setModelOpen] = useState(false);

  return (
    <div>
      <div>
        <button onClick={() => setModelOpen(true)}>Open</button>
        <CustomModel isOpen={modelOpen} onClose={() => setModelOpen(false)}>
          <p>
            This is a <strong>CUSTOM</strong> modal
          </p>
        </CustomModel>
      </div>
    </div>
  );
};

export default Model;
