import { Module } from '@nestjs/common';
import { DataprotectionService } from './dataprotection.service';

@Module({
  exports: [DataprotectionService],
  providers: [DataprotectionService]
})
export class DataprotectionModule {}
