import styled from "styled-components";
import EmptyCard from "../images/empty-card.png";
import {useNavigate} from "react-router-dom";

function ProductCard({name, image_id}) {
    const navigate = useNavigate();

    return (
        <Root onClick={() => navigate('/categories')}>
            <Image src={image_id ? `http://0.0.0.0:8000/api/images/${image_id}` : EmptyCard}/>
            <Name>{name}</Name>
        </Root>
    )
}



const Root = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 216px;
`;

const Image = styled.img`
  width: 100%;
  height: 216px;
  margin-bottom: 8px;
  border-radius: 12px;
  transition: .1s ease-in;
  

  &:hover {
    scale: 1.05;
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