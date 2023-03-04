import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './contextApi/AuthjContext';
import { ChatContextProvider } from './contextApi/ChatContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
        <ChatContextProvider>
                  <App />
       </ChatContextProvider>
  </AuthContextProvider>

);


