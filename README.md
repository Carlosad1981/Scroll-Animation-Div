# useScrollAnimatedDivs Hook

## Descrição
O `useScrollAnimatedDivs` é um hook personalizado em React que aplica transições de opacidade e transformação a elementos dentro de um contêiner enquanto ele é rolado. Ele é útil para animar elementos conforme eles entram e saem da visão durante o scroll.

## Funcionalidades
- **Opacidade Transicional**: Os elementos ajustam sua opacidade à medida que se aproximam ou se afastam da zona central definida.
- **Transformação de Deslocamento**: Os elementos podem ser deslocados verticalmente ou horizontalmente com base na posição em relação à zona central.

## Como Funciona
1. **Configuração Inicial**:
   - Recebe uma referência para o contêiner que contém os elementos a serem animados.
   - Define um evento de scroll para o contêiner.

2. **Manuseio de Scroll**:
   - Calcula a posição dos elementos em relação ao topo do contêiner.
   - Determina a zona central e calcula a opacidade e o deslocamento dos elementos com base nisso.
   - Aplica transições suaves de opacidade e transformação aos elementos.

3. **Atualização Dinâmica**:
   - Atualiza as animações sempre que o usuário rolar o contêiner.

## Atributos data-* Esperados
Os elementos div com a classe .cn-animation-div podem ter os seguintes atributos data-* para personalizar seu comportamento de animação:

   - **data-max-offset**: (opcional) A quantidade máxima de deslocamento (padrão: 50).
   - **data-direction**: (opcional) A direção do deslocamento (vertical ou horizontal, padrão: horizontal).
   - **data-opacity-transition**: (opcional) A duração da transição da opacidade em segundos (padrão: 0.5).
   - **data-transform-transition**: (opcional) A duração da transição da transformação em segundos (padrão: 0.5).
   - **data-offset-position**: (opcional) A posição do deslocamento em relação ao centro do contêiner (padrão: 200).
   - **data-central-height**: (opcional) A altura da zona central onde a div deve ser totalmente visível (padrão: 400).


## Exemplo de Uso
```javascript (React)
import React, { useRef } from 'react';
import useScrollAnimatedDivs from './hooks/useScrollAnimatedDivs'; //ATENÇÃO: Supondo que o hook esteja na pasta "src/hooks/" (troque a pasta conforme necessário)

const AnimatedDivsContainer = () => {
    const containerRef = useRef(null);
    useScrollAnimatedDivs(containerRef);

    return (
        <>
            {/* Elementos com a classe 'cd-animated-div' */}
            <div className="cd-animated-div" data-max-offset="50" data-direction="vertical" data-opacity-transition="0.5" data-transform-transition="0.5" data-offset-position="200" data-central-height="400">
                {/* Conteúdo do elemento */}
            </div>
            {/* Outros elementos semelhantes */}
        <>
    );
};

export default AnimatedDivsContainer;
```

## Contribuindo
   - Contribuições são bem-vindas! Sinta-se à vontade para me enviar uma mensagem.

## Licença
   - Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Contato
   - Para quaisquer dúvidas ou sugestões, entre em contato https://www.carlosduarte.com.br.