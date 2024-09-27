// ? CREAR LAS VALIDACIONES PARA LAS ORDERS AQUÍ
import body from "express-validator";

export const orderValidations = [
  body(id).isString(),
  body("coffee")
    .isString("Espresso", "Americano", "Cappuccino")
    .notEmpty()
    .withMessage("coffee is required."),
  body("userId").isNumber().withMessage("userId is required").notEmpty(),
];
