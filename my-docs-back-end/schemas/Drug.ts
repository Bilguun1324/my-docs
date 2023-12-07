import mongoose, { Schema } from "mongoose";

const DrugSchema = new Schema({
    name: { type: String, maxlength: 50, minlength: 2 },
    condition: { type: String, maxlength: 150, minlength: 2 },
    description: { type: String }
});

const DrugModel = mongoose.model("Drug", DrugSchema);

export { DrugModel };
