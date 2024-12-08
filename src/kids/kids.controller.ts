import { Controller, Get, Post, Param, Body, Delete, Patch, HttpCode, HttpStatus } from '@nestjs/common';
import { KidsService } from './kids.service';
import { newKidData } from '../dtos/newKidData.dto';
import { updateKidData } from '../dtos/updateKidData.dto';

@Controller('children')
export class KidsController {
    constructor(private readonly kidsService: KidsService) { }

    @Get()
    getAllKids() {
        return this.kidsService.getAllKids();
    }

    @Get(':id')
    getKidById(@Param('id') id: string) {
        return this.kidsService.getKidById(+id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    createKid(@Body() body: newKidData) {
        return this.kidsService.createKid(body);
    }

    @Patch(':id')
    updateKid(@Param('id') id: string, @Body() body: updateKidData) {
        return this.kidsService.updateKid(+id, body);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    deleteKid(@Param('id') id: string) {
        return this.kidsService.deleteKid(+id);
    }

    @Post(':kidId/toys/:giftId')
    assignGiftToKid(@Param('kidId') kidId: string, @Param('giftId') giftId: string) {
        return this.kidsService.assignGiftToKid(+kidId, +giftId);
    }

    @Delete(':kidId/toys/:giftId')
    removeGiftFromKid(@Param('kidId') kidId: string, @Param('giftId') giftId: string) {
        return this.kidsService.removeGiftFromKid(+kidId, +giftId);
    }
}
