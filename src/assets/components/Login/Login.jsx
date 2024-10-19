import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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


    return (
        <div>
            <div>
                <button onClick={handleGooglePop}>Google</button>
                <button>Github</button>
            </div>

            <div>
                <h4>Name: {googleData.displayName}</h4>
            </div>


        </div>
    );
};

export default Login;