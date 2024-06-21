import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-3xl bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test!
      </h1>
      <Card name="Chai" btnText="click me" />
      <Card name="Code" btnText="info" />
      {/*  we can make a default value as well  */}
    </>
  );
}

export default App;
