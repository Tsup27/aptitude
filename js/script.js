function checkAnswer(e) {
  let parent = e.target.parentElement;
  var inputElements = parent.querySelectorAll("input[type=radio]");
  let explanation = parent.querySelector("p.hidden");
  if (explanation) {
    explanation.classList.remove("hidden");
  }
  // console.log(parent)
  for (element of inputElements) {
    element.nextElementSibling.className = "";
    if (element.checked == true) {
      element.nextElementSibling.className = "wrong";
    }
    if (element.value == "true") {
      console.log("here");
      console.log(element.nextElementSibling);
      element.nextElementSibling.className = "correct";
    }
  }
}
