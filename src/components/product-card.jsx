import styled from "styled-components";
import MyImage from "./elektronika.webp";

function ProductCard({name, link, image}) {
    return (
        <Root href={'#' + name}>
            <Image src={MyImage}/>
            <Name>{name}</Name>
        </Root>
    )
}

const Root = styled.a`
  display: flex;
  flex-direction: column;
  width: 216px;
  text-decoration: none;
`;

const Image = styled.img`
  width: 100%;
  height: 216px;
  border-radius: 12px;
  margin-bottom: 8px;

  &:hover {
    background-color: rgba(154, 190, 232, 0.29);
  }
`;

const Name = styled.div`
  font-family: 'GT Eesti Pro', sans-serif;
  font-weight: 400;
  color: var(--text_dark);
  width: 216px;
  line-height: 24px;
  text-align: center;
  font-size: 16px;
  margin-bottom: 6px;
`;

export default ProductCard;