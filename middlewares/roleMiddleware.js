const roleCheck = (roles) => {
  return (req, res, next) => {
    const userRole = req.session.user?.role;
    if (!userRole || !roles.includes(userRole)) {
      return res.status(403).send({ message: "Forbidden: Insufficient Role" });
    }
    next();
  };
};

module.exports = roleCheck;
