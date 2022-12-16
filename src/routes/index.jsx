import Connexion from '../screens/connexion';
import Password from '../screens/Password/index';
import ResetPassword from '../screens/Password/ResetPassword';
import ForgotPassword from '../screens/Password/ForgotPassword';
import Singin from '../screens/connexion/Singin';
import { Route, Routes } from 'react-router-dom';

export default function (){
    return (
        <Routes>
            <Route path="/" element={<Connexion />}>
                <Route path="" element={<Singin />} />
            </Route>
            <Route path="/password/" element={<Password />}>
                <Route path="forgot" element={<ForgotPassword />} />
                <Route path="reset/:token" element={<ResetPassword />} />
            </Route>
        </Routes>
    );
}