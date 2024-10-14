import { forwardRef } from "react";

//* forwardRef -> forwardRef() to let your component receive a ref and forward it to a child component

const InnerInput = (props, ref) => {
  return <input {...props} ref={ref} />;
};

export const CustomInput = forwardRef(InnerInput);
