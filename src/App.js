import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Welcome from './page/Welcome';
import Invite from './page/Invite';
import CodeVerification from './page/CodeVerification';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AllowNotification from './page/AllowNotification';
import Home from './page/Home';
import Explore from './page/Explore';
import Profile from './page/Profile';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Welcome /> } />
        <Route exact path="/invite" element={<Invite /> } />
        <Route exact path="/codeVerification" element={<CodeVerification /> } />
        <Route exact path="/allowNotification" element={<AllowNotification /> } />
        <Route exact path="/home" element={<Home /> } />
        <Route exact path="/explore" element={<Explore /> } />
        <Route exact path="/profile" element={<Profile /> } />
      </Routes>
    </Router>
    </>
  );
}

export default App;
