import * as express from "express";
import * as cors from "cors";

import routes from "./routes";

const app = express();
app.use(express.json());

app.use(cors());

app.get("/", (_, response) => {
  response.status(200).send({ message: "Hello Assignment!" });
});

app.use("/v1/", routes);

app.listen(4000, () => {
  console.log(`port 4000`);
});
