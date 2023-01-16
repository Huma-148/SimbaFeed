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

function DeclinedOrders() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Orders</Card.Title>
                {/* <p className="card-category">
                  Here is a subtitle for this table
                </p> */}
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">
                        <b>Order ID</b>
                      </th>
                      <th className="border-0">
                        <b>Customer ID</b>
                      </th>
                      <th className="border-0">
                        <b>Item ID</b>
                      </th>
                      <th className="border-0">
                        <b>Item Name</b>
                      </th>
                      <th className="border-0">
                        <b>Item Satus</b>
                      </th>
                      <th className="border-0">
                        <b>Order Status</b>
                      </th>
                      <th className="border-0">
                        <b>Category</b>
                      </th>
                      <th className="border-0">
                        <b>Order Date</b>
                      </th>
                      <th className="border-0">
                        <b>Total</b>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>$36,738</td>
                      <td>Niger</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
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

export default DeclinedOrders;
