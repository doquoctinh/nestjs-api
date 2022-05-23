import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuhController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuhController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
