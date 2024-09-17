import ChildComponent from "./ChildComponent";
import ThemeProvider from "./ThemeContext";

const ParentComponent = () => {
  return (
    <ThemeProvider>
      <ChildComponent />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem ab
        aut, magni iure numquam ipsum modi aperiam quod fugit voluptatum
        provident ipsam aspernatur.
      </p>
    </ThemeProvider>
  );
};

export default ParentComponent;
