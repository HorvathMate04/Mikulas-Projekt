import { Controller, Get, Post, Param, Body, Patch, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { GiftsService } from './gifts.service';
import { newGiftData } from '../dtos/newGiftData.dto';
import { updateGiftData } from '../dtos/updateGiftData.dto';

@Controller('toys')
export class GiftsController {
    constructor(private readonly giftsService: GiftsService) { }

    @Get()
    getAllGifts() {
        return this.giftsService.getAllGifts();
    }

    @Get(':id')
    getGiftById(@Param('id') id: string) {
        return this.giftsService.getGiftById(+id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    createGift(@Body() body: newGiftData) {
        return this.giftsService.createGift({ ...body, weigth: body.weigth });
    }

    @Patch(':id')
    updateGift(@Param('id') id: string, @Body() body: updateGiftData) {
        return this.giftsService.updateGift(+id, body);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    deleteGift(@Param('id') id: string) {
        return this.giftsService.deleteGift(+id);
    }
}
