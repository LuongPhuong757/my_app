import { Body, Controller, HttpStatus, Post } from "@nestjs/common"
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger"
import { User } from "entities/user.entity"
import { BaseApiResponse, SwaggerBaseApiResponse } from "src/shared/dtos/base-api-response.dto"
import { AuthService } from "./auth.service"
import { SignupDto } from "./dtos/signup.dto"

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @Post('signup')
  @ApiOperation({
    summary: 'User signup first step API'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: SwaggerBaseApiResponse(User)
  })
  async signupFirstStep(
    @Body() dto: SignupDto
  ): Promise<BaseApiResponse<User>> {
    const registeredUser = await this.authService.signup(dto)
    return { data: registeredUser, meta: {} }
  }
}
