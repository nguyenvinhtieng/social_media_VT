import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage'
import Profile from './pages/Profile/Profile'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import PrivateRoute from './customRoute/PrivateRoute'
import PublicRoute from './customRoute/PublicRoute'
import checkAuthentication from './utils/checkAuthentication'
function App() {
  const isAuthenticated = checkAuthentication();
  return (
    <Router>
      <Routes>
        <PrivateRoute exact path='/' isAuthenticated={isAuthenticated} >
          <HomePage />
        </PrivateRoute>
        <PrivateRoute exact path='/me' isAuthenticated={isAuthenticated}>
          <Profile />
        </PrivateRoute>
        <PublicRoute path="/login" isAuthenticated={isAuthenticated}>
          <Login />
        </PublicRoute>
        <PublicRoute path="/login" isAuthenticated={isAuthenticated}>
          <Register />
        </PublicRoute>
      </Routes>
    </Router>
  );
}

export default App;
