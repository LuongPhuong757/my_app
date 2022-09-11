import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserOtp } from 'entities/user-otp-code.entity'
import { User } from 'entities/user.entity'
import { MailModule } from 'src/mail/mail.module'
import { UserOtpController } from './user-otp.controller'
import { UserOtpService } from './user-otp.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserOtp, User
    ]),
    MailModule
  ],
  providers: [UserOtpService],
  controllers: [UserOtpController],
  exports: [UserOtpService]
})
export class UserOtpModule { }
