import { DataTypes, Model, Optional } from 'sequelize';
import db from '../db_connection';
import Comment from './commentModel';

interface PostAttributes {
  id: number;
  title: string;
  content: string;
  created_at: Date;
}

interface PostCreationAttributes extends Optional<PostAttributes, 'id'> {}

interface PostModel extends Model<PostAttributes, PostCreationAttributes>, PostAttributes {}

const Post = db.dbConn.define<PostModel>(
  'posts',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
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

Post.hasMany<Comment, 'post_id'>(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

export default Post;
