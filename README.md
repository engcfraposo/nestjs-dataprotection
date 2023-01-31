# Data Protection Service

Este módulo é uma solução simples para proteger dados pessoais ao mascará-los. Ele pode ser usado para mascarar qualquer propriedade que contenha informações pessoais, incluindo nomes.

## Instalação

Para instalar este módulo, basta executar o seguinte comando:

```ssh
npm install nestjs-dataprotection
```

## Uso

Para usar o ViaCepService precisamos importar o seguinte modulo


```ts
import { DataprotectionService } from 'nestjs-dataprotection';

```

importe o decorator Injectable do @nestjs/common:


```ts
import { Injectable } from '@nestjs/common';

```

e use o  @Injectable() decorator no seu controller:


```ts
@Injectable()
export class MyController {
  constructor(private readonly dataprotectionService: DataprotectionService) {}

  async consultar(obj: object) {
    return this.dataprotectionService.maskData(obj);
  }
}


```

você pode testaer o código importando da seguinte forma:



```ts
@Injectable()
const maskedData = this.dataprotectionService.maskData(obj);
console.log(maskedData);

```

# Testes

Para executar os testes deste módulo, basta executar o seguinte comando:

```ssh
npm run test
```

# Licença

Este módulo está disponível sob a licença MIT. Veja o arquivo LICENSE para mais informações.

# Contribuição

Sinta-se livre para contribuir com melhorias no código e na documentação. Para isso, basta abrir uma issue ou fazer um pull request.