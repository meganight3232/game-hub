const PASSWORD = "school";

function checkAccess() {
  const loggedIn = localStorage.getItem("siteAccess") === "granted";
  const overlay = document.getElementById("loginOverlay");

  if (!loggedIn && overlay) {
    overlay.classList.add("active");
  }
}

function login() {
  const input = document.getElementById("passwordInput");
  const message = document.getElementById("loginMessage");

  if (!input || !message) return;

  if (input.value === PASSWORD) {
    localStorage.setItem("siteAccess", "granted");
    message.textContent = "";
    const overlay = document.getElementById("loginOverlay");
    if (overlay) overlay.classList.remove("active");
  } else {
    message.textContent = "Wrong password.";
  }
}

function logout() {
  localStorage.removeItem("siteAccess");
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
  checkAccess();

  const loginButton = document.getElementById("loginButton");
  const logoutButton = document.getElementById("logoutButton");
  const passwordInput = document.getElementById("passwordInput");

  if (loginButton) {
    loginButton.addEventListener("click", login);
  }

  if (logoutButton) {
    logoutButton.addEventListener("click", logout);
  }

  if (passwordInput) {
    passwordInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        login();
      }
    });
  }
});
