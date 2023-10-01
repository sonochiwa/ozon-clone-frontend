import {Container, HeaderH1} from "../styles/main";
import {useNavigate} from "react-router-dom";

function Index() {
    const navigate = useNavigate();

    return (
        <Container>
            <HeaderH1>Navigation menu</HeaderH1>
            <ul>
                <li>
                    <p onClick={() => navigate('/categories')}>Categories</p>
                </li>
            </ul>
        </Container>
    );
}

export default Index;

