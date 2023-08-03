import styled from "styled-components";

function ProductCard(name) {
    return (
        <Root href='#'>
            <Name>{name}</Name>
        </Root>
    )
}

const Root = styled.a`
  background-color: gray;
`;

const Image = styled.div`
  width: 216px;
  height: 216px;
`;

const Name = styled.div`
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 6px;
`;

export default ProductCard;