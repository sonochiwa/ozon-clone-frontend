import {Container, HeaderH1} from "../styles/main";
import ProductCard from "../components/product-card";
import {useEffect, useState} from "react";
import endpoints from "../services/endpoints";

function Category() {
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        const {data} = endpoints.getAllCategories()
            .then(response => setCategories(response.data));
    }, [1]);

    return (
        <Container>
            <HeaderH1>Каталог</HeaderH1>
            {categories && categories.map(i => <ProductCard name='name'/>)}

        </Container>
    );
}

export default Category;