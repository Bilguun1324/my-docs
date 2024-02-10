import mongoose, { Schema } from "mongoose";

const ModuleSchema = new Schema({
  text: { type: String, required: true },
  video: { type: String },
  code: { type: String },
  descriptions: {
    type: [
      {
        text: { type: String },
        video: { type: String },
        code: { type: String },
      },
    ],
  },
});

const ModuleModel = mongoose.model("Module", ModuleSchema);

export { ModuleModel };
