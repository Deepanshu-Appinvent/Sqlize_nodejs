"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCommentController = void 0;
const deleteCommentServices_1 = require("../services/deleteCommentServices");
function deleteCommentController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.body;
            const comment = yield (0, deleteCommentServices_1.deleteComment)(id);
            if (!comment) {
                res.status(404).json({ status: 'Not Found' });
            }
            else {
                res.status(200).json({ status: 'Comment deleted successfully' });
            }
        }
        catch (error) {
            res.status(502).json({ status: 'Bad Gateway' });
        }
    });
}
exports.deleteCommentController = deleteCommentController;
//# sourceMappingURL=deleteCommentController.js.map