import './App.css';
import ScrollAnimatedDivs from './components/AnimatedDiv/ScrollAnimatedDivs';

function App() {
  return (
    <ScrollAnimatedDivs>
      <div className="App">
        <header className="App-header">
          <h1>Aplicação Exemplo de uso do hook useScrollAnimatedDiv</h1>
          <div className='cd-animated-div'
            data-central-height="200"
            data-max-offset="-300"
            data-offset-position="250"
            data-direction="horizontal"
            data-opacity-transition="2"
            data-transform-transition="2">
            <h2><a href='https://github.com/Carlosad1981/Scroll-Animation-Div'>Scroll Animation Div</a></h2>
          </div>
        </header>
        <main className="App-header">
          <div style={{ maxWidth: '60%' }}>
            <h2>Descrição</h2>
            <p>
              O `useScrollAnimatedDivs` é um hook personalizado em React que aplica transições de opacidade e transformação a elementos dentro de um contêiner
              enquanto ele é rolado. Ele é útil para animar elementos conforme eles entram e saem da visão durante o scroll.
            </p>

            <h2>Funcionalidades</h2>
            - Opacidade Transicional: Os elementos ajustam sua opacidade à medida que se aproximam ou se afastam da zona central definida.
            - Transformação de Deslocamento: Os elementos podem ser deslocados verticalmente ou horizontalmente com base na posição em relação à zona central.

            <h2>Como Funciona</h2>
            <h3>Configuração Inicial:</h3>
            - Recebe uma referência para o contêiner que contém os elementos a serem animados.
            - Define um evento de scroll para o contêiner.

            <h3>Manuseio de Scroll:</h3>
            - Calcula a posição dos elementos em relação ao topo do contêiner.
            - Determina a zona central e calcula a opacidade e o deslocamento dos elementos com base nisso.
            - Aplica transições suaves de opacidade e transformação aos elementos.

            <h3>Atualização Dinâmica:</h3>
            - Atualiza as animações sempre que o usuário rolar o contêiner.

            <h2>Atributos (personalização)</h2>
            <p>Os elementos div com a classe .cn-animation-div podem ter os seguintes atributos data-* para personalizar seu comportamento de animação:</p>
            <div className='cd-animated-div'>
              - data-max-offset: (opcional) A quantidade máxima de deslocamento em pixels (padrão: 50).
            </div>
            <div className='cd-animated-div' data-max-offset="-350">
              data-max-offset: Exemplo data-max-offset="-350".
            </div>
            <div className='cd-animated-div' data-max-offset="-250">
              data-max-offset: Exemplo data-max-offset="-250".
            </div>
            <div className='cd-animated-div' data-max-offset="-150">
              data-max-offset: Exemplo data-max-offset="-150".
            </div>
            <div className='cd-animated-div' data-max-offset="0">
              data-max-offset: Exemplo data-max-offset="0".
            </div>
            <div className='cd-animated-div' data-max-offset="150">
              data-max-offset: Exemplo data-max-offset="150".
            </div>
            <div className='cd-animated-div' data-max-offset="250">
              data-max-offset: Exemplo data-max-offset="250".
            </div>
            <div className='cd-animated-div' data-max-offset="350">
              data-max-offset: Exemplo data-max-offset="350".
            </div>
            <hr />
            <div className='cd-animated-div'>
              - data-direction: (opcional) A direção do deslocamento (vertical ou horizontal, padrão: horizontal).
            </div>
            <div className='cd-animated-div' data-direction="vertical">
              data-direction: Exemplo data-direction="vertical".
            </div>
            <hr />
            <div className='cd-animated-div' data-max-offset="0">
              - data-opacity-transition: (opcional) A duração da transição da opacidade em segundos (padrão: 0.5)
            </div>
            <div className='cd-animated-div' data-max-offset="0" data-opacity-transition="3">
              data-opacity-transition: Exemplo data-opacity-transition="3".
            </div>
            <div className='cd-animated-div' data-max-offset="0" data-opacity-transition="5.5">
              data-opacity-transition: Exemplo data-opacity-transition="5.5".
            </div>
            <hr />
            <div className='cd-animated-div'>
              - data-transform-transition: (opcional) A duração da transição da transformação em segundos (padrão: 0.5).
            </div>
            <div className='cd-animated-div' data-transform-transition="3">
              data-transform-transition: Exemplo data-transform-transition="3".
            </div>
            <div className='cd-animated-div' data-transform-transition="5.5">
              data-transform-transition: Exemplo data-transform-transition="5.5".
            </div>
            <hr />
            <div className='cd-animated-div'>
              - data-offset-position: (opcional) A posição do deslocamento em relação ao centro do contêiner (padrão: 200).
            </div>
            <div className='cd-animated-div' data-offset-position="-200">
              data-offset-position: Exemplo data-offset-position="-200".
            </div>
            <div className='cd-animated-div' data-offset-position="0">
              data-offset-position: Exemplo data-offset-position="0".
            </div>
            <div className='cd-animated-div' data-offset-position="200">
              data-offset-position: Exemplo data-offset-position="200".
            </div>
            <div className='cd-animated-div' data-offset-position="400">
              data-offset-position: Exemplo data-offset-position="400".
            </div>
            <div className='cd-animated-div' data-offset-position="600">
              data-offset-position: Exemplo data-offset-position="600".
            </div>
            <hr />
            <div className='cd-animated-div'>
              - data-central-height: (opcional) A altura da zona central onde a div deve ser totalmente visível (padrão: 400).
            </div>
            <div className='cd-animated-div' data-central-height="0">
              data-central-height: Exemplo data-central-height="0".
            </div>
            <div className='cd-animated-div' data-central-height="200">
              data-central-height: Exemplo data-central-height="200".
            </div>
            <div className='cd-animated-div' data-central-height="400">
              data-central-height: Exemplo data-central-height="400".
            </div>
            <div className='cd-animated-div' data-central-height="600">
              data-central-height: Exemplo data-central-height="600".
            </div>
            <div className='cd-animated-div' data-central-height="800">
              data-central-height: Exemplo data-central-height="800".
            </div>

            <h2>Conteúdo Genérico</h2>
            <div className='cd-animated-div'
              data-central-height="300"
              data-max-offset="250"
              data-offset-position="-300"
              data-direction="horizontal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus quam dolor, vel laoreet lorem efficitur non.
              Cras eu auctor ipsum. Aliquam condimentum nisi tortor, et pharetra quam sodales at.
              Proin vitae quam laoreet, feugiat arcu ut, placerat lacus. Ut quis est ac justo blandit vulputate vel ut justo.
              Mauris luctus mi at nisi sollicitudin, at elementum purus faucibus. Cras non nunc vestibulum, venenatis augue eu, condimentum lorem.
            </div>
            <div className='cd-animated-div'
              data-central-height="300"
              data-max-offset="250"
              data-offset-position="-300"
              data-direction="horizontal">
              Mauris efficitur et lectus nec tincidunt. Maecenas neque purus, lacinia euismod mauris eu, ullamcorper venenatis justo.
              Suspendisse et gravida ipsum. Suspendisse hendrerit porttitor egestas. Duis non vestibulum nisl, nec iaculis elit.
              Morbi imperdiet consequat enim nec viverra. Nam semper tincidunt tortor nec lacinia. Sed vulputate tempor massa non ornare.
              Vivamus id elit venenatis, consectetur tortor lobortis, lacinia leo. Donec ut pellentesque dolor.
              Cras malesuada metus a lectus molestie, non molestie mauris mattis. Proin et sodales erat, nec luctus orci.
              Cras erat ipsum, tempor eu nisl eu, ullamcorper vulputate mauris.
            </div>
            <div className='cd-animated-div'
              data-central-height="300"
              data-max-offset="250"
              data-offset-position="-300"
              data-direction="horizontal">
              Vivamus sodales urna lobortis sodales tempus. Cras vel consequat lacus, quis aliquam eros. Vestibulum maximus iaculis orci tincidunt cursus.
              Morbi maximus neque augue, a lacinia neque dapibus nec. In commodo mauris ac diam placerat mattis.
              Sed cursus, velit eu efficitur viverra, orci enim mattis metus, vitae rutrum risus nisi et est. Maecenas in augue vitae lacus elementum posuere.
              Mauris sed ligula nibh. Etiam ut enim ligula. Nam vitae justo venenatis, aliquet metus pretium, tristique est.
            </div>
            <div className='cd-animated-div'
              data-central-height="300"
              data-max-offset="250"
              data-offset-position="-300"
              data-direction="horizontal">
              Sed vitae neque massa. Integer vel congue lorem. Curabitur lobortis non turpis convallis gravida.
              Phasellus euismod sodales felis a porttitor. Fusce dictum dapibus augue, vitae mollis eros tincidunt eget.
              Phasellus purus ipsum, dictum euismod vestibulum et, maximus ac eros. Aliquam erat volutpat.
              Fusce tincidunt, libero vitae condimentum porta, quam leo porttitor lectus, at egestas magna ligula at erat.
              Phasellus tempor orci eu nibh tincidunt rutrum. Ut vehicula aliquet tristique. Suspendisse potenti. Aliquam in varius odio.
            </div>
            <div className='cd-animated-div'
              data-central-height="300"
              data-max-offset="250"
              data-offset-position="-300"
              data-direction="horizontal">
              Nam ultricies pharetra augue tempus faucibus. Curabitur non blandit lorem. Sed sit amet ex pulvinar, sodales ipsum vehicula, vulputate leo.
              Praesent vel erat scelerisque, vestibulum ligula eget, elementum arcu. Aliquam scelerisque nec risus ac tristique.
              Aenean dignissim, lorem id consequat gravida, erat neque pharetra neque, ut pellentesque augue est vel tortor.
              Proin ornare turpis eu accumsan suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
              Pellentesque ac dui odio. Integer lobortis at nisi et congue. Phasellus porta nisi nec dolor molestie varius.
              Etiam ultricies velit velit, ac ultricies metus ultrices nec. Duis ac ipsum rutrum felis laoreet pulvinar et quis leo.
            </div>
          </div>
          <h2>Fim do texto genérico</h2>
        </main>
        <footer className='App-footer'>
          Criado por Carlos Augusto Duarte
        </footer>
      </div >
    </ScrollAnimatedDivs >
  );
}

export default App;
