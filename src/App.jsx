import { useRef } from 'react'
import './App.css'

function App() {
  const emailRef = useRef(null);
  const btnRef = useRef(null);

const  handlfocus = () =>{
  console.log(emailRef);
  console.log(btnRef);
  emailRef.current.focus();
  emailRef.current.style.backgroundColor = "red";
  emailRef.current.placeholder = "done";

  console.log(emailRef.current.value)

  
}
 

  return (
    <>
      <div className='mt-5'>
        <input type='email' placeholder='enter email'  ref={emailRef}/>
        <button onClick={handlfocus} ref={btnRef} >set Focus</button>


        
      </div>
      
    </>
  )
}

export default App
