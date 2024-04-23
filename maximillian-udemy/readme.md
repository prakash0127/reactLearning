# section-1

1. Introduction about the course

2. React.js is a library

# why we need to use it

A js libaray and user exprence, load page without load the page

- writing complex js code quickly becomes cumbersome
- complex js code quickly becomes error-prone
- if you creating cpomples code UI it will be very hard to write code and maintain the code may be complex and hard

React is extremely popular
It makes building complex, interactive UIs a breeze
It's powerful & flexible
It has a very active and versatile ecosystem

# core feature

Components, JSX & Props
State
Hooks (e.g., useEffect())
Dynamic rendering

# Related resouces

Official web page (react.dev)
Next.js (Fullstack framework)
React Native (build native mobile apps with React)

3. React vs JS

Vanilla JavaScript requires imperative programming
Imperative Programming: You define all the steps needed to achieve a result
React on the other hand embraces declarative programming
With React, you define the goal and React figures out how to get there

4. edit the example that maxi has provided

- React js - https://codesandbox.io/p/sandbox/react-vs-vanilla-demo-uc08fv?file=%2Fsrc%2FApp.js%3A24%2C32
- vanilla js - https://codesandbox.io/p/sandbox/vanilla-js-demo-6049kj?file=%2Findex.js

5. About the course

- how ypu can cover the course and what you skip if you are already know about some topics

6. the two way

- you can go through the lecture
  like lecture by lecture

- summary path - that you can go through the courese if you know the resct before or can say quick path
  summary section you can cover as i n 3-4 hours with call concepts
  summary course - https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/35734460#overview

7. resources from git hub
   -- https://github.com/academind/react-complete-guide-course-resources

- do practice!
- watch again and again if you have not understand
- Meet the prerequisites

8. Join our online Learning comminity

- Discord: https://academind.com/community/

9. Creating React project

- react.new into the browser and this is for codesandbox
- locally using IDE vs-code and install the node and other required things
- vite using we can use to create projects, need to know the step to create the project
- create-react-app can also use to create the projects

10. why we need the setup for the react code

- we can't write the html code inside the js file
- tp code os transfered & optimised

# section-2 Javascript Referesher

11. Module Inroduction

- Module of this section about the js referesher

12. starting point

      <li>Base Syntax & Rules</li>
      <li>Variables, Values & Operators</li>
      <li>Functions</li>
      <li>Objects</li>
      <li>Arrays</li>
      <li>Control Structures</li>
      <li>Browser APIs & The DOM</li>
      <li>Essential Features Used By React</li>
      <li>Tricky Parts</li>

13. Adding JavaScript To A Page & How React Projects Differ

- js can we executed in many way, In the browser, on tany computer (server-side code), on mobile Devices
- adding js code in
  ->Between <script> tag
  -> via <script src ="path of the file"> import
  inside the script tag you add an attribute that is "differ" to make sure the script will be executed after the rest of the html read and parse mena sso the js file execute after the body element parse
  -> One more we can do or add in the script tag that is type="Module"
  which sets it to Module, make sure the file treated as a js Module it unlock one feture that is we can import js inside another file

14. in index.html file we have not added any script tags
    in body but our project is working using js code
    because of the react js
    - react add the file behind it
      https://codesandbox.io/p/sandbox/react-vs-vanilla-demo-uc08fv?file=%2Fpublic%2Findex.html%3A27%2C12

- we use a syntax of js called JSX javascript extensioin or xml
  -- also need to install the node js so it work behind the schne

15. import and export

- to make your code mainatanable, we need to use export and import
- to make one component to make avaible to other componet
- eg for javascript, export let greet = "Hello!"
  to use other file import {greet} from "./file-path.js"

and for in javascript/vanilla js code need to add type="Module" for it
but not in react component

can do as well like
export default "Hello" if you are adding default with export no need to define like varibale
and we can do only one default export in a file if you try to add more than one it will given an error
means using defalut direct export the value

- if it is defalut
  you can directly import the value with curly bracket lik "hello"

  import Hello from "./path";
  more than one export we can do
  import {greet, like, share } like this, using comma separated
  want to import like all the export so eg

  import \* as greet(as a object) from ".path-js-file";

  you can define your own alias like

import {greet, like as share } like this

16. Revisiting Variables & Values

String - "prakash" in single or double quote
number - 10, 2
Boolean- true, false
Null & undefined - null(there is no value), undefined (the default value)
Objects - {key-property}

"Hello" - value(type : string)

const greet = "Hello";
you cant change it further
greet = "Hi!" // give an error

let say = "Hello";
say = " hi!!"; this will be fine
dont use var keyword as suggestion

17. Revisting Operators

    console.log(10 + 5); it will calculate the value and give 15

console.log("hello" + "world"); it give the concatination of the values i.e helloworld

triple equal give the euallity check with tyoe of an value both and give bollean i.e true or false

console.log(5 === 5); true but with doulbe equal
ity doesnt check the typeof instead it do the type conversion to calculate it
