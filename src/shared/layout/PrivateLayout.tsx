interface Props {
    children: JSX.Element[] | JSX.Element;
}

const PrivateLayout = ( { children }: Props ) => (
    <div className="private_layout">
        { children }
    </div>
);

export default PrivateLayout;