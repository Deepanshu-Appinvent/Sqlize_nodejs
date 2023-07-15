"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const deleteCommentController_1 = require("../controllers/deleteCommentController");
const router = express_1.default.Router();
router.delete('/comments/:id', deleteCommentController_1.deleteCommentController);
exports.default = router;
//# sourceMappingURL=deleteCommentRoute.js.map