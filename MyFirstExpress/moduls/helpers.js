var helpers = {
    validateFunction: function (req, res, role) {
        if (!req.session.user_logged_in) {
            response.message = "You Need To Login!";
            response.success = false;
            response.data = [];
            res.json(response);
        }
        if (!req.session.connected_user) {
            response.message = "You Need To Login!";
            response.success = false;
            response.data = [];
            res.json(response);
        }
        if (req.session.connected_user.role > role) {
            response.message = "You Are Not Allowed To Run this Function!!";
            response.success = false;
            response.data = [];
            res.json(response);
        }
    }
}

module.exports = helpers;