import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    avatar: String,
    forums: [
      {
        type: Schema.Types.ObjectId,
        ref: "Forum",
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true },
);

export default models.User || model("User", userSchema);
