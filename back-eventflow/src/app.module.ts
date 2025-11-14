import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './modules/users.module';
import { EventsModule } from './modules/events.module';
import { RegistrationsModule } from './modules/registrations.module';
import { PrismaModule } from './modules/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    UsersModule,
    EventsModule,
    RegistrationsModule,
  ],
})
export class AppModule {}