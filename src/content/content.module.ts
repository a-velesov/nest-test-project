import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "../users/users.model";
import { Content } from "./content.model";
import { FilesModule } from "../files/files.module";

@Module({
  providers: [ContentService],
  controllers: [ContentController],
  imports: [
    SequelizeModule.forFeature([User, Content]),
    FilesModule
  ],
})
export class ContentModule {}
