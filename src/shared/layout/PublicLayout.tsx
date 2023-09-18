import SidebarComponent from "../../components/Sidebar/Sidebar";
import HeaderComponent from "../../components/header";

interface Props {
    children: JSX.Element[] | JSX.Element;
}

const PublicLayout = ( { children }: Props ) => (
    <div id="public_layout">
        <HeaderComponent />
        <SidebarComponent />
        <div className="children_components">
            { children }
        </div>
    </div>
);

export default PublicLayout;
