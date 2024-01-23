import "./App.css";
import Card from "./Components/Card";
function App() {
  return (
    <>
      <h1 className="bg-green-400 p-4 text-black rounded-xl mb-4">
        Tailwind Css
      </h1>
      <Card username="chaiaurcode" btntext="" />
      <Card username="herald" />
    </>
  );
}

export default App;
