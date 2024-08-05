import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { generateToken,onMessageListener } from './firebase.config';
import { messaging } from './firebase.config';
import { onMessage } from 'firebase/messaging';
import Notification from './components/Notification';
function App() {
useEffect(()=>{
  generateToken();
  onMessageListener()
  .then((payload) => {
   console.log("dsdsdsdsd")
  })
  .catch((err) => console.log("failed: ", err));

},[]);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      
    </div>
  );
}

export default App;
