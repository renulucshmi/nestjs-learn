import { Injectable ,forwardRef, Inject} from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class UsersService {
    constructor(@Inject(forwardRef(()=>AuthService)) private readonly authService: AuthService) {
    }
    users: { id: number, name: string, email: string, gender: string, isMarried: boolean , password:string}[] = [
        { id: 1, name: "Renu", email: "renu@gmail.com", gender: "Female", isMarried: false , password:'1234'},
        { id: 2, name: "Adeepa", email: "adeepa@gmail.com", gender: "Male", isMarried: false , password:'1234'},
        { id: 3, name: "John", email: "john@gmail.com", gender: "Male", isMarried: true , password:'1234'},
    ]
    getAllUsers() {
        if(this.authService.isAuthenticated){
            return this.users;
        }
        return 'You are not logged in!';
    }

    getUserById(id: number) {
        return this.users.find(x => x.id === id)
    }

    createUsers(user: { id: number, name: string, email: string, gender: string, isMarried: boolean , password:string}) {
        this.users.push(user);
    }
}