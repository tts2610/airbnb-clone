const { Model } = require("mongoose");
const { all } = require("../routes/experience");

exports.deleteOne = (Model) => async(req, res, next) => {
    try {
        let filterObj = {};
        if ((Model.modelName = "Experience")) {
            filterObj._id = req.params.expId;
            filterObj.userId = req.user._id;
        } else if ((Model.modelName = "Review")) {
            filterObj._id = req.params.rid;
            filterObj.user = req.user._id;
        }
        const doc = await Model.findOneAndDelete(filterObj);
        if (!doc) return res.status(404).json({ status: "fail", message: "No document found!" });
        res.status(200).json({ status: "success", message: "deleted successfullly" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: "error", message: error.message });
    }
};

exports.updateOne = (Model) => async(req, res, next) => {
    try {
        let filterObj = {};
        let allows = [];
        if ((Model.modelName = "Experience")) {
            filterObj._id = req.params.expId;
            filterObj.userId = req.user._id;
            allows = ["title", "description", "tags"];
        } else if ((Model.modelName = "Review")) {
            filterObj._id = req.params.rid;
            filterObj.user = req.user._id;
            allows = ["rating", "review"];
        }
        let doc = await Model.findOne(filterObj);
        if (!doc) return res.status(404).json({ status: "fail", message: "No document found!" });

        for (key in req.body) {
            if (allows.includes(key)) {
                doc[key] = req.body[key];
            }
        }
        await doc.save();

        res.status(200).json({ status: "success", message: doc });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: "error", message: error.message });
    }
};