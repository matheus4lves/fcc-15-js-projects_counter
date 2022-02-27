const value = document.querySelector("#value");
// DRY principle
/* If you can use querySelectAll to add an event listener for all buttons,
why wouldn't you do that? */
const btns = document.querySelectorAll(".btn");

let count = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    /* When one of the buttons is clicked, get the classes that style it */
    const styles = e.currentTarget.classList;
    // Change the value of count
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    // Update the value of count in the doc
    value.textContent = count;
  });
});
