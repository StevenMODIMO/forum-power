import { Schema, model, models } from "mongoose";

const commentSchema = new Schema(
  {
    content: String,

    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    forum: {
      type: Schema.Types.ObjectId,
      ref: "Forum",
    },

    parentComment: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
      default: null,
    },

    replies: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true },
);

export default models.Comment || model("Comment", commentSchema);
