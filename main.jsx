import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApolloProvider } from '@apollo/client'; 
import Duce from './Duce.jsx'
import Card from './card.jsx'
import client from './grapg.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <><App />


   <ApolloProvider client={client}>
    <Card />
  </ApolloProvider>,
  
   <Duce/>
  
   </>

  </React.StrictMode>,
)
