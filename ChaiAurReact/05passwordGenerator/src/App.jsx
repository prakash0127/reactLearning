import { useCallback, useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  // this is created for length as we need to increase and decrease and defalit length is 8

  const [numberAllowed, setNumberAllowed] = useState(false);
  // for Number we need to enable or disable we have taken a State and want to on or off so make default false i.e disable

  const [charAllowed, setCharAllowed] = useState(false);
  // same for Character we need to enable or disable we have taken a State and want to on or off so make default false i.e disable

  const [password, setPassword] = useState("");
  // creating a password to store the password from input field and default value we can give a random password
  // but we will be gererating Random password and store it for now we keep it
  // and for every load of your page it will generate a random pass word and it is another mechanism

  // creating a password generator function

  // why we use call here useCallback() hook, let cache a function defination between re-render
  // it means we can keep in memoory, syntax : usecallback(fn, dependencies)
  // dependecies is just loike which varibale call you want to run the function and you can pass in array

  //creating useRef so we get the current value from it can say current parameter
  const passwordRef = useRef(null);
  // created a reference and now  we are not refering any
  // reference so keeping it null in input we will use it for the reference it

  const passwordGenerator = useCallback(() => {
    // use callback because of memoization the value
    let pass = ""; // created a blank password for now

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    // created a str, to pull/take out from it, use to create a a password

    if (numberAllowed) str += "0123456789";
    // added a condition i.e if number is allowed so take or not dont take it

    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";
    // added a condition i.e if character is allowed so take or not dont take it

    // now we are creating a loop to pick the string and make a password from it, and length is depended on the length proper that we have defined above
    for (let i = 1; i <= length; i++) {
      // here length is a variable
      let char = Math.floor(Math.random() * str.length + 1);
      // here Math.random that will create a value and multiple by string length i.e the max value and added
      // +1 so 0 will not come and Math.floor so it will make the decimeal value in round now we get the index number

      pass += str.charAt(char); // now in pass vaiable we are storing it so and there is a mthod call chatAt
      // charAt : it pick the the character at index and index is char
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]); // why setpassword in dependecies if any optimizing it

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); // // to select the copy password or it will focus on copied item
    passwordRef.current?.setSelectionRange(0, 20); // here to select the range of the password

    window.navigator.clipboard.writeText(password);
    // why Window: you can use it here because you will running it on window i.e browser and we will have window Object
    // you cant use window in nextjs because it render on server
    //navigator to use clipboard so navigator.clipboard
    //writeText because we want to write it on clipboard and passing the password

    // but we have not used till now passwordRef and as off now we haven't seen that the password is not highlighted when you copy it, line added 48
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, setPassword]);
  // this array are the dependency setpassword as well because when we loading and will change the value as per this

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        {/* this is basic css we are applying using tailwind css  */}
        <h1 className="text-white text-center my-3">Password generator</h1>
        {/* Kept the heading  */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          {/* Added a input element   */}
          <input
            type="text"
            value={password} // taken the variable to display the password that is generated
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            ref={passwordRef} // you can keep any iput as referenvce so we can call it or display it to use useRef
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPasswordToClipboard} // adding a function to on click the button
          >
            Copy
          </button>
          {/* created a copy button  */}
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label> Length: {length}</label>
            {/* created a range type input to scroll left to write   */}
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label> Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label> Characters</label>
          </div>
        </div>
        {/* Adding here the below portion or the UI i.e length,Number, Character */}
      </div>
    </>
  );
}
//  we will use hooks more than 3 because we can't call the function passwordGenerator() directly like that because we are storing the valiue in the memory using callback() hook
// will use useEffect that means we will need because of on load the browser or application
// useRef i.e a reference hook  used to collect or select other hooks using in copy button
export default App;
