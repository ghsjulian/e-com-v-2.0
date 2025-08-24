const deleteImages = require("../functions/delete.images");
const userModel = require("../models/user.model");

const deleteCustomer = async (req, res) => {
    try {
        const { customer_id } = req?.params;
        if (!customer_id) throw new Error("Customer ID is undefined");
        const isCustomer = await userModel.findById(customer_id);
        if (!isCustomer) throw new Error("Customer not found in the server");
        // await deleteImages(isProduct?.product_images);
        const deleteStatus = await userModel.findByIdAndDelete(customer_id);
        if (!deleteStatus) throw new Error("Customer Deleted Failed");
        return res.status(200).json({
            success: true,
            message: "Customer deleted successfully"
        });
    } catch (error) {
        return res.status(403).json({
            success: false,
            message: error.message || "Unexpected Server Error"
        });
    }
};

module.exports = deleteCustomer;
