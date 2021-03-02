
import './App.css';
import {Button, Alert, Breadcrumb, Card, Form, Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container fluid>
        <Form>
          <Row>
            <Col md>
              <Form.Group controlId="formEmail">
                  <Form.Label>email</Form.Label>
                  <Form.Control type="email" placeholder="email@emial.com"/>
                  <Form.Text className="text-muted">
                    Nous ne partagerons pas votre email. Croyez nous !
                  </Form.Text>
              </Form.Group>
            </Col>
            {/* <Col>
              <Form.Group controlId="file">
                  <Form.Label>file</Form.Label>
                  <Form.Control type="file" placeholder="email@emial.com"/>
                  <Form.Text className="text-muted">
                    Nous ne partagerons pas votre email. Croyez nous !
                  </Form.Text>
            </Form.Group>
            </Col> */}
            <Col md>
              <Form.Group controlId="formPassword">
                  <Form.Label>password</Form.Label>
                  <Form.Control type="password" placeholder="password"/>
                  <Form.Text className="text-muted">
                    Nous ne partagerons pas votre email. Croyez nous !
                  </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Button type="submit">Read more</Button>
        </Form>
        <Card className="mb-3" style={{color:"#000"}}>
          <Card.Img src="https://picsum.photos/200/150"/>
          <Card.Body>
              <Card.Title>
                Card Exemple
              </Card.Title>
            <Card.Text>
              loremipsummmm
            </Card.Text>
            <Button>Read more</Button>
          </Card.Body>
        </Card>
        <Breadcrumb>
            <Breadcrumb.Item>One</Breadcrumb.Item> 
            <Breadcrumb.Item>One</Breadcrumb.Item>               
            <Breadcrumb.Item active>One</Breadcrumb.Item>             
        </Breadcrumb>
      <Button>Hello</Button>
      <Alert variant="primary">Alert</Alert>
      </Container>
      </header>
      <Container>
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row>
          <Col className="col" xs={12} md={8}>
            xs=12 md=8
          </Col>
          <Col className="col" xs={6} md={4}>
            xs=6 md=4
          </Col>
        </Row>

        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row>
          <Col className="col" xs={6} md={4}>
            xs=6 md=4
          </Col>
          <Col className="col" xs={6} md={4}>
            xs=6 md=4
          </Col>
          <Col className="col" xs={6} md={4}>
            xs=6 md=4
          </Col>
        </Row>

        {/* Columns are always 50% wide, on mobile and desktop */}
        <Row>
          <Col className="col" xs={6}>xs=6</Col>
          <Col className="col" xs={6}>xs=6</Col>
        </Row>
      </Container>
      <br></br>
      <Container>
        <Row xs={2} md={4} lg={6}>
          <Col className="col">1 of 2</Col>
          <Col className="col">2 of 2</Col>
        </Row>
        <Row xs={1} md={2}>
          <Col className="col">1 of 3</Col>
          <Col className="col">2 of 3</Col>
          <Col className="col">3 of 3</Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
