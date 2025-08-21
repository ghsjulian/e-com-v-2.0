const fs = require("fs").promises;
const path = require("path");

const deleteImages = async images => {
    try {
        if (!Array.isArray(images)) {
            throw new Error("Images must be an array of URLs or filenames");
        }

        for (const img of images) {
            // Extract filename from URL
            const filename = path.basename(img);

            // Build local path (adjust 'uploads/products' to your setup)
            const filePath = path.resolve(
                __dirname,
                "../products",
                filename
            );

            try {
                await fs.unlink(filePath);
                // console.log(`Deleted: ${filePath}`);
                return true
            } catch (err) {
                if (err.code === "ENOENT") {
                   // console.warn(`File not found: ${filePath}`);
                   return false
                } else {
                    //console.error(`Error deleting ${filePath}:`, err);
                    return false
                }
            }
        }
    } catch (error) {
      //  console.error("deleteImages error:", error);
      return false
    }
};

module.exports = deleteImages;
