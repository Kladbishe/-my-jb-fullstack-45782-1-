import { AllowNull, Column, DataType, Default, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import Book from "./Books";


@Table({
    underscored: true
})
export default class Author extends Model {

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    authorId: string

    @AllowNull(false)
    @Column(DataType.STRING)
    name: string

    @AllowNull(false)
    @Column(DataType.STRING)
    lastName: string

     @HasMany(() => Book, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    games: Book[]
  
}