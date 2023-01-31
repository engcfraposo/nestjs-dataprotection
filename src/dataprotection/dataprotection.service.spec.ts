import { DataprotectionService } from './dataprotection.service';
import { Test } from '@nestjs/testing';

describe('DataprotectionService', () => {
  let dataprotectionService: DataprotectionService;

  beforeEach(async () => {
    const app = await Test.createTestingModule({
      providers: [DataprotectionService],
    }).compile();

    dataprotectionService = app.get<DataprotectionService>(DataprotectionService);
  });

  describe('maskData', () => {
    it('should mask email', () => {
      const data = { email: 'test@example.com' };
      const maskedData = dataprotectionService.maskData(data);
      expect(maskedData).toEqual({ email: 'tes...@example.com' });
    });

    it('should mask CPF', () => {
      const data = { cpf: '123.456.789-10' };
      const maskedData = dataprotectionService.maskData(data);
      expect(maskedData).toEqual({ cpf: 'xxx.xxx.xxx-10' });
    });

    it('should mask RG', () => {
      const data = { rg: '12.345.678-9' };
      const maskedData = dataprotectionService.maskData(data);
      expect(maskedData).toEqual({ rg: 'xx.xxx.xxx-9' });
    });

    it('should mask phone', () => {
      const data = { telefone: '11 12345-6789' };
      const maskedData = dataprotectionService.maskData(data);
      expect(maskedData).toEqual({ telefone: 'xx xxxxx-6789' });
    });

    it('should mask name', () => {
      const data = { nome: 'John Doe' };
      const maskedData = dataprotectionService.maskData(data);
      expect(maskedData).toEqual({ nome: 'John ...' });
    });

    it('should mask  othe propety include name in text', () => {
      const data = { primeiro_nome: 'John Doe' };
      const maskedData = dataprotectionService.maskData(data);
      expect(maskedData).toEqual({ primeiro_nome: 'John ...' });
    });


    it('should not mask non-personal data', () => {
      const data = { address: '123 Main St.' };
      const maskedData = dataprotectionService.maskData(data);
      expect(maskedData).toEqual({ address: '123 Main St.' });
    });
  });
});