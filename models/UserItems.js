import { DataTypes } from 'sequelize';

export default (sequelize) => {
    return sequelize.define('user_item', {
        user_id: {
            type: DataTypes.STRING
        },
        item_id: {
            type: DataTypes.INTEGER
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
    }, {
        timestamps: false,
    });
};
