
import './styles/global.css'
import {Routes , Route} from 'react-router-dom'
import Landing from './pages/landing/Landing'
import Signup from './pages/auth/signup/Signup';
import ProtectedRoute from './pages/auth/ProtectedRoute'
import RoleSelect from './pages/roleselectPage/RoleSelect';
import Login from './pages/auth/loginPage/Login';
import FarmerHomePage from './pages/farmer/farmerDasboard/farmerHomePage/FarmerHome';
import ResourcePage from './pages/farmer/resource/Resource';
import ConsultVet from './pages/farmer/consultVet/consultVeternerian';
import News from './pages/farmer/newsEvent/NewsEvent';

function App(){
    return(

        <div>
            <Routes >
                <Route path='/' element={<Landing /> } />
                <Route path='/login' element={ <Login /> } />
                <Route path='/signup' element={ <Signup /> } />
                <Route path='/roleSelect' element={ <RoleSelect /> } />
                <Route path='/resource' element={ <ResourcePage /> } />
                <Route path='/consultVet' element={ <ConsultVet /> } />
                <Route path='/news' element={<News /> } />
                <Route
                path='/farmerHome'
                element = {

                        <FarmerHomePage />

                }
                />
            </Routes>

        </div>
    )
}
export default App;