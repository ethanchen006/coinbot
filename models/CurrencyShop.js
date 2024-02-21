import { DataTypes } from 'sequelize';

export default (sequelize) => {
  return sequelize.define('currency_shop', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    cost: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });
};