import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";

interface UserCreationAttrs {
    name: string;
    email: string;
    message: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @Column({type: DataType.STRING, allowNull: false})
    email: string;

    @Column({type: DataType.STRING, allowNull: false})
    message: string;

}