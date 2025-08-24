const settingsModel = require("../models/settings.model");

const createCategory = async (req, res) => {
    try {
        const { category } = req?.body;

        if (!category || category === "")
            throw new Error("Category is required");

        const isExistSettings = await settingsModel.find();
        if (isExistSettings?.length > 0) {
            const newCategory = await settingsModel.updateOne(
                    {$push: { category: category }
                }
            );
            const settings = await settingsModel.find();
            return res.status(201).json({
                success: true,
                settings,
                message: "Category Created successfully"
            });
        } else {
            const newCategory = await new settingsModel({
                site_name: "127.0.0.1",
                category
            });
            await newCategory.save();
            return res.status(201).json({
                success: true,
                newCategory,
                message: "Category Created successfully"
            });
        }
    } catch (error) {
        return res.status(403).json({
            success: false,
            message: error.message || "Unexpected Server Error"
        });
    }
};

module.exports = createCategory;
