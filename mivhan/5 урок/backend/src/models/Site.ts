import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import Region from "./Region";


@Table({
    underscored: true
})
export default class Site extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @ForeignKey(() => Region)
    @AllowNull(false)
    @Column(DataType.UUID)
    regionId: string 


    @AllowNull(false)
    @Column(DataType.STRING)
    name: string

    @AllowNull(false)
    @Column(DataType.TEXT)
    description: string

    @AllowNull(true)
    @Column(DataType.INTEGER)
    priceAdult: number

    @AllowNull(true)
    @Column(DataType.INTEGER)
    priceChild: number

    @BelongsTo(() => Region)
    audience: Region

}