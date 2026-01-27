import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    id: number;
    @IsString({ message: 'Name must be a string' })
    @IsNotEmpty()
    @MinLength(3, { message: 'Name must be at least 3 characters long' })
    name: string;
    @IsEmail()
    email: string;
    @IsString()
    @IsOptional()
    gender: string;

    @IsBoolean()
    isMarried: boolean;
}