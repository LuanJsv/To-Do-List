const express = require("express");

const router = express.Router();

const tasksController = require("./controllers/tasksControllers");
const tasksMiddleware = require("./middlewares/tasksMiddleware");

router.get("/tasks", tasksController.getALL);
router.post("/tasks", tasksMiddleware.validateBody, tasksController.createTask);
router.delete("/tasks/:id", tasksController.deleteTask);
router.put(
  "/tasks/:id",
  tasksMiddleware.validateBody,
  tasksMiddleware.validateFieldStatus,
  tasksController.updateTask
);

module.exports = router;
