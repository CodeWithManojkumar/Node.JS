const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
} = require("../controllers/task");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
router
  .route("/")
  .get(bodyParser.json(), getAllTasks)
  .post(bodyParser.json(), createTask);

router
  .route("/:id")
  .get(bodyParser.json(), getSingleTask)
  .patch(bodyParser.json(), updateTask)
  .delete(bodyParser.json(), deleteTask);

module.exports = router;
