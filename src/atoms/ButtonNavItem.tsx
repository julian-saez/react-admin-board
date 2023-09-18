import { useState } from "react";
import { Navigate } from "react-router-dom";

interface Props {
    icon: ( color: string | undefined ) => JSX.Element;
    navigateTo: string;
}

const ButtonNavItem = ({ icon, navigateTo }: Props) => {
    const [ color, setColorHover ] = useState<string | undefined>(undefined);
    const navigate = () => {
        <Navigate to={ navigateTo } replace={ true } />
    };

    return (
        <button className="btn-nav-items" onClick={ navigate } onMouseLeave={ () => setColorHover(undefined) } onMouseOver={ () => setColorHover('white') }>
            { icon(color) }
        </button>
    )
}

export default ButtonNavItem;
