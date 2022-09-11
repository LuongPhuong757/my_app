import { BadRequestException, Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { UserOtp } from "entities/user-otp-code.entity"
import { User } from "entities/user.entity"
import { OTP_TYPE } from "src/user-otp/constant"
import { UserOtpService } from "src/user-otp/user-otp.service"
import { UserService } from "src/user/user.service"
import { Repository } from "typeorm"
import { ROLE } from "./constants"
import { SignupDto } from "./dtos/signup.dto"

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly userOtpService: UserOtpService
  ) { }

  async signup(dto: SignupDto): Promise<User> {
    const user = await this.userService.findByEmail(dto.email)
    if (user) {
      throw new BadRequestException('Email already exists')
    }

    await this.userOtpService.verifyOtp({
      otp: dto.otp,
      email: dto.email,
      otpType: OTP_TYPE.SIGN_UP
    })

    if (!user) {
      return this.userRepository.save({
        email: dto.email,
        roles: [ROLE.USER]
      })
    }
    return user
  }
}
