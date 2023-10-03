//CS10 GRADE CALCULATOR

//BTN EVENT LISTENER
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //INPUT
  let client1 = +document.getElementById("client1-in").value;
  let sp1 = +document.getElementById("sp1-in").value;
  let sp2 = +document.getElementById("sp2-in").value;
  let client2 = +document.getElementById("client2-in").value;
  let projectA = +document.getElementById("projectA-in").value;

  //PROCESS
  let total = (client1 + sp1 + sp2 + client2 + projectA) / 5;

  //OUTPUT
  document.getElementById("output").innerHTML = total;
}
