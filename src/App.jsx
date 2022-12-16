import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/index';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <Router>
            <div className="w-full h-[100vh]">
                <Routes />
                <ToastContainer/>
            </div>
        </Router>
    );
}

export default App;
