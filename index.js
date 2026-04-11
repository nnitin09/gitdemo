const input = document.querySelector("#text");
const btn = document.querySelector("#btn");
const task = document.querySelector("#task");
const one = document.querySelector("#one");

btn.addEventListener("click", ()=>{
  value = input.value;

  if(!value) return;

  let li = document.createElement("li");
  li.innerText = value;
  task.appendChild(li);
  
  let button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", ()=>{
    li.remove();
  });

  li.appendChild(button);
  
  one.style.display="flex";
  one.style.flexDirection="column";
  one.style.justifyContent="center";
  one.style.alignItems="center";
  one.style.border = "5px solid black";
  one.style.backgroundColor="pink";
  one.style.width="500px";
  
  
})