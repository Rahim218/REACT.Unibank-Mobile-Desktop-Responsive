import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import './assets/css/main.css'

const allBranchAPIKey = 'AIzaSyD1k6_eq-C7ltxMMUo6cIyBTY-klnTEH3s';
const saturdayBranchAPIKey = 'AIzaSyCMMs1xFU03GbO_w7mizuxvmep7rKsIcj0';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App allBranchAPIKey={allBranchAPIKey} saturdayBranchAPIKey={saturdayBranchAPIKey} />
);


