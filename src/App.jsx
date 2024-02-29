import { useState } from "react";
import './App.css'
import QRCode from "react-qr-code";
function App() {

   const [content,setContent]=useState('');
    const [isvisible,setIsvisible]=useState(false);

    const GenerateQr=()=>{
      if(!content){
        return 
      }
      setIsvisible(true);
    }
  return (
  <>
  <div className="container">
    <div>
      <input type="text" 
      placeholder="Enter Url"
      onChange={(e)=>setContent(e.target.value)}
      />
      <button onClick={GenerateQr}>Generate</button>
    </div>

    <div>
      {
        isvisible && <QRCode 
        value={content}
        size={256}
        />
      }
    </div>
  </div>
  </>
  );
}

export default App;
