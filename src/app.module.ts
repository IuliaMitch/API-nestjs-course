import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { UserService } from './users/shared/user.service';

@Module({
  imports: [
    AuthModule, TasksModule,
    MongooseModule.forRoot('mongodb://localhost:27017/admin'),
    UsersModule],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule { }
