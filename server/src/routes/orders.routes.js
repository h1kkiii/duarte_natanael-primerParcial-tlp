import { Router } from "express";
import {
  createOrderCtrl,
  deleteOrderCtrl,
  getOrdersCtrl,
} from "../controllers/order.controller.js";
import {
  createOrder,
  deleteOrderById,
  getOrderById,
  getOrders,
} from "../models/order.model.js";
import { applyValidations } from "../validations/apply.validations.js";
import { validateJwt } from "../middlewares/validateJwt.js";

const ordersRouter = Router();

// ! NO FUNCIONA LA RUTA /orders
ordersRouter.get(
  "/orders",
  getOrders,
  validateJwt,
  applyValidations,
  getOrdersCtrl
);

// ! FALTAN VALIDACIONES DE DATOS
ordersRouter.post(
  "/orders",
  createOrder,
  validateJwt,
  applyValidations,
  createOrderCtrl
);

ordersRouter.get(
  "/order/:id",
  getOrderById,
  validateJwt,
  applyValidations,
  getOrdersCtrl
);

ordersRouter.delete(
  "/order/:id",
  deleteOrderById,
  validateJwt,
  applyValidations,
  deleteOrderCtrl
);

export { ordersRouter };
