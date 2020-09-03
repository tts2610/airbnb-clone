exports.deleteOne = (Model) => async(req, res, next) => {
    try {
        let filterObj = {};
        if ((Model.modelName = "Exp")) {
            filterObj._id = req.params.eid;
            filterObj.host = req.user._id;
        } else if ((Model.modelName = "Review")) {
            filterObj._id = req.params.rid;
            filterObj.user = req.user._id;
        }
        const doc = await Model.findOneAndDelete(filterObj);
        if (!doc) return res.status(404).json({ status: "fail", message: "Mp document found!" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: "error", message: error.message });
    }
};