import * as admin from 'firebase-admin';
import * as serviceAccount from '../secrets/firebase-service-account.json'; // 👈 Ajusta la ruta al JSON que descargaste desde Firebase

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
}

export default admin;
