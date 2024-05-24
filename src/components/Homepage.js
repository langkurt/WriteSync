import React from "react";
import {useAuth} from "./AuthContext";


/**
 * Just a generic homepage to test a protect component behind auth
 * */

const HomePage = () => {
    const {user} = useAuth();

    return (
        <div>
            {user ? <h1>Welcome, {user.email}</h1> : <h1>Loading...</h1>}
        </div>
    );
};

export default HomePage;
