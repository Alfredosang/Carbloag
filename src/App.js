// import Hero from './components/Hero';
import './App.css';
import Homepage from './components/pages/Homepage';
import { Routes,Route } from 'react-router-dom'
import Details from './components/pages/Details';

function App() {
  
  const post =[
    {
        id:1,
        topic:'Why people love Benz',
        pix : 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
        id:2,
        topic:'The fate farrari in Africa',
        pix : 'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
        id:3,
        topic:'G wagon, the best choice for that road trip. ',
        pix :'https://images.unsplash.com/photo-1590079287659-96668805ef23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGclMjB3YWdvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id:4,
        topic:'G wagon, the best choice for that road trip. ',
        pix :'https://images.unsplash.com/photo-1575650681837-c0ca3b1e7275?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxhbWJvcmdoaW5pJTIwdXJ1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
    {
        id:5,
        topic:'G wagon, the best choice for that road trip. ',
        pix :'https://images.unsplash.com/photo-1558403871-bb6e8113a32e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d3JhbmdsZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
        id:6,
        topic:'G wagon, the best choice for that road trip. ',
        pix :'https://images.unsplash.com/photo-1597775689895-de89b9666f9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBhZ2FuaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
    },
  ]
  return (
    
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage post={post} />} />
        <Route path='/details/:id' element={<Details post={post}/>} />
      </Routes>
   
    </div>
    
  );
}

export default App;
