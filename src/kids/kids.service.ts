import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class KidsService {
    constructor(private readonly prisma: PrismaService) { }

    async getAllKids() {
        return this.prisma.kids.findMany({ include: { gift_kid: true } });
    }

    async getKidById(id: number) {
        try {
            return await this.prisma.kids.findUniqueOrThrow({
                where: { id },
                include: { gift_kid: true },
            });
        } catch (error) {
            if (error.code === 'P2025') {
                throw new NotFoundException('Kid not found');
            }
            throw new BadRequestException('Invalid request');
        }
    }

    async createKid(data: Prisma.kidsCreateInput) {
        return this.prisma.kids.create({ data });
    }

    async updateKid(id: number, data: Prisma.kidsUpdateInput) {
        try {
            return await this.prisma.kids.update({ where: { id }, data });
        } catch (error: any) {
            if (error.code === 'P2025') {
                throw new NotFoundException('Kid not found');
            }
            throw new BadRequestException('Invalid request');
        }
    }
    

    async deleteKid(id: number) {
        try {
            await this.prisma.gift_kid.deleteMany({
                where: { kid: id },
            });
            return await this.prisma.kids.delete({
                where: { id },
            });
        } catch (error) {
            if (error.code === 'P2025') {
                throw new NotFoundException('Kid not found');
            }
            throw new BadRequestException('Invalid request');
        }
    }

    async assignGiftToKid(kidId: number, giftId: number) {
        try {
            await this.prisma.kids.findUniqueOrThrow({ where: { id: kidId } });
            await this.prisma.gifts.findUniqueOrThrow({ where: { id: giftId } });
            return this.prisma.gift_kid.create({
                data: { kid: kidId, gift: giftId },
            });
        } catch (error) {
            if (error.code === 'P2025') {
                throw new NotFoundException('Kid or gift not found');
            }
            throw new BadRequestException('Invalid request');
        }
    }

    async removeGiftFromKid(kidId: number, giftId: number) {
        try {
            const result = await this.prisma.gift_kid.deleteMany({
                where: { kid: kidId, gift: giftId },
            });
            if (result.count === 0) {
                throw new NotFoundException('Relation not found');
            }
            return { message: 'Record removed successfully' };
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw new NotFoundException('Kid or gift not found');
            }
            throw new BadRequestException('An unexpected error occurred');
        }
    }
}
