let page = document.querySelector(".page");
let thnxPage = document.querySelector(".page-thnx");
let button = document.querySelector("button");
let lis = document.querySelectorAll("li");
let value = "";
let spanValue = document.querySelector(".page-thnx > p span");

lis.forEach((li) => {
  li.addEventListener("click", () => {
    lis.forEach((li) => {
      li.classList.remove("clicked");
    });
    li.classList.add("clicked");
    value = li.innerHTML;
  });
});

button.onclick = function () {
  if (value === "") {
    return;
  }
  page.classList.add("hidden");
  thnxPage.classList.add("show");
  spanValue.innerHTML = value;
};
