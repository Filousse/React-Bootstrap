
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
    </div>
  );
}

export default App;
