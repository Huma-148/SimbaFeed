const  Order  = require("../../models/order.model");

exports.addOrderItems = async (req, res, next) => {
  console.log(req.body);
  const payload= req.body;

  try {
      const addorder = {
    items: req.body.items,
    status: req.body.status,
    shippingAddress: req.body.shippingAddress,
    customer: req.body.customer,
    totalPrice: req.body.totalPrice,
  };
    const created = await Order.create(addorder);
    return res.send({
      success: true,
      message: "Order created successfully",
      data: Order,
      payload: payload,
    });
  } catch (error) {
    return next(error);
  }
};

exports.Orders = async (req, res, next) => {
  try {
    const items = await Order.find();
    console.log(items);
    return res.send({
      success: true,
      message: "Orders fetched successfully",
      payload: items,
    });
  } catch (error) {
    return next(error);
  }
}
 exports.getOrderById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const items = await Order.findOne({ _id: id });
    return res.send({
      success: true,
      message: "Order fetched successfully",
      payload: items,
    });
  } catch (error) {
    return next(error);
  }
};

exports.cancelOrder = async (req, res, next) => {
  const payload = req.body;
  let id = req.params.id;

  try {
    await Order.findByIdAndDelete(id);

    return res.send({
      success: true,
      message: "Item deleted successfully",
      data: Order,
      payload: payload,
    });
  } catch (error) {
    return next(error);
  }
}

exports.updateOrderStatusToComplete = async (req, res, next) => {
  const payload = req.body;
  let id = req.params.id;

  const orderStatus = {
    status: "Complete",
  };

  try {
    await Order.findByIdAndUpdate(id, { $set: orderStatus });

    return res.send({
      success: true,
      message: "Order Status updated to complete successfully",
      data: Order,
      payload: payload,
    });
  } catch (error) {
    return next(error);
  }
};
exports.updateOrderStatusToApproved = async (req, res, next) => {
  const payload = req.body;
  let id = req.params.id;

  const orderStatus = {
    status: "Approved",
  };

  try {
    await Order.findByIdAndUpdate(id, { $set: orderStatus });

    return res.send({
      success: true,
      message: "Order Status updated to Approved successfully",
      data: Order,
      payload: payload,
    });
  } catch (error) {
    return next(error);
  }
};
exports.updateOrderStatusToCancelled = async (req, res, next) => {
  const payload = req.body;
  let id = req.params.id;

  const orderStatus = {
    status: "Cancelled",
  };

  try {
    await Order.findByIdAndUpdate(id, { $set: orderStatus });

    return res.send({
      success: true,
      message: "Order Status updated to Cancelled successfully",
      data: Order,
      payload: payload,
    });
  } catch (error) {
    return next(error);
  }
};

