import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Owner')
@Controller('owner')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Post()
  @ApiOperation({ summary: 'Create one owner' })
  create(@Body() createOwnerDto: CreateOwnerDto) {
    return this.ownerService.create(createOwnerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all owners' })
  findAll() {
    return this.ownerService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one owner' })
  findOne(@Param('id') id: string) {
    return this.ownerService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update one owner' })
  update(@Param('id') id: string, @Body() updateOwnerDto: UpdateOwnerDto) {
    return this.ownerService.update(+id, updateOwnerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete one owner' })
  remove(@Param('id') id: string) {
    return this.ownerService.remove(+id);
  }
}
