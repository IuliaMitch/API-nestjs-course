import { AuthController } from './auth.controller';
import { AuthService } from './shared/auth.service';
import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { localStrategy } from './shared/local.strategy';

@Module({
    imports: [
        UsersModule
    ],
    controllers: [
        AuthController,],
    providers: [
        AuthService, localStrategy
    ],
})
export class AuthModule { }
