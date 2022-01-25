import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div id="recursion">
Result is: 
</div>
`;

function ReverseString(str) {
  if (str === "") {
    return "";
  }

  return ReverseString(str.substring(1, str.length)) + str.substring(0, 1);
}

document.getElementById("recursion").innerHTML = ReverseString(
  "first practice worked"
);
