import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/index';

function App() {
    return (
        <Router>
            <div className="w-full h-[100vh]">
                <Routes />
            </div>
        </Router>
    );
}

export default App;
