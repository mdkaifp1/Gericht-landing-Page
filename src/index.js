// import SubHeading from './SubHeading/SubHeading';
// import Newsletter from './Footer/Newsletter';
// import FooterOverlay from './Footer/FooterOverlay';
// import MenuItem from './Menuitem/MenuItem';
// import Navbar from './Navbar/Navbar';

// export {
//   SubHeading,
//   Newsletter,
//   FooterOverlay,
//   MenuItem,
//   Navbar,
// };

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css';

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
