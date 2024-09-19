const EnvironmentVariable = () => {
  //import.meta.env.VITE_URL  // using this we can access the env file

  return <div>{import.meta.env.VITE_URL}</div>;
};

export default EnvironmentVariable;
