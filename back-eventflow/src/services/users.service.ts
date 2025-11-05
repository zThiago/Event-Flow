import { ConflictException, Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { User } from "src/interfaces/user.interface";
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService){}

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
        return this.prisma.user.create({data: {...userData, password: hashedPassword}})
    }

    async update(id: number, userData: User){
        return this.prisma.user.update({where: {id}, data: userData});
    }

    async delete(id: number){
        return this.prisma.user.delete({where: {id}});
    }
}