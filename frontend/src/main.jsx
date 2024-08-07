import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
import {RecoilRoot} from 'recoil'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RecoilRoot>
    <App />
    <Toaster/>
    </RecoilRoot>
  
)
