export class UsersService {
    users: { id: number, name: String, age: number, gender: string, isMarried: boolean }[] = [
        { id: 1, name: "Renu", age: 22, gender: "Female", isMarried: false },
        { id: 2, name: "John", age: 25, gender: "Male", isMarried: true },
    ]
    getAllUsers() {
        return this.users;
    }

    getUserById(id: number) {
        return this.users.find(x => x.id === id)
    }

    createUsers(user: { id: number, name: String, age: number, gender: string, isMarried: boolean }) {
        this.users.push(user)
    }
}