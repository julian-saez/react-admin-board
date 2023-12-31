import { IIconsProps } from "../../models/icons";

const ProductsIcon = ( { fill }: IIconsProps ) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={ fill ?? '#9A9AB0' } xmlns="http://www.w3.org/2000/svg">
        <path d="M15 3H3V21H21V3H15ZM19 5V7H15V5H19ZM13 5V10H11V5H13ZM9 5V7H5V5H9ZM5 19V9H9V12H15V9H19V19H5Z" fill={ fill ?? '#9A9AB0' }/>
        <path d="M10 15H7V17H10V15Z" fill={ fill ?? '#9A9AB0' }/>
    </svg>
);

export default ProductsIcon;
