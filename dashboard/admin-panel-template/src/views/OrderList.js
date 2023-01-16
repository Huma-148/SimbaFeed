import React, { useState, useEffect } from "react";
import axios from "axios";
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
import { forEachChild } from "typescript";

function OrderList() {
  const [orders, setOrders] = useState([]);
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState("");
  const [editstatus, setEditStatus] = useState("");
  const fetchOrders = async () => {
    const fetched = await axios
      .get("http://localhost:8081/v1/admin/order/orderList")
      .then((res) => {
        setOrders(res.data.payload);
        setItems(res.data.payload.items);
        console.log(res.data.payload, "full Orders");
      });
  };
  const deleteOrder = async (id) => {
    await axios
      .delete(`http://localhost:8081/v1/admin/order/cancel-order/${id}`)
      .then((res) => {
        fetchOrders();
      });
  };
  const updateToComplete = async (id) => {
    setEditId(id);
    await axios
      .put(`http://localhost:8081/v1/admin/order/update-status-complete/${id}`)
      .then((res) => {
        fetchOrders();
      });
  };
  const updateToCancel = async (id) => {
    setEditId(id);
    await axios
      .put(`http://localhost:8081/v1/admin/order/update-status-cancel/${id}`)
      .then((res) => {
        fetchOrders();
      });
  };
  const updateToApprove = async (id) => {
    setEditId(id);
    await axios
      .put(`http://localhost:8081/v1/admin/order/update-status-approve/${id}`)
      .then((res) => {
        fetchOrders();
      });
  };

  // const updateProduct = async () => {
  //   const id = editId;
  //   let formData = new FormData();
  //   formData.append("name", addItem.name);
  //   formData.append("status", addItem.status);
  //   formData.append("quantity", addItem.quantity);
  //   formData.append("size", addItem.size);
  //   formData.append("category", addItem.category);
  //   formData.append("description", addItem.description);
  //   formData.append("price", addItem.price);
  //   formData.append("image", addItem.image);
  //   await axios
  //     .put(`http://localhost:8081/v1/admin/products/update/${id}`, formData)
  //     .then((res) => {
  //       notifyUpdate();
  //       fetchProducts();
  //     });
  // };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover order_card">
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
                        <b>Customer ID</b>
                      </th>
                      <th className="border-0">
                        <b>Item ID</b>
                      </th>
                      <th className="border-0">
                        <b>Item Name</b>
                      </th>
                      <th className="border-0">
                        <b>Item Satuts</b>
                      </th>
                      <th className="border-0">
                        <b>Item Quantity</b>
                      </th>
                      <th className="border-0">
                        <b>Category</b>
                      </th>
                      <th className="border-0">
                        <b>Order Status</b>
                      </th>
                      <th className="border-0">
                        <b>Order Date</b>
                      </th>
                      <th className="border-0">
                        <b>Total</b>
                      </th>
                      <th className="border-0">
                        <b>Update Order Status</b>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => {
                      return (
                        <tr>
                          <td>{order.customer.customerId}</td>
                          <td className="order_itemss">
                            {order.items.map((item, index) => {
                              return (
                                <tr>
                                  <td>{item._id}</td>
                                </tr>
                              );
                            })}
                          </td>
                          <td className="order_itemss">
                            {order.items.map((item, index) => {
                              return (
                                <tr>
                                  <td>{item.name}</td>
                                </tr>
                              );
                            })}
                          </td>
                          <td className="order_itemss">
                            {order.items.map((item, index) => {
                              return (
                                <tr>
                                  <td>{item.status}</td>
                                </tr>
                              );
                            })}
                          </td>
                          <td className="order_itemss">
                            {order.items.map((item, index) => {
                              return (
                                <tr>
                                  <td>{item.itemQuantity}</td>
                                </tr>
                              );
                            })}
                          </td>
                          <td className="order_itemss">
                            {order.items.map((item, index) => {
                              return (
                                <tr>
                                  <td>{item.category}</td>
                                </tr>
                              );
                            })}
                          </td>
                          <td>{order.status}</td>
                          <td>{order.createdAt}</td>
                          <td>${order.totalPrice}</td>
                          <td>
                            <div className="order_actions">
                              <div>
                                <i
                                  className="fa fa-archive"
                                  aria-hidden="true"
                                  onClick={() => {
                                    deleteOrder(order._id);
                                  }}
                                ></i>
                              </div>
                              <div className="status_actions">
                                <button
                                  type="button"
                                  variant="success"
                                  onClick={() => {
                                    updateToComplete(order._id);
                                  }}
                                >
                                  Complete
                                </button>
                                <button
                                  type="button"
                                  onClick={() => {
                                    updateToApprove(order._id);
                                  }}
                                >
                                  Approved
                                </button>
                                <button
                                  type="button"
                                  onClick={() => {
                                    updateToCancel(order._id);
                                  }}
                                >
                                  Cancelled
                                </button>
                              </div>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                    {/* <tr>
                      <td>1</td>
                      <td>1</td>
                      <td>1</td>
                      <td>Blue Buffalo</td>
                      <td>Available</td>
                      <td>Pending</td>
                      <td>Dog</td>
                      <td>30/12/2022</td>
                      <td>4000</td>
                      <td>
                        <button type="button">
                          <i className="nc-icon nc-simple-remove"></i>
                        </button>
                        <button type="button">
                          <i className="nc-icon nc-check-2"></i>
                        </button>
                      </td>
                    </tr> */}
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

export default OrderList;
