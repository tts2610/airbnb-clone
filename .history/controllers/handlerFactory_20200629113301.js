exports.deleteOne = (Model) => async(req, res, next) => {
    try {
        let filterObj = {};
        if ((Model.modelName = "Experience")) {
            console.log(req.params.expId);
            console.log(req.user._id);
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