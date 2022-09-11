import { ApiProperty } from '@nestjs/swagger'
import {
    IsEmail,
    IsNotEmpty,
    IsNumber,
} from 'class-validator'

export class SignupDto {
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({
        type: 'email',
        default: 'anh.nguyen5@sotatek.com'
    })
    email: string

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({
        type: 'number',
        default: 123456
    })
    otp: number
}
