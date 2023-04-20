import catchAsync from "../utils/catchAsync";
import ticketService from "../services/ticket.service";

const getTicketController = catchAsync(async (req, res) => {
  const response = await ticketService.getTicket();
  res.send(response);
});

const createTicketController = catchAsync(async (req, res) => {
  const response = await ticketService.createTicket(req.body);
  res.send(response);
});

const updateStatusTicketController = catchAsync(async (req, res) => {
  const response = await ticketService.updateStatusTicket(req.body);
  res.send(response);
});

export default {
  getTicketController,
  createTicketController,
  updateStatusTicketController,
};
