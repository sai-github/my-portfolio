import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Function to execute once React App is ready
function handleReactAppReady() {
  const spinnerContainer = document.getElementById("spinner-container");
  const welcomeMsg = document.getElementById("welcome-msg");
  const proceedButton = document.getElementById("proceed-button");
  const rootElement = document.getElementById("root");

  // Show welcome msg
  if (welcomeMsg) {
    welcomeMsg.style.display = "initial";
    welcomeMsg.classList.add("subtitle", "mb-4");
  }
  // Show the proceed button
  if (proceedButton) {
    proceedButton.style.display = "initial";
    proceedButton.classList.add("button", "btn-primary");
  }

  // Handle proceed button click
  if (proceedButton && spinnerContainer && rootElement) {
    proceedButton.addEventListener("click", () => {
      // Hide spinner container
      spinnerContainer.style.display = "none";
      // Show React App
      rootElement.style.display = "block";
      // Tell React that content is now visible
      window.dispatchEvent(new Event("react-content-visible"));
    });
  }
}

// Use window.onload to call the function when all assets are fully loaded
window.onload = handleReactAppReady;
