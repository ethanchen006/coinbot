import { DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
});
import UsersModel from './models/Users.js';
import CurrencyShopModel from './models/CurrencyShop.js';
import UserItemsModel from './models/UserItems.js';
const Users = UsersModel(sequelize, DataTypes);
const CurrencyShop = CurrencyShopModel(sequelize, DataTypes);
const UserItems = UserItemsModel(sequelize, DataTypes);
UserItems.belongsTo(CurrencyShop, { foreignKey: 'item_id', as: 'item' });

Reflect.defineProperty(Users.prototype, 'addItem', {
	value: async item => {
		const userItem = await UserItems.findOne({
			where: { user_id: this.user_id, item_id: item.id },
		});

		if (userItem) {
			userItem.amount += 1;
			return userItem.save();
		}

		return UserItems.create({ user_id: this.user_id, item_id: item.id, amount: 1 });
	},
});

Reflect.defineProperty(Users.prototype, 'getItems', {
	value: () => {
		return UserItems.findAll({
			where: { user_id: this.user_id },
			include: ['item'],
		});
	},
});

export {Users, CurrencyShop, UserItems}
