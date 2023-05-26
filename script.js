function desvia(t){
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.botton = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
}

function geraPosicao(min, max){
    return (Math.random() * (max - min) + min) + "%";
}
