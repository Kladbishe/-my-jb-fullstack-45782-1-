import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import Author from "./Authors";


@Table({
    underscored: true
})
export default class Book extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @ForeignKey(() => Author)
    @AllowNull(false)
    @Column(DataType.UUID)
    authorId: string 


    @AllowNull(false)
    @Column(DataType.STRING)
    bookName: string

    @AllowNull(false)
    @Column(DataType.INTEGER)
    numOfPages: number

    @AllowNull(true)
    @Column(DataType.INTEGER)
    price: number

    @BelongsTo(() => Author)
    audience: Author

}