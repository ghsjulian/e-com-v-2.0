const express = require("express");
const router = express.Router();
const isAuth = require("../auth/is.auth");
const signupController = require("../user-controllers/signup.controller");
const loginController = require("../user-controllers/login.controller");
const getUserController = require("../user-controllers/get-user.controller");
const verifyOTP = require("../user-controllers/verify-otp.controller");
const resetPassword = require("../user-controllers/reset-password.controller");
const updateProfilePic = require("../user-controllers/profile-pic.controller");
const updatePersonalInfo = require("../user-controllers/edit-personal-info.controller");
const changePassword = require("../user-controllers/change-password.controller");
const userLogoutController = require("../user-controllers/user-logout.controller");
const userDeleteController = require("../user-controllers/delete-account.controller");

router.post("/signup", signupController);
router.post("/login", loginController);
router.post("/verify-otp",isAuth, verifyOTP);
router.post("/reset-password", resetPassword);
router.post("/logout", isAuth, userLogoutController);
router.post("/delete-account", isAuth, userDeleteController);
router.get("/get-user", isAuth, getUserController);
router.put("/update-profile-pic", isAuth, updateProfilePic);
router.put("/update-personal-info", isAuth, updatePersonalInfo);
router.put("/change-password", isAuth, changePassword);

module.exports = router;
