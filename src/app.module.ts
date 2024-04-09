import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controller/user.controller';
import { ImagesController } from './controller/image.controller';
import { UserService } from './service/user.service';
import { ImagesService } from './service/images.service';
import { UserEntity } from './entity/user.entity';
import { ImageEntity } from './entity/image.entity';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthService } from './service/auth.service';
import { AuthController } from './controller/auth.controller';
import { AppController } from './app.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '020410',
      database: 'postgres',
      entities: [UserEntity, ImageEntity],
      synchronize: false,
      migrations: ['dist/migrations/**/*.ts'],
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: '123456',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [
    UsersController,
    ImagesController,
    AuthController,
    AppController,
  ],
  providers: [
    UserService,
    ImagesService,
    AppService,
    AuthService,
    CreateUserDto,
    JwtModule,
  ],
})
export class AppModule {}
