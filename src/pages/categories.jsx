import {Container, HeaderH1} from "../styles/main";
import {useEffect, useState} from "react";
import endpoints from "../services/endpoints";
import styled from "styled-components";
import ProductCard from "../components/product-card";

function Categories() {
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        endpoints.getAllCategories()
            .then(response => setCategories(response.data));
    }, [0]);

    return (
        <Container>
            <HeaderH1>Каталог</HeaderH1>
            <ProductCardWrapper>
                {categories && categories.map((data, i) =>
                    <ProductCard key={i}
                                 name={data.name}
                                 image_id={data.image_id}
                    />)
                }
            </ProductCardWrapper>
        </Container>
    );
}

export default Categories;

const ProductCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 48px;
  column-gap: 24px;
`;