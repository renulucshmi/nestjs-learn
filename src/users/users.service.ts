import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
    users: { id: number, name: string, email: string, gender: string, isMarried: boolean }[] = [
        { id: 1, name: "Renu", email: "renu@gmail.com", gender: "Female", isMarried: false },
        { id: 2, name: "Adeepa", email: "adeepa@gmail.com", gender: "Male", isMarried: false },
        { id: 3, name: "John", email: "john@gmail.com", gender: "Male", isMarried: true },
    ]
    getAllUsers() {
        return this.users;
    }

    getUserById(id: Number) {
        return this.users.find(x => x.id === id)
    }

    createUsers(user: { id: number, name: string, email: string, gender: string, isMarried: boolean }) {
        this.users.push(user)
    }
}