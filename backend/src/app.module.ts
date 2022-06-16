import { Module } from '@nestjs/common';
import { PrismaModule } from 'modules/prisma';
import { UserModule } from 'modules/users/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PrismaModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
