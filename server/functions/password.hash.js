const bcrypt = require("bcryptjs");

const createHash = async password => {
    try {
        const salt = await bcrypt.genSaltSync(10);
        const hashed = await bcrypt.hashSync(password, salt);
        return hashed;
    } catch (error) {
        return null;
    }
};

const compareHashed = async (password, hashed) => {
    try {
        return await bcrypt.compareSync(password, hashed);
    } catch (error) {
        return false;
    }
};


module.exports = {createHash,compareHashed}