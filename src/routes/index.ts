import * as express from "express";

import ticketRoute from "./ticket.route";

const router = express.Router();

const defaultRoutes = [
  {
    path: "/ticket",
    route: ticketRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
