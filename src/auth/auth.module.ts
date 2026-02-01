import {  forwardRef,Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { userModule } from 'src/users/users.module';

@Module({
    controllers:[AuthController],
    providers:[AuthService],
    imports:[forwardRef(()=>userModule)],
    exports:[AuthService]
}) 
export class AuthModule {}
