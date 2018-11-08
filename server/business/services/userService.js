const User = require('business/models/User');

const find = async (user) => {
    return await User.find(user);
};

const findOne = async (user) => {
    return await User.findOne(user)
};

const findOrCreate = async (user) => {
    const result = await User.findOne({ email: user.email })
    if(result) return result;
    else return await User.create(user);
}

const findById = async (id) => {
    const user = await User.findById(id)
    return user.toObject({virtuals: true});
};

const findUserByEmail = async (email) => {
    const user = await User.findOne({ email })
    return user.toObject({virtuals: true});
};

const getAll = async () => {
    return await User.find({});
};

const update = async (updatedUser) => {
    await User.findOneAndUpdate({ _id: updatedUser._id }, updatedUser, { new: true, upsert: true });
    const updatedUserDoc = await User.findById(updatedUser._id);
    return updatedUserDoc.toObject({virtuals: true});
}

const search = async (partialEmail) => {
    const results = await User.find({ 'email': { '$regex': partialEmail, '$options': 'i' } });
    return results;
}
const getPermissionsList = () => {
    const modelList = [];
    for(let model in models) {
        modelList.push(model);
    }
    return modelList;
}

module.exports = {
    find,
    findOne,
    findById,
    findOrCreate,
    findUserByEmail,
    update,
    search,
    getAll,
    getPermissionsList,
}