// const heading = React.createElement("h1", {id :"heading", xyz :"abc"}, "Hello world from React");   
//   console.log(heading);  
//   const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
  

  const parent = React.createElement("div", {id:"parent"},[
  React.createElement("div",{id:"child"},
  [
    React.createElement("h1", {}, "iam h1 tag"),

    React.createElement("h2", {}, "iam h2 tag"),

  ]
  ),
  React.createElement("div",{id:"child"},
  [
    React.createElement("h1", {}, "iam h1 tag"),

    React.createElement("h2", {}, "iam h2 tag"),

  ]
  )

]);

  console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);