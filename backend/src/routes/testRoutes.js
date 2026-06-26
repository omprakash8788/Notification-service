const express = require("express");
const router = express.Router();

const sendPush = require("../services/pushService");

router.post("/push", async (req, res) => {
  try {
    const { userId, token } = req.body;

    await sendPush(
      userId,
      token,
      "Test Notification",
      "Firebase Push Working"
    );

    res.json({
      success: true,
      message: "Push attempted",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;