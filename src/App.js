import React from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

function App() {
  let infoCategory = {title:"Category List"};
  let infoProduct = {title:"Product List"};

  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>

        <Row>
          <Col xs="3">
            <CategoryList info={infoCategory} />
          </Col>
          <Col xs="9">
            <ProductList info={infoProduct} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
