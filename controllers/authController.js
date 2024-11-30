const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists " });
    }

    // hashing password before saving it to the database in the User model (User.js)

    const user = new User({ username, password, role });
    await user.save();
    res.status(201).json({ message: "User registered" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && (await user.comparePassword(password))) {
      req.session.user = { id: user._id, role: user.role };
      return res.json({ message: "Logged in" });
    }
    res.status(401).json({ message: "Invalid credentials" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.logout = (req, res) => {
  req.session.destroy(() => res.json({ message: "Logged out" }));
};
