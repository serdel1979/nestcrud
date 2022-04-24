import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RealStateModule } from './real_state_sets/realState.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    RealStateModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
