import { AllowNull, BelongsTo, Column, DataType, Default, ForeignKey, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import Site from "./Site";
@Table({
    underscored: true
})
export default class Region extends Model {

@PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @AllowNull(false)
    @Column(DataType.STRING)
    name: string

    @HasMany(() => Site, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    games: Site[]
}
