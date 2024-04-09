import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  }

  async generateJwt(userId: number): Promise<string> {
    const payload = { sub: userId };
    return this.jwtService.signAsync(payload);
  }

  async validateUserById(id: string): Promise<string> {
    const payload = { sub: id };
    return this.jwtService.signAsync(payload);
  }
}
