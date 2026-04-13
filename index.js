const input = document.querySelector("#text");
const btn = document.querySelector("#btn");
const task = document.querySelector("#task");
const one = document.querySelector("#one");
const container = document.querySelector("#container");
const two = document.querySelector("#two");


btn.addEventListener("click", ()=>{
  value = input.value;

  if(!value) return;

  let div = document.createElement("div");
  div.innerText = value;
  task.appendChild(div);
  
  let button = document.createElement("button");
  button.innerText = " ❌";
  button.addEventListener("click", ()=>{
    div.remove();
  });

  div.appendChild(button);
  
  one.style.display="flex";
  one.style.flexDirection="column";
  one.style.justifyContent="center";
  one.style.alignItems="center";
  one.style.border = "5px solid black";
  one.style.backgroundColor="pink";
  one.style.width="500px";
  one.style.borderRadius = "10px";
  
  container.style.display = "flex";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
  container.style.height = "100vh";
  
  div.style.color="white";
  div.style.borderRadius = "5px";
  div.style.alignItems = "center";
  div.style.display = "flex";
  div.style.width = "fit-content";
  div.style.maxWidth = "70%";
  div.style.justifyContent = "space-between";
  div.style.backgroundColor = "green";
  div.style.padding = "10px";
  div.style.marginTop = "5px";
  div.style.marginLeft = "auto";

  two.style.color = "red";

  
  input.value="";
  
})


