import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import app from "../../firebase/firebase.config";


const Login = () => {

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const [googleData, setGoogleData] = useState([]);


    const handleGooglePop = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const googleLogged = result.user;
                console.log(googleLogged);
                setGoogleData(googleLogged);

            })
            .catch(error => {
                console.log('error is :', error.message);
            });
    };


    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                setGoogleData(null);
            })
            .catch(error => {
                console.log('error', error.message);
            });
    };



    return (
        <div>
            <div>
                {googleData ? <button onClick={handleSignOut}>Signout</button> : <button onClick={handleGooglePop}>Google</button>}
            </div>

            <div>
                <h4>Name: {googleData?.displayName}</h4>
                <img src={googleData?.photoURL} alt="" />
            </div>


        </div>
    );
};

export default Login;