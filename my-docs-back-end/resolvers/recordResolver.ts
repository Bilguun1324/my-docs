import { RecordModel, UserModel } from "../schemas";

const addRecord = async (_: any, params: any) => {
    const record = new RecordModel(params);
    
    const updateDoc = {
        $push: { "records": record._id }
    }

    try {
        await record.save();
        await UserModel.updateOne({ _id: params.user_id }, updateDoc)
        return record;
    } catch (error) {
        return error;
    }
};

export { addRecord };
