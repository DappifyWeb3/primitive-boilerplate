// Behavior
async function script(props) {
  console.log(props);

  const test = async () => {
    await console.log("test async");
  };

  test();
}

export default script;
