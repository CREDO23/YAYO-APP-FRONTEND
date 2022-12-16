import { Outlet } from 'react-router-dom';

export default function() {
    return (
        <div className="w-full flex h-full">
            <Outlet />
        </div>
    );
}


