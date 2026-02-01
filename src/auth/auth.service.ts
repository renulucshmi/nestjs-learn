import { Injectable ,forwardRef, Inject} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(@Inject(forwardRef(()=>UsersService)) private readonly usersService:UsersService) {
    }

    isAuthenticated:Boolean=false;

    login(email:string, pwd:string) {
        const user=this.usersService.users.find(u=>u.email===email&&u.password===pwd)
        if(user){
            this.isAuthenticated=true;
            return 'MY_TOKEN';
        }
        return 'User does not exist!';
    }
}
