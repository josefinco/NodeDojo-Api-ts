class Helper{
    sendResponse = function (res, statuscode, data) {
        res.status(statuscode).json({ result: data })
    };
}

export default new Helper();