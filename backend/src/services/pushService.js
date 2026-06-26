// const admin = require("../config/firebase/firebase");

// const Notification = require("../models/Notification");

// const sendPush = async (userId, token, title, body) => {
//   try {
//     await admin.messaging().send({
//       token,
//       notification: {
//         title,
//         body,
//       },
//     });

//     await Notification.create({
//       userId,
//       type: "PUSH",
//       message: body,
//       status: "SENT",
//     });
//   } catch (error) {
//     await Notification.create({
//       userId,
//       type: "PUSH",
//       message: body,
//       status: "FAILED",
//       error: error.message,
//     });
//   }
// };

// module.exports = sendPush;

require("../config/firebase/firebase");

const { getMessaging } = require("firebase-admin/messaging");

const Notification = require("../models/Notification");

const sendPush = async (
  userId,
  token,
  title,
  body
) => {
  try {
    await getMessaging().send({
      token,
      notification: {
        title,
        body,
      },
    });

    await Notification.create({
      userId,
      type: "PUSH",
      message: body,
      status: "SENT",
    });

    console.log("Push sent successfully");
  } catch (error) {
    console.error(error);

    await Notification.create({
      userId,
      type: "PUSH",
      message: body,
      status: "FAILED",
      error: error.message,
    });
  }
};

module.exports = sendPush;
