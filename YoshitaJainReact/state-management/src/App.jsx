import "./App.css";

function App() {
  var x = 10;
  function updateState() {
    x = 15;
  }

  // now we are not able to change the variable so we need to use state
  console.log(x);
  return (
    <>
      <h1>Why we use states in react X value is {x} </h1>
      <button onClick={updateState}>Click Me</button>
    </>
  );
}

export default App;
