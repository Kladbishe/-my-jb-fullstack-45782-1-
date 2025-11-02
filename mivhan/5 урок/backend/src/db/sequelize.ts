import { Sequelize } from "sequelize-typescript";
import config from 'config'
import Region from "../models/Region";
import Site from "../models/Site";


const sequelize = new Sequelize({
    ...config.get('db'),
    dialect: 'mysql',
    models: [Region, Site], //изменить надо!!!
    logging: console.log
})

export default sequelize