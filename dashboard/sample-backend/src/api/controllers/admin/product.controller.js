const Item = require("../../models/products.model");

/* GET Request handler */
exports.getItem = async (req, res, next) => {
  console.log(Item, "Item array");
  try {
    const items = await Item.find();
    console.log(items);
    return res.send({
      success: true,
      message: "Items fetched successfully",
      payload: items,
    });
  } catch (error) {
    return next(error);
  }
};

/* GET BY ID Request handler */
exports.getItembyID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const items = await Item.findOne({ _id: id });
    return res.send({
      success: true,
      message: "Items fetched successfully",
      payload: items,
    });
  } catch (error) {
    return next(error);
  }
};
exports.getItembyName = async (req, res, next) => {
  try {
    const { query } = req.params;
    const items = await Item.findOne({ name: query });
    return res.send({
      success: true,
      message: "Items fetched successfully",
      payload: items,
    });
  } catch (error) {
    return next(error);
  }
};

/* POST Request handler */
exports.addItem = async (req, res, next) => {
  const payload = req.body;

  console.log(req.files, "sdufwue");
  /* The request.body must have all these values */
  const additem = {
    name: req.body.name,
    status: req.body.status,
    quantity: req.body.quantity,
    size: req.body.size,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
    image: req.files.image[0].filename,
  };

  try {
    const created = await Item.create(additem);
    return res.send({
      success: true,
      message: "Item added successfully",
      data: Item,
      payload: payload,
    });
  } catch (error) {
    return next(error);
  }
};

/* PUT Request handler */
exports.updateItem = async (req, res, next) => {
  const payload = req.body;
  let id = req.params.id;

  const additem = {
    name: req.body.name,
    status: req.body.status,
    quantity: req.body.quantity,
    size: req.body.size,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
    image: req.files.image[0].filename,
  };

  try {
    await Item.findByIdAndUpdate(id, { $set: additem });

    return res.send({
      success: true,
      message: "Category updated successfully",
      data: Item,
      payload: payload,
    });
  } catch (error) {
    return next(error);
  }
};

/* DELETE Request handler */
exports.deleteItem = async (req, res, next) => {
  const payload = req.body;
  let id = req.params.id;

  try {
    await Item.findByIdAndDelete(id);

    return res.send({
      success: true,
      message: "Item deleted successfully",
      data: Item,
      payload: payload,
    });
  } catch (error) {
    return next(error);
  }
};
