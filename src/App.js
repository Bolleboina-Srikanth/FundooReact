import logo from './logo.svg';
import './App.css';
 import RegisterationForm from './Pages/SignUp/RegisterationForm';
// import RegisterationForm from './Pages/SignUp/RegisterationForm';
import SignIn from './Pages/SignIn/signIn';

function App() {
  return (
    <div className="App">
              <RegisterationForm/>      
                <SignIn/>         
    </div>
  );
}

export default App;
