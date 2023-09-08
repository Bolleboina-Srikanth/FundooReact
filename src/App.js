import logo from './logo.svg';
import './App.css';
 import RegisterationForm from './Pages/SignUp/RegisterationForm';
// import RegisterationForm from './Pages/SignUp/RegisterationForm';
import SignIn from './Pages/SignIn/signIn';
import Router from './Router/Router';
function App() {
  return (
    // <div className="App">
    //           <RegisterationForm/>      
    //             <SignIn/>         
    // </div>
    <div>
      <Router/>
    </div>
  );
}

export default App;
