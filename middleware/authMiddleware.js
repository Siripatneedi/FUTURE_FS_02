const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    try {

        // Get token from request header
        const token = req.header("Authorization");

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Access Denied. No Token Provided."
            });
        }

        // Remove "Bearer " from the token
        const actualToken = token.startsWith("Bearer ")
            ? token.slice(7)
            : token;

        // Verify token
        const decoded = jwt.verify(
            actualToken,
            process.env.JWT_SECRET
        );

        // Store user information in request
        req.user = decoded;

        next();

    } catch (error) {

        return res.status(401).json({
            success: false,
            message: "Invalid or Expired Token"
        });

    }
};

module.exports = authMiddleware;