const exibeChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br';
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(e){
    chute = e.results[0][0].transcript
    exibeValor(chute)
    verificaValorValido(chute)
}

function exibeValor(chute){
    exibeChute.innerHTML = `

        <div>Você disse:</div>
        <span class="box">${chute}</span>

    `
}

recognition.addEventListener("end", ()=>{
    recognition.start()
})