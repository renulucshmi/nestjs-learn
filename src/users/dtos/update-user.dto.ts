import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class UpdateUserDto {
    @IsNumber()
    @IsOptional()
    id: number;

    @IsString({ message: 'Name must be a string' })
    @IsNotEmpty()
    @MinLength(3, { message: 'Name must be at least 3 characters long' })
    @IsOptional()
    name: string;

    @IsEmail()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    gender: string;

    @IsOptional()
    @IsBoolean()
    isMarried: boolean;
}