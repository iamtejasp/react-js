import { useState } from "react";

const RenderingList = () => {
  const [item, setItem] = useState([
    {
      id: crypto.randomUUID(),
      name: "Item 1",
    },
    {
      id: crypto.randomUUID(),
      name: "Item 2",
    },
  ]);

  const addItem = () => {
    setItem((i) => {
      return [{ id: crypto.randomUUID, name: "new item" }, ...i];
    });
  };

  return (
    <>
      <div>
        <button onClick={addItem}>Add item</button>
        <br />
        <br />
        <div>
          {item.map((i) => {
            return (
              <div key={i.id}>
                {i.name}
                <input type="text" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RenderingList;
