import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { UserService } from './users/shared/user.service';

@Module({
  imports: [TasksModule,
  MongooseModule.forRoot('mongodb://localhost:27017/users-db'),
  UsersModule],
  controllers: [AppController,],
  providers: [AppService, ],
})
export class AppModule {}
