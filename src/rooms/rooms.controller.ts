
import { Controller, Get, HttpStatus, UseGuards, Body, Query, Post, Delete, Param } from '@nestjs/common'
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { Rooms } from 'entities/rooms.entity'
import { User } from 'entities/user.entity'
import { UserScope } from 'src/auth/decorators/user.decorator'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth-guard'
import { CreateRoomsChatResponse } from './response/create-room-chat.dto'
import { CreateRoomsChatDto } from './dto/create-room-chat.dto'
import { RoomsService } from './rooms.service'

@ApiTags('rooms')
@Controller('rooms')
export class RoomsController {
  constructor(
    private readonly roomsService: RoomsService
  ) {
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Get list room for user'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: [CreateRoomsChatResponse]
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED
  })
  async getMyProfile(
    @UserScope() user: User
  ): Promise<Rooms[]> {
    return this.roomsService.findMyRooms(user)
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Create room for user'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: CreateRoomsChatResponse
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED
  })
  async createRoomChat(
    @UserScope() user: User,
    @Body() createRoomsChatDto: CreateRoomsChatDto
  ): Promise<Rooms> {
    return this.roomsService.createRoomChat(createRoomsChatDto, user)
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Delete room chat'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: CreateRoomsChatResponse
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED
  })
  async deleteRoomChat(
    @UserScope() user: User,
    @Param('id') id: number
  ) {
    return this.roomsService.deleteRoomChat(id,user)
  }

}
