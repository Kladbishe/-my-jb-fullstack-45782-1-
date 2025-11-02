import { Sequelize } from "sequelize-typescript";
import config from 'config'

import Author from "../models/Authors";
import Book from "../models/Books";

const sequelize = new Sequelize({
    ...config.get('db'),
    dialect: 'mysql',
    models: [Author,Book], 
    logging: console.log
})

export default sequelize