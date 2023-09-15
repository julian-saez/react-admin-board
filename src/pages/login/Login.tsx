import { authService } from "../../services/auth.service";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../redux/states/user";
import { userResponse } from "../../interceptors/userResponse";
import PrivateRoutes from "../../models/routes/private_routes";

const LoginComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getUser = async () => {
        const auth = await authService();
        const result = userResponse( auth );
        dispatch( createUser( { ...result } ) );
        navigate(`/${PrivateRoutes.DASHBOARD}`, { replace: true });
    }

    const login = () => {
        try{
            getUser();
        }catch{}
    };

    return(
        <div>
            <h1>Log In</h1>
            <form>
                <fieldset>
                    <label>Email</label>
                    <InputText autoFocus={ true } />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <InputText />
                </fieldset>
            </form>

            <Button onClick={ login }>Login</Button>
        </div>
    )
};

export default LoginComponent;
