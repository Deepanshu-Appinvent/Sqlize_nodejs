"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_connection_1 = __importDefault(require("../db_connection"));
const postModel_1 = __importDefault(require("./postModel"));
const CommentModel = db_connection_1.default.dbConn.define('comments', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    post_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: postModel_1.default,
            key: 'id',
        },
        onDelete: 'CASCADE',
    },
    content: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
}, {
    timestamps: false,
});
CommentModel.belongsTo(postModel_1.default, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});
exports.default = CommentModel;
//# sourceMappingURL=commentModel.js.map