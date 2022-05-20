import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./app/App";
import { store } from "./app/store";

import Flastat from "./pages/Flastat";
import Flebloc from "./pages/Flebloc";
import Floddic from "./pages/Floddic";
import Home from "./pages/Home";

render(<Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<App />} >
              <Route index element={<Home />} />
              <Route path="/Flastat" element={<Flastat />} />
              <Route path="/Flebloc" element={<Flebloc />} />
              <Route path="/Floddic" element={<Floddic />} />
            </Route>

          </Routes>
        </Router>
      </Provider>, document.getElementById('root'));
