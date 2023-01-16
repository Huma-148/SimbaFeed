import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function QueriesList() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Messages</Card.Title>
                {/* <p className="card-category">
                  Here is a subtitle for this table
                </p> */}
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">
                        <b>Name</b>
                      </th>
                      <th className="border-0">
                        <b>Email</b>
                      </th>
                      <th className="border-0">
                        <b>Message</b>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Huma</td>
                      <td>huma@gmail.com</td>
                      <td>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Harum quos nam molestias incidunt inventore sed
                        asperiores! Explicabo qui, ipsum laudantium quos
                        corporis aspernatur, aut nobis maxime quod aliquam totam
                        modi.
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default QueriesList;
