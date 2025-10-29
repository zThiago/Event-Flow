import { Controller, Get } from '@nestjs/common';
import { User } from 'src/interfaces/user.interface';

@Controller('users')
export class UsersController {
    @Get()
    findAll(): Promise<User[]> {
        return Promise.resolve([]);
    }

    @Get()
    findOne(): Promise<User> {
        return Promise.resolve({} as User);
    }

    
}