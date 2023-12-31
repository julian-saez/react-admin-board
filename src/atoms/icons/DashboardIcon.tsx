import { IIconsProps } from "../../models/icons";

const DashboardIcon = ( { fill }: IIconsProps ) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={ fill ?? '#9A9AB0' } xmlns="http://www.w3.org/2000/svg">
        <path d="M3 11H11V3H3V11ZM5 5H9V9H5V5Z" fill={ fill ?? '#9A9AB0' }/>
        <path d="M3 21H11V13H3V21ZM5 15H9V19H5V15Z" fill={ fill ?? '#9A9AB0' }/>
        <path d="M13 21H21V13H13V21ZM15 15H19V19H15V15Z" fill={ fill ?? '#9A9AB0' }/>
        <path d="M13 3V11H21V3H13ZM19 9H15V5H19V9Z" fill={ fill ?? '#9A9AB0' }/>
    </svg>
);

export default DashboardIcon;
