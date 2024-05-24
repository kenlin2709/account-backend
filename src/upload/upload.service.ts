import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export const S3_IMAGE_LINK_PREFIX = 'https://aurifyproduct.s3.ap-southeast-2.amazonaws.com/product-images/'

@Injectable()
export class UploadService {
  private readonly s3Client = new S3Client({
    region: this.configService.getOrThrow('AWS_S3_REGION'),
  });
  constructor(private readonly configService: ConfigService) {}

  async upload(fileName: string, file: Buffer): Promise<string> {
    await this.s3Client.send(
        new PutObjectCommand({
            Bucket: 'aurifyproduct',
            ACL: 'public-read',
            Key: 'product-images/' + fileName,
            Body: file,
        })
    )
    return S3_IMAGE_LINK_PREFIX + fileName;
  }
}
