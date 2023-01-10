import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Rooms } from 'entities/rooms.entity'
import { RoomsController } from './rooms.controller'
import { RoomsService } from './rooms.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Rooms
    ])
  ],
  providers: [RoomsService],
  controllers: [RoomsController],
  exports: []
})
export class RoomsModule { }
