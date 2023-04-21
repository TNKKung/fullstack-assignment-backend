import * as admin from "firebase-admin";

import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({ path: path.join(__dirname, "../.env") });

admin.initializeApp({
  credential: admin.credential.cert(
    JSON.parse(
      process.env.ADMIN_SDK_SERVICE_ACCOUNT as string
    ) as admin.ServiceAccount
  ),
});

const db = admin.firestore();

export { admin, db };
