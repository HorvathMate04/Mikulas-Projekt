import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class GiftsService {
    constructor(private readonly prisma: PrismaService) { }

    async getAllGifts() {
        return await this.prisma.gifts.findMany();
    }

    async getGiftById(id: number) {
        try{
            return await this.prisma.gifts.findUniqueOrThrow(
                { where: { id } }
            );
        } catch (error){
            if(error.code === "P2025"){
                throw new NotFoundException("Not Found");
            }else{
                throw new BadRequestException("Bad request");
            }
        }
    }

    async createGift(data: Prisma.giftsCreateInput) {
        return await this.prisma.gifts.create(
            { data }
        );
    }

    async updateGift(id: number, data: Prisma.giftsUpdateInput) {
        try{
            return await this.prisma.gifts.update(
                { where: { id }, data }
            );
        } catch(error) {
            if(error.code == "P2025"){
                throw new NotFoundException("Not Found");
            }else{
                throw new BadRequestException("Bad request");
            }
        }
    }

    async deleteGift(id: number) {
        try {
            await this.prisma.gift_kid.deleteMany({
                where: { gift: id },
            });
            return await this.prisma.gifts.delete({
                where: { id },
            });
        } catch (error) {
            if (error.code === 'P2025') {
                throw new NotFoundException('Gift not found');
            }
            throw new BadRequestException('Invalid request');
        }
    }
    
}
