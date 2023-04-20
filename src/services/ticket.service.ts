import * as httpStatus from "http-status";

import { db } from "../firebase";
import ApiError from "../utils/ApiError";

interface resObject {
  id: string;
}

const getTicket = async (): Promise<resObject[]> => {
  const Tickets = db.collection("Tickets").get();

  const resData = (await Tickets).docs.map((ticket) => {
    return { ...ticket.data(), id: ticket.id };
  });

  return resData;
};

const createTicket = async (ticketBody: {
  title: string;
  description: string;
  contact: string;
  status: string;
  created: string;
  latest: string;
}): Promise<resObject[]> => {
  const Tickets = db.collection("Tickets");

  const ticketData = {
    title: ticketBody.title,
    description: ticketBody.description,
    contact: ticketBody.contact,
    status: ticketBody.status,
    created: ticketBody.created,
    latest: ticketBody.latest,
  };

  await Tickets.add(ticketData);

  const tickets = Tickets.get();

  const resData = (await tickets).docs.map((ticket) => {
    return { ...ticket.data(), id: ticket.id };
  });

  return resData;
};

const updateStatusTicket = async (ticketBody: {
  id: string;
  newStatus: string;
}): Promise<string> => {
  const Tickets = db.collection("Tickets").doc(ticketBody.id);

  const ticketData = (await Tickets.get()).data();

  if (!ticketData) {
    throw new ApiError(httpStatus.NOT_FOUND, "Ticket not found");
  }

  const updateData = {
    ...ticketData,
    status: ticketBody.newStatus,
    latest: Date.now(),
  };

  await Tickets.set(updateData);

  return "Update ticket success";
};

export default { getTicket, createTicket, updateStatusTicket };
