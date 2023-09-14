interface Props {
    children: JSX.Element[] | JSX.Element;
}

const PublicLayout = ( { children }: Props ) => (
    <div className="public_layout">
        { children }
    </div>
);

export default PublicLayout;