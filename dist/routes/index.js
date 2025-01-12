"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setRoutes = setRoutes;
const index_1 = require("../controllers/index");
function setRoutes(app) {
    app.get('/', (req, res) => {
        (0, index_1.getIndex)(req, res);
    });
}
