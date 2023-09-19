import { useSelector } from "react-redux";
import { AppStore } from "../redux/store";
import NotificationBell from "../atoms/icons/NotificationBell";
import Logo from '../../src/assets/logo.svg';
import { Menu } from 'primereact/menu';
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { resetUser } from "../redux/states/user";
import LogoutButton from "../atoms/LogoutButton";

const LogoutTemplateButton = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch( resetUser() );
    };
    return (
        <LogoutButton handleLogout={ handleLogout } />
    )
}

const itemsNots = [
    {
        id: 1,
        label: 'Nueva modificacion',
    },
    {
        id: 2,
        label: 'Producto creado',
    }
]


const items = [
    {
        id: 1,
        label: 'Perfil',
    },
    {
        id: 2,
        label: 'Configuración',
    },
    {
        id: 3,
        template: LogoutTemplateButton
    }
]

const HeaderComponent = () => {
    const menuNotificationRef = useRef();
    const menuProfileRef = useRef();
    const userState = useSelector( (store: AppStore) => store.user );
    return(
        <header>
            <div>
                <img src={ Logo } alt="" />
            </div>
            <div id="header_nav_items">
                <button onClick={(e) => menuNotificationRef.current.toggle(e)}>
                    <NotificationBell />
                </button>
                <Menu model={itemsNots} popup ref={menuNotificationRef} id="popup_menu_right" popupAlignment="right" />

                <button id="nav_profile_btn" onClick={(e) => menuProfileRef.current.toggle(e)}>
                    <img id="avatar_profile" src={ userState?.avatar } />
                    <div id="nav_profile_menu">
                        <span className="nav_username">{ userState.name }</span>
                        <span className="nav_role">{ userState.role }</span>
                    </div>
                </button>
                <Menu model={items} popup ref={menuProfileRef} id="popup_menu_right" popupAlignment="right" />
            </div>
        </header>
    )
}

export default HeaderComponent;
