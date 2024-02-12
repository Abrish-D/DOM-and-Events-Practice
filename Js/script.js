// Question 1
// var obj = document.getElementById("sample1");//1.1
// console.log(obj);//1.2
// console.log(document.getElementById("sample1").textContent);//1.3

// Question 2
// console.log(document.getElementById("techCompanies"));
// console.log(document.querySelector("#techCompanies"));
// console.log(document.querySelectorAll("li").length);
// console.log(document.getElementsByClassName("red"));
// console.log(document.querySelectorAll(".red"));
// console.log(document.getElementById("hello").lastElementChild);
// console.log(document.getElementById("hello").lastElementChild.className = "blue");
// console.log(document.getElementById("techCompanies").appendChild(document.getElementsByClassName("blue")));
// var company = document.createElement("div");
// var num = document.getElementsByClassName("blue").length;
// console.log(company.innerHTML=num);

//question 3
// function add_bg(){
//   document.body.style.backgroundColor = "#99ecff";
// }
// function remove_bg(){
//   document.body.style.backgroundColor = "#fff ";
// }

//Question 4
function add(){
  var node = document.getElementsByTagName("input");
  var num1 = node.item[0].textContent;
  
  var num2 = node.item[1].textContent;
  var sum;
  if(!(isNaN(num1)|| isNaN(num2)))
  {
   sum = num1 + num2;
   console.log(sum);
  }
  
}