import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    firstName: { type: String, maxlength: 50, minlength: 2 },
    age: { type: String, maxlength: 3, minlength: 1 },
    gender: { type: String },
    records: { type: [{ type: Schema.Types.ObjectId, ref: "Record", required: true }] },
    drugs: {
        type: [{
            drug_id: { type: Schema.Types.ObjectId, ref: "Drug" },
            dose: { type: String },
            duration: { type: String },
            frequency: { type: String },
            date: { type: String },
            type: { type: String }
        }]
    },
});

const UserModel = mongoose.model("User", UserSchema);

export { UserModel };
