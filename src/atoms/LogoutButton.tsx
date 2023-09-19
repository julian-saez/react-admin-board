interface Props {
    handleLogout: () => void;
}

const LogoutButton = ( { handleLogout }: Props ) => (
    <li className="p-menuitem">
        <a className="logout p-menuitem-link" onClick={ handleLogout } href="#">Cerrar Sesión</a>
    </li>
)

export default LogoutButton;
