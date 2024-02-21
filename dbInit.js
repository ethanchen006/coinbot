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

const force = process.argv.includes('--force') || process.argv.includes('-f');

sequelize.sync({ force }).then(async () => {
	const shop = [
		CurrencyShop.upsert({ name: 'Tea', cost: 1 }),
		CurrencyShop.upsert({ name: 'Coffee', cost: 2 }),
		CurrencyShop.upsert({ name: 'Cake', cost: 5 }),
	];

	await Promise.all(shop);
	console.log('Database synced');

	sequelize.close();
}).catch(console.error);