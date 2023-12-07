import mongoose, { Schema } from "mongoose";

const RecordSchema = new Schema({
    category: { type: String, maxlength: 50, minlength: 2 },
    title: { type: String, maxlength: 50, minlength: 2 },
    note: { type: String, maxlength: 150, minlength: 2 },
    image: { type: String },
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

const RecordModel = mongoose.model("Record", RecordSchema);

export { RecordModel };
