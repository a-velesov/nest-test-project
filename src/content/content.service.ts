import { Injectable } from "@nestjs/common";
import { CreateContentDto } from "./dto/create-content.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Content } from "./content.model";
import { FilesService } from "../files/files.service";

@Injectable()
export class ContentService {
  constructor(@InjectModel(Content) private contentRepository: typeof Content,
              private fileService: FilesService) {
  }

  async create(dto: CreateContentDto, image: any) {
    const fileName = await this.fileService.createFile(image);
    const content = await this.contentRepository.create({ ...dto, image: fileName });
    return content;
  }
}
