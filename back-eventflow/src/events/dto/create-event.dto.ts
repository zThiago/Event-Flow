import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDate, IsNumber, IsOptional, Min, IsDateString } from 'class-validator';

export class CreateEventDto {
  @ApiProperty({example: 'Titulo do evento', description: 'Titulo do evento'})
  @IsString()
  titulo: string;

  @ApiProperty({example: 'Descricao do evento', description: 'Descricao do evento'})
  @IsString()
  descricao: string;

  @ApiProperty({example: 'dd/mm/aaaa hh:mm', description: 'Data do evento'})
  @IsDateString()
  data: string;

  @ApiProperty({example: 'Localizacao do evento', description: 'Localizacao do evento'})
  @IsString()
  localizacao: string;

}