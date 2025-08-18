const setCookie = (res, token) => {
    res.cookie("authapp", token, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/"
    });
    return true;
};

module.exports = setCookie;
