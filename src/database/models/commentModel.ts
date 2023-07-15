import { DataTypes, Model, Optional } from 'sequelize';
import db from '../db_connection';
import Post from './postModel';

interface CommentAttributes {
  id: number;
  post_id: number;
  content: string;
  created_at: Date;
}

interface CommentCreationAttributes extends Optional<CommentAttributes, 'id'> {}

interface CommentModel
  extends Model<CommentAttributes, CommentCreationAttributes>,
    CommentAttributes {}

const CommentModel = db.dbConn.define<CommentModel>(
  'comments',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Post, 
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
  }
);

CommentModel.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

export default CommentModel;
