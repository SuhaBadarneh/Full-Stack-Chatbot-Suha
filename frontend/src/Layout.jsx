import { Container, Row, Col } from "react-bootstrap";

const Layout = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          {/* Content for the left column */}
          <h1>Column 1</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Col>
        <Col md={6}>
          {/* Content for the right column */}
          <h1>Column 2</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Col>
      </Row>
    </Container>
  );
};
export default Layout;
