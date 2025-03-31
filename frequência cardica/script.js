function calcularFC() {
    const beatsInput = document.getElementById('beats');
    const beats = parseInt(beatsInput.value);

    if (!isNaN(beats)) {
        const fc = beats * 6; // Multiplicar por 6 para obter a frequência cardíaca em BPM

        const resultElement = document.getElementById('result');
        resultElement.innerText = `Sua frequência cardíaca é de ${fc} batimentos por minuto.`;

        const statusElement = document.getElementById('status');
        let status = '';

        if (fc < 60) {
            status = 'Bradicardia';
        } else if (fc >= 60 && fc <= 100) {
            status = 'Normal';
        } else {
            status = 'Taquicardia';
        }

        statusElement.innerText = `Estado: ${status}`;
    } else {
        alert("Por favor, insira um número válido de batimentos.");
    }
}