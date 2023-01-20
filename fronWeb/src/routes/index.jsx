import { Routes, Route } from 'react-router-dom';
import Login from '../pages/authentication/Login';
import Register from '../pages/authentication/Register';
import DetailsEnchere from '../pages/Historique/Detailsenchere';
import Menu from '../pages/Historique/Menu';
import OtherAuction from '../pages/Historique/OtherAuction';
import OwnAuction from '../pages/Historique/OwnAuction';
import Home from '../pages/Home/Home';
import Main from '../pages/Main';

// project import

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/inscription" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/ownauction" element={<OwnAuction />} />
            <Route path="/otherauction" element={<OtherAuction />} />
            <Route path="/detailsenchere" element={<DetailsEnchere />} />
        </Routes>
    );
}
