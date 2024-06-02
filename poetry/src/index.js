import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// App.js vagy index.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faCog, faSpinner } from '@fortawesome/free-solid-svg-icons';

library.add(faCoffee, faCog, faSpinner);



const root = createRoot(document.getElementById('root'));
root.render(<App />);
