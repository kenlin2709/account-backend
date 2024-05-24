import { Body, Controller, FileTypeValidator, MaxFileSizeValidator, ParseFilePipe, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 10000000 }),
          // new FileTypeValidator({fileType: 'image/jpeg'}),
        ],
      }),
    )
    file: Express.Multer.File,
    @Body() body,
  ) {
    console.log(file);
    const filePath = await this.uploadService.upload(
      file.originalname,
      file.buffer,
      file.mimetype,
      body.itemCode,
    );
    return { filePath };
  }

  @Post('multiple')
  @UseInterceptors(FilesInterceptor('files'))
  async uploadFiles(
    @UploadedFiles()
    files: Array<Express.Multer.File>,
    @Body() body,
  ) {
    return await Promise.all(files.map(async (file, index) => {
        const filePath = await this.uploadService.upload(
            file.originalname,
            file.buffer,
            file.mimetype,
            body.itemCode + '/' + body.itemCode + '-' + index,
        );
        return filePath;
    }));
  }
}
