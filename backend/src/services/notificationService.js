const Notification = require("../models/Notification");
const sendSMS = require("./smsService");

const sendEmail = require("./emailService");

const sendWelcomeEmail = async (user) => {
  let notification;

  try {
    notification = await Notification.create({
      userId: user._id,
      type: "EMAIL",
      subject: "Welcome",
      message: "Welcome to Notification Platform",
      status: "PENDING",
    });

    await sendEmail({
      to: user.email,
      subject: "Welcome to Notification Platform",
      html: `
        <h1>Hello ${user.name}</h1>
        <p>Your account has been created successfully.</p>
      `,
    });
    await sendSMS(user._id, user.phone, "Welcome to platform");

    notification.status = "SENT";

    await notification.save();
  } catch (error) {
    if (notification) {
      notification.status = "FAILED";

      notification.error = error.message;

      await notification.save();
    }

    console.error(error);
  }
};

module.exports = {
  sendWelcomeEmail,
};
