import ButtonNavItem from "../../atoms/ButtonNavItem";
import { navSidebarItems } from "../../atoms/nav-sidebar-items";


const SidebarComponent = () => {
    return(
        <div id="sidebar">
            <nav id="navigation_sidebar">
                {
                    navSidebarItems.map(el => {
                        return (
                            <ButtonNavItem icon={ el.icon } navigateTo={ el.navigateTo } />
                        )
                    })
                }
            </nav>
        </div>
    )
}

export default SidebarComponent;
