import { Injectable } from '@nestjs/common';

@Injectable()
export class DataprotectionService {
  private readonly personalDataList = [
    'nome',
    'email',
    'cpf',
    'rg',
    'telefone',
  ];

  private readonly emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i;
  private readonly cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  private readonly rgRegex = /^\d{2}\.\d{3}\.\d{3}-\d{1}$/;
  private readonly phoneRegex = /^\d{2} \d{5}-\d{4}$/;

  public maskData(data: object): object {
    const maskedData = {};

    for (const key in data) {
      if (!data.hasOwnProperty(key)) {
        continue;
      }

      const value = data[key];

      if (key.toLowerCase().includes('nome')) {
        maskedData[key] = `${data[key].split(' ')[0]} ...`;
      } else if (this.personalDataList.includes(key)) {
        maskedData[key] = this.maskPersonalData(value, key);
      } else {
        maskedData[key] = value;
      }
    }

    return maskedData;
  }

  private maskPersonalData(value: string, key: string): string {
    console.log(value, key);
    if (this.emailRegex.test(value)) {
      const [email] = value.split('@');
      return `${email.slice(0, 3)}...@${value.split('@')[1]}`;
    }

    if (this.cpfRegex.test(value)) {
      return `xxx.xxx.xxx-${value.slice(-2)}`;
    }

    if (this.rgRegex.test(value)) {
      return `xx.xxx.xxx-${value.slice(-1)}`;
    }

    if (this.phoneRegex.test(value)) {
      return `xx xxxxx-${value.slice(-4)}`;
    }

    return value;
  }
}
