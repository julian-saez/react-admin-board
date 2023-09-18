import { useSelector } from "react-redux";
import { AppStore } from "../redux/store";
import NotificationBell from "../atoms/icons/NotificationBell";

const HeaderComponent = () => {
    const userState = useSelector( (store: AppStore) => store.user );
    return(
        <header>
            <div>
                Flashboard
            </div>
            <div id="header_nav_items">
                <button>
                    <NotificationBell />
                </button>
                <button>
                    <img id="avatar_profile" src={ userState?.avatar } />
                </button>
            </div>
        </header>
    )
}

export default HeaderComponent;
