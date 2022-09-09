import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
// import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
    useFactory: async () => ({
      type: 'mysql',
      host: 'localhost',
      port: 3311,
      username: 'root',
      password: '1',
      database: 'my_app',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
      // Timezone configured on the MySQL server.
      // This is used to typecast server date/time values to JavaScript Date object and vice versa.
      timezone: 'Z',
      synchronize: true,
    }),
    // dataSourceFactory: async (options) => {
    //   const dataSource = await new DataSource(options).initialize();
    //   return dataSource;
    // },
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
