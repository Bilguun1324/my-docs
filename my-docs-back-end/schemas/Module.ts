import mongoose, { Schema } from "mongoose";

const ModuleSchema = new Schema({
  name: { type: String, maxlength: 50 },
  description: { type: String },
  image: { type: String },
  code: { type: String },
  descriptions: {
    type: [
      {
        title: { type: String, maxlength: 50 },
        description: { type: String },
        image: { type: String },
        code: { type: String },
      },
    ],
  },
});

const ModuleModel = mongoose.model("Module", ModuleSchema);

export { ModuleModel };
