import { ConflictException, Injectable, UseInterceptors } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { User } from "src/interfaces/user.interface";
import { UserRole } from "@prisma/client";
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService){}

    async findAll() {
        return this.prisma.user.findMany();
    }

    async findByEmail(email: string) {
        return this.prisma.user.findUnique({where: {email: email}});
    }

    async findById(id: number) {
        return this.prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                email: true,
                nome: true,
                role: true
            }
        });
    }

    async create(userData: User){
        const registered = await this.findByEmail(userData.email);
        if(registered){
            throw new ConflictException('Email já cadastrado');
        }
        const hashedPassword = await bcrypt.hash(userData.password, 12);
        return this.prisma.user.create({data: {...userData, role: UserRole.USER,password: hashedPassword}})
    }

    async update(id: number, userData: User){
        return this.prisma.user.update({where: {id}, data: userData});
    }

    async delete(id: number){
        return this.prisma.user.delete({where: {id}});
    }

    async getUserEvents(userId: number) {
        return this.prisma.event.findMany({
          where: { 
            creatorId: userId,
            ativo: true 
          },
          include: {
            _count: {
              select: {
                participantes: {
                  where: {
                    status: 'CONFIRMADO',
                  },
                },
              },
            },
          },
          orderBy: { createdAt: 'desc' },
        });
      }
}