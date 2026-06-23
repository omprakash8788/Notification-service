const Notification = require("../models/Notification");

const sendSMS = async (userId, phone, message) => {
  const notification = await Notification.create({
    userId,
    type: "SMS",
    message,
    status: "SENT",
  });

  console.log(`SMS SENT TO ${phone}`);

  return notification;
};

module.exports = sendSMS;
