const CUSTOM_HTML = `
  <div>
      <h1>Hello</h1>
      <h3>This is tejas</h3>
  </div>
`;

const RenderRawHtml = () => {
  // we can set html which comes in string in API

  return <div dangerouslySetInnerHTML={{ __html: CUSTOM_HTML }}></div>;
};

export default RenderRawHtml;
