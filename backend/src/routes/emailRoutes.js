const express = require("express");
const router = express.Router();

const sendEmail  = require("../services/emailService");

router.post("/send", async (req, res) => {
  try {
    const { to, subject, message } = req.body;

    await sendEmail(to, subject, message);

    res.json({
      success: true,
      message: "Email sent",
    });
  } catch (error) {
    console.error(error)
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;