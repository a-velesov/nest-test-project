import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { User } from "../users/users.model";

interface ContentCreateAttrs {
  title: string,
  description: string,
  userId: number,
  image: string
}

@Table({ tableName: "content" })
export class Content extends Model<Content, ContentCreateAttrs> {
  @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: "Заголовок", description: "Заголовок" })
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @ApiProperty({ example: "Контент", description: "Контент" })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @ApiProperty({ example: "...jpg", description: "Название изображения" })
  @Column({ type: DataType.STRING })
  image: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}