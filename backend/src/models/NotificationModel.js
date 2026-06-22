import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    type: {
      type: String,
      enum: ["EMAIL", "PUSH", "SMS"],
    },
    status: {
      type: String,
      default: "PENDING",
    },
    message: String,
  },
  { timestamps: true },
);
export default mongoose.model("Notification", notificationSchema);
