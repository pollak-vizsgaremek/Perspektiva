import { use } from "react";

export async function authMiddleware(req, res, next){
    if(req.options === "OPTIONS"){
        return next();
    }

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
        req.user = {
            id: decodedToken.id,
            email: decodedToken.email,
            role: decodedToken.role,
            accessEndPoints: decodedToken.accessEndPoints || [],
        };

        req.user = user;
        return next();

    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
}