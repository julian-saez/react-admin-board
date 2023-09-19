import InputSearch from "../../atoms/InputSearch";
import ProductCard from "../../components/Dashboard/ProductCard";
import PublicLayout from "../../shared/layout/PublicLayout";
import { Button } from 'primereact/button';

const products_items = [
    {
        id: 1,
        name: 'Tinta roja',
        category: 'Insumos',
        price: 2.55
    },
    {
        id: 2,
        name: 'Tinta azul',
        category: 'Insumos',
        price: 2.55
    },
    {
        id: 3,
        name: 'Tinta amarilla',
        category: 'Insumos',
        price: 2.55
    },
    {
        id: 4,
        name: 'Iron Man',
        category: 'Coleccionable',
        price: 18
    },
    {
        id: 5,
        name: 'Tinta roja',
        category: 'Insumos',
        price: 2.55
    },
    {
        id: 6,
        name: 'Tinta azul',
        category: 'Insumos',
        price: 2.55
    },
    {
        id: 7,
        name: 'Tinta amarilla',
        category: 'Insumos',
        price: 2.55
    },
    {
        id: 8,
        name: 'Iron Man',
        category: 'Coleccionable',
        price: 18
    }
]

const DashboardPage = () => {
    return(
        <PublicLayout>
            <div id="dashboard">
                <div id="headers_dsbd">
                    <InputSearch placeholder="Search products here" />
                    <div id="actions_buttons_dsbd">
                        <Button>Crear producto</Button>
                    </div>
                </div>
                <div id="items_dsbd_container">
                    {
                        products_items.map(( el ) => (
                            <ProductCard name={ el.name } category={ el.category } price={ el.price } />
                        ))
                    }
                </div>
            </div>
        </PublicLayout>
    );
}

export default DashboardPage;
