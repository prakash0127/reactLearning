const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);

// and it takes three parameters, first one is the element or tag here h1
// second is a Object
// third one will take the text what you want to print

// now for we need to append in root so our heading we need to put in root
// for that we need to create the root
// creating a element is from react that is core part
// and for root we need to use reactDOM means to append the element to our document
// so we need a root or we can say a tree to put to our document
// and now we have created a root for our react libarary and inside it we pass
// the place where we want to place our root
// root is the place where all the react code will run, our code will render inside the root
const root = ReactDOM.createRoot(document.getElementById("root"));
// now we need to render and inside we pass the heading
root.render(heading);
// react is doing all this things means appending the heading to div id root
// we can also write our code separately and attached to this index.html file

// now we have written the same things and it works the same

// the empty object in the heading we use to pass the attributes for the elemnets
//like we can pass id:"heading" and now we can see in the browser console and more like xyz:"abc" and we xan see that as well in the console

// now we want to add some css
// let's create index.css

// if you will console.log the heading
console.log(heading); // it is an react elment and js is Object
// what it will print it will print an object and its a react element
// waht is react element its is a js object

// added our css file index.css and #heading {color:red} and added to our index.html
// and our text in color in red

//like this
// {$$typeof: Symbol(react.element), type: 'h1', key: null, ref: null, props: {…}, …}
// $$typeof:Symbol(react.element)
// key:null
// props : {id: 'heading', children: 'Hello World from React'}
// ref: null
// type:"h1"
// _owner :null
// _store: {validated: false}
// _self:null
// _source:null
// [[Prototype]]:Object

// props is to containe attribute for now

//here react.render (heading );

//here react elment we are passing means js Objects
// it is converting in js object

// this render method is basicaly converting this object into h1 tag and attaching to root id

// in our html we have nested elements and how do we create it in react

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "hello world using parent id  ")
//   )
// );

// root.render(parent);

// is n't it complex to create it
// and again this parent is not an element it is an Object

// want to add a sibling to h1 lik h1 and h2 in div-child id

// you need to pass in array in the last h1 createElement like

// [React.createElement("h1", {}, "h1 tag "), React.createElement("h2", {}, "h2 tag ")]

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "h1 tag "),
//     React.createElement("h2", {}, "h2 tag "),
//   ])
// );

// root.render(parent);

// and it will work and it also give an warning for key for now don't worry about it will see later

// suppose we again want to create an more complesx structure like
{
  /* <div id="parent">
  <div id="child1">
    <h1> h1 child-1</h1>
    <h2> h2 child-1</h2>
  </div>
  <div id="child2">
    <h1> h1 child-2</h1>
    <h2> h2 child-2</h2>
  </div>
</div>; */
}

//for that we need to pass an array of above as well '

const parent = React.createElement(
  "div",
  { id: "parent" },

  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "h1 child-1 tag "),
      React.createElement("h2", {}, "h2 child-1 tag "),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "h1 child-2 tag "),
      React.createElement("h2", {}, "h2 child-2 tag "),
    ]),
  ]
);

root.render(parent);

// it is more complex to see

// for this complex React come with JSX and it will very easy to write and see

//part-05

// in our index.htmk file the order we have added our file i.e react and reactDOM js file
// it will matter if we write opposite
// and our external js file write above the react one

// it will through an error and will display blank so the order of js file matters

// and what if we remove crossorigin from the script

// suppose if we have in the div id root already have some thing like Hello raect devs
// and then you render the parent that we created above what will it render now

// the content will be replace by the parent values  not appended most important

// suppose if we have h1 tag above the div of id root tag

// and what if h1 below the root

// and will remain the same and print in the browser and this is why react is library
// and remain all the content will be same

// React can work at the small portion of the page like header, in sidebar, footer, etc it will work

// check the crossorigin things once
