import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container!);

root.render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);

// ReactDOM.render(
//     <StrictMode>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </StrictMode>,
//     document.getElementById('app')
// );
