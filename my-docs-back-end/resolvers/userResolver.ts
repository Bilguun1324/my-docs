import { UserModel } from "../schemas";

const addUser = async (_: any, params: any) => {
    const user = new UserModel(params);

    try {
        await user.save();
        return user;
    } catch (error) {
        return error;
    }
};

const addDrugToUser = async (_: any, params: any) => {
    const updateDoc = {
        $push: { "drugs": params.drug }
    }

    try {
        const user = await UserModel.updateOne({ _id: params.user_id }, updateDoc)
        return user;
    } catch (error) {
        return error;
    }
};

const getUser = async (_: any, params: any) => {
    const user = await UserModel.findOne(params ? { ...params } : {})
        .populate({
            path: "records", populate: {
                path: "drugs",
                populate: {
                    path: "drug_id"
                }
            }
        }).lean()
        .populate({
            path: "drugs",
            populate: {
                path: "drug_id"
            }
        })
        .lean()

    return user;
};

export { addUser, getUser, addDrugToUser };
