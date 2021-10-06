import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/global/HeaderComponent';
import IndexBodyComponent from "./components/pages/index/IndexBodyComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <HeaderComponent></HeaderComponent>
            <Container className={"mt-5"}>
                <Row>
                    <Col>
                        <IndexBodyComponent></IndexBodyComponent>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;

