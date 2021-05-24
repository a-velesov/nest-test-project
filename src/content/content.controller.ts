import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { CreateContentDto } from "./dto/create-content.dto";
import { ContentService } from "./content.service";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("content")
export class ContentController {
  constructor(private contentService: ContentService) {
  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  createContent(@Body() dto: CreateContentDto,
                @UploadedFile() image) {
    return this.contentService.create(dto, image);
  }
}
