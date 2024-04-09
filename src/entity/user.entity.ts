import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_Name: string;

  @Column()
  last_Name: string;

  @Column()
  email: string;

  @Column()
  avatar: string;
}
