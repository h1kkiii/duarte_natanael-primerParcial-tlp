import {
  createOrder,
  getOrders,
  deleteOrderById,
} from "../models/order.model.js";

export const createOrderCtrl = (req, res) => {
  const userId = req.user.id;
  const { coffee } = req.body;

  const order = createOrder(coffee, userId);

  res.status(201).json(order);
};

export const getOrdersCtrl = (_req, res) => {
  const orders = getOrders();

  res.status(200).json(orders);
};

export const deleteOrderCtrl = (req, res) => {
  const userId = req.user.id;

  const order = deleteOrderById(userId);

  res.status(200).json(order, { message: "order deleted" });
};
