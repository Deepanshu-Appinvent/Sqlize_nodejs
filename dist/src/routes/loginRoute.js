"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginController_1 = __importDefault(require("../controllers/loginController"));
const router = express_1.default.Router();
// Login route
router.post('/', loginController_1.default.loginController);
exports.default = router;
//# sourceMappingURL=loginRoute.js.map