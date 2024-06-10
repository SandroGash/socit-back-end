const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origine: true });

/**
 * Update user identification data
 * @param body {String, Object}
 * @return {string} message success | error
 * @forPlay https://us-central1-socit-796b8.cloudfunctions.net/updateUser *
 */

exports.updateUser = functions.https.onRequest((req, res) => {
  const uid = req.body.uid;
  const data = req.body.data;

  return cors(req, res, async () => {
    try {
      const userRecord = await admin.auth().updateUser(uid, data);
      res.send(userRecord.toJSON());
    } catch (error) {
      res.status(500).send(error);
    }
  });
});
