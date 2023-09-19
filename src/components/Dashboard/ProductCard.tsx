interface Props {
    name: string;
    category?: string;
    price: number;
}

const ProductCard = ( { name, category, price }: Props ) => {
    return (
        <div className="product_card">
            <div className="product_image_card">

            </div>
            <div className="product_info_card">
                <span>{ name }</span>
                {
                    category && <span>{ category }</span>
                }
                <span>U$D { price }</span>
            </div>
        </div>
    )
};

export default ProductCard;
