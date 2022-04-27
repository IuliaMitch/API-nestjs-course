/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/shared/user.service';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UserService,
    ) {}


    async validateUser(userEmail: string, userPassword: string) {
        const user = await this.usersService.getByEmail(userEmail);
        if(user && user.password === userPassword) {
            const { _id, name, email } = user;
            return { id: _id, name, email }
        }
        return null
    }

}
