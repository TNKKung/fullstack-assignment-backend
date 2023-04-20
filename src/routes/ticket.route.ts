import * as express from "express";

import ticketController from "../controllers/ticket.controller";
import validate from "../middlewares/validate";
import ticketValidation from "../validations/ticket.validation";

const router = express.Router();

router
  .get("/", ticketController.getTicketController)
  .post(
    "/",
    validate(ticketValidation.createTicketValidate),
    ticketController.createTicketController
  )
  .patch(
    "/",
    validate(ticketValidation.updateTicketValidate),
    ticketController.updateStatusTicketController
  );

export default router;
