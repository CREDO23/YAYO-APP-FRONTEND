import Connexion from '../screens/Connexion';
import ResetPasswordScreen from '../screens/ResetPassword';
import { Route, Routes } from 'react-router-dom';

const Rout = () => {
    return (
        <Routes>
            <Route path="/" element={<Connexion />} />
            <Route
                path="/reset_password/:token"
                element={<ResetPasswordScreen />}
            />
        </Routes>
    );
};

export default Rout;
