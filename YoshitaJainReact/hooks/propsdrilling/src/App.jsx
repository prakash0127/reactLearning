import "./App.css";
import ChildA from "./ChildA";

function App() {
  // const [count, setCount] = useState(0);
  const name = "Prakash Gupta ";
  return (
    <>
      <ChildA name={name} />
    </>
  );
}

export default App;
