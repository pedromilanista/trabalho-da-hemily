document.addEventListener('DOMContentLoaded', () => {
    fetch('imagens.json')
        .then(response => response.json())
        .then(data => {
            const catalogoJogos = document.getElementById('catalogo-jogos');
            if (catalogoJogos) {
                data.jogos.forEach(jogo => {
                    const jogoCard = document.createElement('div');
                    jogoCard.classList.add('jogo-card');

                    const capa = document.createElement('img');
                    capa.src = jogo.capa;
                    capa.alt = jogo.titulo;

                    const info = document.createElement('div');
                    info.classList.add('jogo-info');

                    const titulo = document.createElement('h3');
                    titulo.classList.add('jogo-titulo');
                    titulo.textContent = jogo.titulo;

                    const genero = document.createElement('p');
                    genero.classList.add('jogo-genero');
                    genero.textContent = jogo.genero;

                    const preco = document.createElement('p');
                    preco.classList.add('jogo-preco');
                    preco.textContent = `Preço: $${jogo.preco.toFixed(2)}`;
                    if (jogo.desconto > 0) {
                        const descontoSpan = document.createElement('span');
                        descontoSpan.classList.add('jogo-desconto');
                        descontoSpan.textContent = `-${jogo.desconto}%`;
                        preco.appendChild(descontoSpan);
                    }

                    const descricao = document.createElement('p');
                    descricao.classList.add('jogo-descricao');
                    descricao.textContent = jogo.descricao;

                    if (jogo.destaque) {
                        const destaqueDiv = document.createElement('div');
                        destaqueDiv.classList.add('jogo-destaque');
                        destaqueDiv.textContent = jogo.destaque.toUpperCase();
                        info.appendChild(destaqueDiv);
                    }

                    info.appendChild(titulo);
                    info.appendChild(genero);
                    info.appendChild(preco);
                    info.appendChild(descricao);

                    jogoCard.appendChild(capa);
                    jogoCard.appendChild(info);
                    catalogoJogos.appendChild(jogoCard);
                });
            }
        })
        .catch(error => console.error('Erro ao carregar os jogos:', error));
});