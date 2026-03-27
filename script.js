const PASSWORD = "school";

function lockSiteIfNeeded() {
  const overlay = document.getElementById("loginOverlay");
  const access = localStorage.getItem("novaHubAccess");

  if (overlay && access !== "granted") {
    overlay.classList.add("active");
  }
}

function unlockSite() {
  const input = document.getElementById("passwordInput");
  const message = document.getElementById("loginMessage");
  const overlay = document.getElementById("loginOverlay");

  if (!input || !message || !overlay) return;

  if (input.value === PASSWORD) {
    localStorage.setItem("novaHubAccess", "granted");
    overlay.classList.remove("active");
    message.textContent = "";
    input.value = "";
  } else {
    message.textContent = "Incorrect password.";
  }
}

function logoutSite() {
  localStorage.removeItem("novaHubAccess");
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
  lockSiteIfNeeded();

  const loginButton = document.getElementById("loginButton");
  const logoutButton = document.getElementById("logoutButton");
  const passwordInput = document.getElementById("passwordInput");

  if (loginButton) {
    loginButton.addEventListener("click", unlockSite);
  }

  if (logoutButton) {
    logoutButton.addEventListener("click", logoutSite);
  }

  if (passwordInput) {
    passwordInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        unlockSite();
      }
    });
  }
});
