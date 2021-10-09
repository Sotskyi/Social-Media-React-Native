const ActivityModel = require("../models/activityModel");

exports.getAllActivities = async (req, res) => {
  try {
    const allActivities = await ActivityModel.find();

    return res.status(200).json({
      succes: true,
      data: allActivities,
    });
  } catch (err) {
    return res.status(500).json({
      succes: false,
      error: "Server error",
    });
  }
};

exports.addActivity = async (req, res) => {
  try {
    const activity = await ActivityModel.create(req.body);

    return res.status(201).json({
      succes: true,
      data: activity,
    });
  } catch (err) {
    return res.status(400).json({
      succes: false,
      error: "Server error",
    });
  }
};

exports.deleteActivity = async (req, res) => {
  try {
    const activity = await ActivityModel.findOneAndDelete(req.param.id);

    return res.status(200).json({
      sucess: true,
      data: activity,
    });
  } catch (err) {
    return res.status(500).json({
      succes: false,
      error: "Server error",
    });
  }
};
exports.updateActivity = async (req, res) => {
  try {
    console.log(req.body._id);
    const activity = await ActivityModel.findById(req.body._id);

    activity.message = req.body.message;
    console.log(activity);
    activity.save();

    return res.status(200).json({
      sucess: true,
      data: activity,
    });
  } catch (err) {
    return res.status(500).json({
      succes: false,
      error: "Server error",
    });
  }
};
