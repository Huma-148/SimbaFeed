import React, { useEffect, useState } from "react";
import Select from "react-select";
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

function CreateCategory({ name, onChange, onAdd }) {
  return (
    <>
      <Row>
        <Col md="12">
          <Card>
            <Card.Header>
              <Card.Title as="h4">Create Category</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col className="pr-1" md="6">
                    <Form.Group>
                      <label>Name</label>
                      <Form.Control
                        placeholder="Category Name"
                        name="name"
                        type="text"
                        value={name.name}
                        onChange={onChange}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="6">
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
                  Add Category
                </Button>

                <div className="clearfix"></div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default CreateCategory;
