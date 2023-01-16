import React, { useEffect, useState } from "react";
import Select from "react-select";
import { prodStatus } from "../components/ItemStatus/ItemStatus";
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Dropdown,
} from "react-bootstrap";

function Create({ name, onChange, onAdd, prodCategory, handleCat, handleSat }) {
  return (
    <>
      <Row>
        <Col md="12">
          <Card>
            <Card.Header>
              <Card.Title as="h4"></Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col className="pr-1" md="6">
                    <Form.Group>
                      <label>Name</label>
                      <Form.Control
                        placeholder="Product Name"
                        name="name"
                        type="text"
                        value={name.name}
                        onChange={onChange}
                        required
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1 create-select-col" md="6">
                    <Form.Group>
                      <label>Status</label>
                      <Select
                        options={prodStatus}
                        name="status"
                        value={prodStatus.filter(
                          (prod) => prod.name === name.status
                        )}
                        onChange={(e) => handleSat(e)}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1 create-select-col" md="6">
                    <Form.Group>
                      <label>Quantity</label>
                      <Form.Control
                        placeholder="Company"
                        name="quantity"
                        type="number"
                        value={name.quantity}
                        onChange={onChange}
                        required
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="6">
                    <Form.Group>
                      <label>Size</label>
                      <Form.Control
                        placeholder="Size"
                        name="size"
                        type="number"
                        value={name.size}
                        onChange={onChange}
                        required
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="4">
                    <Form.Group>
                      <label>Category</label>
                      <Select
                        options={prodCategory}
                        name="category"
                        value={prodCategory.filter(
                          (prod) => prod.name === name.category
                        )}
                        onChange={(e) => handleCat(e)}
                      />
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="6">
                    <Form.Group>
                      <label>Description</label>
                      <Form.Control
                        placeholder="Describe product here."
                        type="text"
                        name="description"
                        value={name.description}
                        onChange={onChange}
                        required
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="4">
                    <Form.Group>
                      <label>Price</label>
                      <Form.Control
                        placeholder="Price"
                        type="number"
                        name="price"
                        value={name.price}
                        onChange={onChange}
                        required
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="4">
                    <Form.Group>
                      <label>Item Image</label>
                      {name.image ? (
                        <img
                          src={`http://localhost:8081\\images\\${
                            name.image.filename ? name.image.filename : ""
                          }`}
                          className="return-image"
                          alt=""
                        />
                      ) : (
                        ""
                      )}
                      <Form.Control
                        type="file"
                        placeholder="image"
                        className="create-file"
                        name="image"
                        onChange={onChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Button
                  className="btn-fill pull-right"
                  type="button"
                  variant="info"
                  onClick={onAdd}
                >
                  Add Product
                </Button>

                <div className="clearfix"></div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div></div>
    </>
  );
}

export default Create;
