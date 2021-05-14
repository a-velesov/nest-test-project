import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../roles/user-roles.model";

interface UserCreateAttrs {
  email: string,
  password: string
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreateAttrs> {
  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({example: 'test@test.ru', description: 'Email'})
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({example: '1q2w3e', description: 'Пароль'})
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({example: 'true', description: 'Забанен или нет'})
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;

  @ApiProperty({example: 'Использование JS', description: 'Причина бана'})
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}