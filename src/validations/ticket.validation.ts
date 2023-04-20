import * as joi from "joi";

const createTicketValidate = {
  body: joi.object().keys({
    title: joi.string().required(),
    description: joi.string().required(),
    contact: joi.string().required(),
    status: joi.string().required(),
    created: joi.number().required(),
    latest: joi.number().required(),
  }),
};

const updateTicketValidate = {
  body: joi.object().keys({
    id: joi.string().required(),
    newStatus: joi.string().required(),
  }),
};

export default {
  createTicketValidate,
  updateTicketValidate,
};
