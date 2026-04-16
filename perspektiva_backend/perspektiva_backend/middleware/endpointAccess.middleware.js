export default function endpointAccessMiddleware(req, res, next) {
    const user = req.user;

    if (!user) {
        return res.status(403).json({ message: "Forbidden" });
    }

    if (user.role === "admin") return next();

    const accessEndPoints = user.accessEndPoints;

    if (!accessEndPoints || !Array.isArray(accessEndPoints)) {
        return res.status(403).json({ message: "access denied" });
    }

    const endpoint = req.originalUrl;
    const method = req.method;

    if(endpoint.includes("self")) return next();

    const hasAccess = accessEndPoints.some((access) => 
        endpoint.includes(access.endpoint) && access.methods.includes(method)
    );

    if (hasAccess) {
        return next();
    }

    return res.status(403).json({ message: "access denied" });
}

