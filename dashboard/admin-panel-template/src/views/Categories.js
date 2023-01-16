import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateCategory from "./CreateCategory";
import { ToastContainer, toast } from "react-toastify";
import {
  notifyFetch,
  notifyAdd,
  notifyDel,
  notifyEdit,
  notifyUpdate,
} from "../components/Toastify/Toastify";

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
  Modal,
  Form,
} from "react-bootstrap";

function Categories() {
  const [category, setCategory] = useState([]);
  const [hide, setHide] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [toggleButton, settoggleButton] = useState(true);
  const [editId, setEditId] = useState("");
  const [addItem, setAddItem] = useState({
    name: "",
  });

  const handleInputs = (e) => {
    const { name } = e.target;

    if (name === "image") {
      const file = e.target.files;
      console.log(file, "file");
      //const { name, files } = e.target;
      setAddItem({
        ...addItem,
        [name]: file[0],
      });
    } else {
      const { name, value } = e.target;
      setAddItem({
        ...addItem,
        [name]: value,
      });
    }
  };
  const handleAdd = async (e) => {
    let formData = new FormData();
    formData.append("name", addItem.name);
    formData.append("image", addItem.image);

    await axios
      .post("http://localhost:8081/v1/admin/categories/add-category", formData)
      .then((res) => {
        notifyAdd();
        fetchCategory();
      });
  };

  const fetchCategory = async () => {
    const fetched = await axios
      .get("http://localhost:8081/v1/admin/categories/categorylist")
      .then((res) => {
        notifyFetch();
        setCategory(res.data.payload);
      });
  };

  const deleteCategory = async (id) => {
    await axios
      .delete(`http://localhost:8081/v1/admin/categories/delete-category/${id}`)
      .then((res) => {
        notifyDel();
        fetchCategory();
      });
  };

  const editCategory = async (id) => {
    setEditId(id);
    await axios
      .get(`http://localhost:8081/v1/admin/categories/CategoryByID/${id}`)
      .then((res) => {
        notifyEdit();
        setAddItem(res.data.payload);
        handleShow();
      });
  };

  const updateCategory = async () => {
    const id = editId;
    let formData = new FormData();
    formData.append("name", addItem.name);
    formData.append("image", addItem.image);
    await axios
      .put(
        `http://localhost:8081/v1/admin/categories/update-category/${id}`,
        formData
      )
      .then((res) => {
        notifyUpdate();
        fetchCategory();
      });
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const Hide = () => {
    return (
      <div>
        <CreateCategory
          name={addItem}
          onChange={handleInputs}
          onAdd={handleAdd}
        />
      </div>
    );
  };

  return (
    <>
      <Container fluid>
        <div className="add-product-box">
          <button
            type="button"
            className="btn btn-fill btn-info"
            onClick={() => setHide(!hide)}
          >
            Add Category
          </button>
          {hide && (
            <CreateCategory
              name={addItem}
              onChange={handleInputs}
              onAdd={handleAdd}
            />
          )}
        </div>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Categories</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">
                        <b>Name</b>
                      </th>
                      <th className="border-0">
                        <b>Image</b>
                      </th>
                      <th className="border-0">
                        <b>Action</b>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.map((elem, index) => {
                      return (
                        <tr key={index}>
                          <td>{elem.name}</td>
                          <td>
                            <img
                              src={`http://localhost:8081\\images\\${
                                elem.image ? elem.image : ""
                              }`}
                              className="product-image"
                              alt=""
                            />
                          </td>
                          <td>
                            <div className="actions">
                              <div>
                                <i
                                  className="fa fa-archive"
                                  aria-hidden="true"
                                  onClick={() => {
                                    deleteCategory(elem._id);
                                  }}
                                ></i>
                              </div>
                              <div>
                                <i
                                  className="fa fa-edit"
                                  aria-hidden="true"
                                  onClick={() => {
                                    editCategory(elem._id);
                                  }}
                                ></i>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <ToastContainer />
      </Container>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col className="pr-1" md="6">
                <Form.Group>
                  <label>Name</label>
                  <Form.Control
                    placeholder="Product Name"
                    name="name"
                    type="text"
                    value={addItem.name}
                    onChange={handleInputs}
                    required
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col className="pl-1" md="4">
                <Form.Group>
                  <label>Item Image</label>

                  {addItem.image ? (
                    <img
                      src={`http://localhost:8081\\images\\${
                        addItem.image ? addItem.image : ""
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
                    files={`http://localhost:8081\\images\\${
                      addItem.image ? addItem.image : ""
                    }`}
                    onChange={handleInputs}
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="clearfix"></div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            className="btn-fill pull-right"
            type="button"
            variant="info"
            onClick={updateCategory}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Categories;
