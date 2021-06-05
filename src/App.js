import React from 'react';
import './App.scss';
import {
	BrowserRouter as Router, useHistory
} from 'react-router-dom';
import Routes from "./routes"
import {Provider} from "react-redux"
import { ToastProvider, useToasts } from 'react-toast-notifications'
// import Segment from "react-segment"
// analysis and tracking
import analytics from "./modules/analytics"

// SEGMENT INITIALIZED
const App = () => {  

  return (
      <ToastProvider>
          <Router>
              <Routes />
          </Router>
      </ToastProvider>
  );
}

export default App;
