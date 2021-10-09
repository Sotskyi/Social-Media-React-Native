const express = require("express");
const {
  getAllActivities,
  addActivity,
  deleteActivity,
  updateActivity,
} = require("../controllers/activityController");

const activityRoutes = express.Router();

activityRoutes
  .route("/")
  .get(getAllActivities)
  .post(addActivity)
  .put(updateActivity);

activityRoutes.route("/:id").delete(deleteActivity);

module.exports = activityRoutes;
