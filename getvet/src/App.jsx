
import './styles/global.css'
import Signup from './pages/auth/signup/Signup';
import Landing from './pages/landing/Landing'
import Login from './pages/auth/login/login';
import RoleSelect from './pages/roleSelect/RoleSelect';
function App(){
    return(

        <div>
        {/* <Landing /> */}
        {/* <Signup />  */}
        {/* <Login /> */}
        <RoleSelect />
        </div>
    )
}
export default App;