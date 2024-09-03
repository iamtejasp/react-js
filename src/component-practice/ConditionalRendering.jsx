export const ConditionalRendering = ({ number }) => {
  return (
    <>
      This will check falsy value so here if number is 0 then it will show 0
      insted of This is 0<div>{number && `This is ${number}`}</div>
      <br />
      <br />
      This is the best practice to check Conditional Rendering
      <div>{number != null && `This is ${number}`}</div>
      <br />
      <br />
      We can use ternory operators to check also
      <div>
        {number != null ? `This is ${number}` : `Number is not defined`}
      </div>
    </>
  );
};
