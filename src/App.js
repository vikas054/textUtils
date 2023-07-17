import logo from './logo.svg';
import './App.css';


let name ="Vikas";
function App() {
  return (
    // <>
    // <h1>This is me</h1>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with vikas
    //     </a>
    //   </header>
    // </div>
    // </>


    // <div className="blank">
    //   Lovely
    // </div>
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <img src = "" alt=""></img>
     <div className="container">
       <h1>{name}</h1>  

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, quis alias! Esse at eveniet ipsum libero repellendus laboriosam officiis debitis voluptate. Facilis aperiam quisquam nesciunt itaque eos doloremque neque optio.
      </p>
      </div> 
    </>

  );
}

export default App;
