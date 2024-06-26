import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { UploadModule } from './upload/upload.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://kenlin2709:78FgAXzhFyjl3UfK@account.9yvfnmz.mongodb.net/?retryWrites=true&w=majority&appName=account',
    ),
    UserModule,
    ProductModule,
    UploadModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
