import logo from './resources/logo.svg';
import {BrowserRouter as Router, Navigate, Route, Routes, useLocation} from 'react-router-dom'
import './resources/App.css';
import {auth} from "./firebase";
import {useAuthState} from 'react-firebase-hooks/auth';
import Auth from "./components/Auth";

const App = () => {

    return (
        <Router>
            <Routes>
                <Route exact path="/">
                    element={
                    <RequireAuth>
                        <App2/>
                    </RequireAuth>
                }
                </Route>
                <Route exact path="/login">
                    <Auth/>
                </Route>
            </Routes>
        </Router>
    );
};

function RequireAuth({children}: { children: JSX.Element }) {

    // firebase's auth state hook to manage user authentication
    const [user] = useAuthState(auth);

    let location = useLocation();

    if (!user) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{from: location}} replace/>;
    }

    return children;
}

function App2() {
    return (<div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    </div>);
}

export default App;
