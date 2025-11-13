const formulario = document.querySelector("#form");
const presente = document.querySelector('.presente-aniversario')



const dia = document.getElementById('dia')
const data = new Date()
dia.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' })


formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    let numeroEscolhido = document.querySelector('.numero').value;

    function Premios() {
        const premios = ["",
            "Eu te amo",
            "Voce e incrivel",
            "Voce é uma mulher muito forte",
            "Voce e minha garotinha",
            "Voce e mais que capaz",
            "Saiba que eu tenho muito orgulho de voce meu amor",
            "Saiba que logo seremos nos dois para sempre",
            "Saiba que Deus e conosco",
            "Voce e meu maior bem",
            "Eu agradeço a Deus todos os dias por ter vc em minha vida"

        ]

        for (let i = numeroEscolhido; i <= premios.length; i++) {
            return premios[i]
        }

    }
    const resultado = document.getElementById('resultado')
    resultado.innerHTML = "";
    const p = document.createElement();

    p.innerHTML = Premios();
    resultado.appendChild(p);
    document.querySelector('.numero').value = '';



});

presente.addEventListener('click', function (e) {
    criaInputVideo();
    criaBotao();


});

function criaInputVideo() {

    const video = document.createElement('iframe');
    video.setAttribute('controls', 'controls')
    video.setAttribute('allowfullscreen', 'allowfullscreen')
    video.classList.add('video')
    video.src = 'https://www.youtube.com/embed/NMFjLdY3AD4'
    resultado.appendChild(video)
}

function criaBotao() {
    const botaoSurpresa = document.createElement('button');
    botaoSurpresa.classList.add('botao', 'Aperte-me')
    botaoSurpresa.innerText = 'Aperte-me'
    resultado.appendChild(botaoSurpresa);

    botaoSurpresa.addEventListener('click', function (e) {
        const teste = document.createElement('p');
        resultado.appendChild(teste);
        teste.innerText = "Bom meu amor finalmente chegou o grande dia, seu aniversario o seu grande dia, saiba que voce e pra mim uma obra prima o ser mais belo e alegre desse mundo, eu dou graças a Deus que ele te colocou na minha vida, saiba que pode contar comigo para sempre, sempre estarei aqui pra ti meu amor, EU TE AMO MUITO MEU AMOR, e logo logo seras a minha mulher perante a lei dos homens e a lei de Deus eu te amo muitooo."
    })
}




