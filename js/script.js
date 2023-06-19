const linkForm = document.getElementById("link-form");
const input = document.getElementById("link-input");

const errMsg = document.getElementById("link-err");

function isValidURL(text) {
  // Regular expression pattern for URL validation
  var pattern = new RegExp(
    "^https?:\\/\\/[a-z0-9-]+(\\.[a-z0-9-]+)+([/?].*)?$",
    "i"
  );

  // Check if the input text matches the pattern
  return pattern.test(text);
}

linkForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submit");
  if (input.value === "") {
    errMsg.innerHTML = "Please enter the Link";
  } else if (!isValidURL(input.value)) {
    errMsg.innerHTML = "Please provide valid Url";
  } else {
    errMsg.innerHTML = "";
    input.value = "";
    alert("success");
  }
});

// humbergur menu bar

const navBar = document.getElementById("navBar");
const mobileMenu = document.getElementById("mobileMenu");

const closeBtn = document.getElementById("closeBtn");
const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  navBar.classList.add("hidden");
  mobileMenu.classList.remove("hidden");
  mobileMenu.classList.add("flex");
});

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  navBar.classList.remove("hidden");
  mobileMenu.classList.remove("flex");
  mobileMenu.classList.add("hidden");
});
