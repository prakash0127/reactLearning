import "./App.css";
import ComponentOne from "./ComponentOne";
function App() {
  const arr = [1, 2, 3, 4, 5];

  // before destructre if we want to save our first value of our arr array
  // const one = arr[0];
  // similar for second element
  // const two = arr[1];
  // like that we can do that to access our array element

  // but usinging destructure we can do it directly like want to access first and second so

  const [one, two, , four] = arr;
  // and dont want to access the third element just add a comma and we can access fouth element

  console.log(one, two, four); // this is how we can access it

  // in react we can do the destructure like see in example
  return (
    <>
      <div>
        <h2>Destructuring in react </h2>
        {/* we passsed two props firstName and lastName to ComponentOne */}
        <ComponentOne firstName="Prakash" lastName="Gupta" />
      </div>
    </>
  );
}

export default App;
