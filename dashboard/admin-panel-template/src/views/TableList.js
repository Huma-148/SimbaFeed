import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import Products from "imports/products";
import Select from "react-select";
import Create from "./Create";
import { prodStatus } from "../components/ItemStatus/ItemStatus";
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

function TableList() {
  const [fproduct, setFproduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [toggleButton, settoggleButton] = useState(true);
  const [editId, setEditId] = useState("");
  const [hide, setHide] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [addItem, setAddItem] = useState({
    name: "",
    status: "",
    quantity: 0,
    size: 0,
    category: "",
    description: "",
    price: 0,
    image: "",
  });

  const notifyDel = () => toast("Deleted successfully!");
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

  const prodCategory = [];
  category.map((prod) => {
    const prod2 = {
      label: prod.name,
      name: prod.name,
      value: prod.name,
      id: prod.id,
    };
    prodCategory.push(prod2);
  });

  const handleCat = (e) => {
    setAddItem({
      ...addItem,
      category: e.name,
    });
  };

  const handleSat = (e) => {
    setAddItem({
      ...addItem,
      status: e.name,
    });
  };

  const handleAdd = async (e) => {
    // setList([...list, addItem]);
    let formData = new FormData();
    formData.append("name", addItem.name);
    formData.append("status", addItem.status);
    formData.append("quantity", addItem.quantity);
    formData.append("size", addItem.size);
    formData.append("category", addItem.category);
    formData.append("description", addItem.description);
    formData.append("price", addItem.price);
    formData.append("image", addItem.image);
    await axios
      .post("http://localhost:8081/v1/admin/products/addproduct", formData)
      .then((res) => {
        notifyAdd();
        fetchProducts();
      });
  };

  const fetchProducts = async () => {
    const fetched = await axios
      .get("http://localhost:8081/v1/admin/products/list")
      .then((res) => {
        notifyFetch();
        setFproduct(res.data.payload);
        console.log(res.data.payload, "full fetch");
      });
  };

  const fetchCategory = async () => {
    const categoriesFetch = await axios
      .get("http://localhost:8081/v1/admin/categories/categorylist")
      .then((res) => {
        setCategory(res.data.payload);
      });
  };

  const deleteProduct = async (id) => {
    await axios
      .delete(`http://localhost:8081/v1/admin/products/delete/${id}`)
      .then((res) => {
        fetchProducts();
        notifyDel();
      });
  };

  const editProduct = async (id) => {
    setEditId(id);
    await axios
      .get(`http://localhost:8081/v1/admin/products/listByID/${id}`)
      .then((res) => {
        setAddItem(res.data.payload);
        notifyEdit();
        handleShow();
      });
  };

  const updateProduct = async () => {
    const id = editId;
    let formData = new FormData();
    formData.append("name", addItem.name);
    formData.append("status", addItem.status);
    formData.append("quantity", addItem.quantity);
    formData.append("size", addItem.size);
    formData.append("category", addItem.category);
    formData.append("description", addItem.description);
    formData.append("price", addItem.price);
    formData.append("image", addItem.image);
    await axios
      .put(`http://localhost:8081/v1/admin/products/update/${id}`, formData)
      .then((res) => {
        notifyUpdate();
        fetchProducts();
      });
  };

  useEffect(() => {
    fetchProducts();
    fetchCategory();
  }, []);

  const Hide = () => {
    return (
      <div>
        <Create
          name={addItem}
          onChange={handleInputs}
          onAdd={handleAdd}
          prodCategory={prodCategory}
          handleCat={handleCat}
          handleSat={handleSat}
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
            Add Product
          </button>
          {hide && (
            <Create
              name={addItem}
              onChange={handleInputs}
              onAdd={handleAdd}
              prodCategory={prodCategory}
              handleCat={handleCat}
              handleSat={handleSat}
            />
          )}
        </div>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Products</Card.Title>
                {/* <p className="card-category">
                  Here is a subtitle for this table
                </p> */}
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      {/* <th className="border-0">
                        <b>ID</b>
                      </th> */}
                      <th className="border-0">
                        <b>Name</b>
                      </th>
                      <th className="border-0">
                        <b>Satuts</b>
                      </th>
                      <th className="border-0">
                        <b>Category</b>
                      </th>
                      <th className="border-0">
                        <b>Size</b>
                      </th>
                      <th className="border-0">
                        <b>Quantity</b>
                      </th>
                      <th className="border-0">
                        <b>Description</b>
                      </th>
                      <th className="border-0">
                        <b>Price</b>
                      </th>
                      {/* <th className="border-0">
                        <b>Date</b>
                      </th>*/}
                      <th className="border-0">
                        <b>Image</b>
                      </th>
                      <th className="border-0">
                        <b>Action</b>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {fproduct.map((elem, index) => {
                      return (
                        <tr key={index}>
                          {/* <td>{elem._id}</td> */}
                          <td>{elem.name}</td>
                          <td>{elem.status}</td>
                          <td>{elem.category}</td>
                          <td>{elem.size}</td>
                          <td>{elem.quantity}</td>
                          <td>{elem.description}</td>
                          <td>{elem.price}</td>
                          {/* <td>{elem.date}</td>*/}
                          <td>
                            <img
                              src={`http://localhost:8081\\images\\${
                                elem.image ? elem.image : ""
                              }`}
                              className="product-image"
                              alt=""
                            />
                            {/* `${elem.image.image[0].destination}/`+`${elem.image.image[0].originalname}` */}
                          </td>
                          <td>
                            <div className="actions">
                              <div>
                                <i
                                  className="fa fa-archive"
                                  aria-hidden="true"
                                  onClick={() => {
                                    deleteProduct(elem._id);
                                  }}
                                ></i>
                              </div>
                              <div>
                                <i
                                  className="fa fa-edit"
                                  aria-hidden="true"
                                  onClick={() => {
                                    editProduct(elem._id);
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
                <ToastContainer />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
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
              <Col className="pl-1 create-select-col" md="6">
                <Form.Group>
                  <label>Status</label>
                  <Select
                    options={prodStatus}
                    name="status"
                    value={prodStatus.filter(
                      (prod) => prod.name === addItem.status
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
                    value={addItem.quantity}
                    onChange={handleInputs}
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
                    value={addItem.size}
                    onChange={handleInputs}
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
                      (prod) => prod.name === addItem.category
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
                    value={addItem.description}
                    onChange={handleInputs}
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
                    value={addItem.price}
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
            onClick={updateProduct}
          >
            Update Product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TableList;
