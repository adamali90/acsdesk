
import React from "react";
import { createRoot } from "react-dom/client";
import App from './App';
import "./index.css";

const container = document.getElementById("target");
const root = createRoot(container);

root.render(
    <React.Fragment>
      
          <App></App>

    </React.Fragment>
);

