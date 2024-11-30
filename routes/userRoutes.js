const express = require("express");
const roleCheck = require("../middlewares/roleMiddleware");

const router = express.Router();

/**
 * @swagger
 * /details/public:
 *   get:
 *     summary: Public page accessible to all roles
 *     responses:
 *       200:
 *         description: Public page content
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "This is a public page."
 */
router.get("/public", roleCheck(["Admin", "User", "Moderator"]), (req, res) => {
  res.send("This is a public page.");
});

/**
 * @swagger
 * /details/edit:
 *   get:
 *     summary: Edit page accessible to Admin and Moderator roles
 *     responses:
 *       200:
 *         description: edit page content
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "Welcome to editor!"
 *       403:
 *         description: Insufficient role
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Forbidden: Insufficient Role"
 */
router.get("/edit", roleCheck(["Admin", "Moderator"]), (req, res) => {
  res.send("Welcome to Editor!");
});

/**
 * @swagger
 * /details/dashboard:
 *   get:
 *     summary: Admin dashboard accessible only to Admin role
 *     responses:
 *       200:
 *         description: Dashboard content
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "Welcome to the Admin Dashboard!"
 *       403:
 *         description: Insufficient role
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Forbidden: Insufficient Role"
 */
router.get("/dashboard", roleCheck(["Admin"]), (req, res) => {
  res.send("Welcome to the Admin Dashboard!");
});

module.exports = router;
