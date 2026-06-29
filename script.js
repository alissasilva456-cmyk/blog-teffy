document.addEventListener("DOMContentLoaded", function() {
    
    document.addEventListener("DOMContentLoaded", function() {

    // ==========================================================================
    // RECURSO 1: CONFIGURAÇÃO DOS LIVROS (PÁGINA INICIAL)
    // ==========================================================================
    const destaques = {
        livro1: { titulo: "A Biblioteca da Meia-Noite", sigla: "ABMN" },
        livro2: { titulo: "O Pequeno Príncipe", sigla: "opp" },
        livro3: { titulo: "E se eu ficar", sigla: "ESEF" }
    };

    // Só insere os dados se os elementos de livros existirem na página atual
    if (document.getElementById("tituloLivro1")) {
        document.getElementById("tituloLivro1").innerText = destaques.livro1.titulo;
        document.getElementById("capaLivro1").innerText = destaques.livro1.sigla;
    }
    if (document.getElementById("tituloLivro2")) {
        document.getElementById("tituloLivro2").innerText = destaques.livro2.titulo;
        document.getElementById("capaLivro2").innerText = destaques.livro2.sigla;
    }


    // ==========================================================================
    // RECURSO 2: FORMULÁRIO DE CONTATO COM VALIDAÇÃO (EXIGÊNCIA DA ATIVIDADE)
    // ==========================================================================
    const formContato = document.getElementById('formContato');

    if (formContato) {
        formContato.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita o recarregamento automático da página

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            if (nome === "") {
                alert("Por favor, preencha o campo Nome.");
                return;
            }
            if (email === "") {
                alert("Por favor, preencha o campo E-mail.");
                return;
            }
            if (mensagem === "") {
                alert("Por favor, escreva uma mensagem antes de enviar.");
                return;
            }

            // Exibe o alerta de sucesso exigido
            alert("Obrigado, " + nome + "! Sua mensagem foi validada e enviada com sucesso.");
            formContato.reset(); // Limpa as caixas de texto do formulário
        });
    }


    // ==========================================================================
    // RECURSO 3: EFEITO INTERATIVO BÔNUS (BOTÃO VOLTAR AO TOPO)
    // ==========================================================================
    // Cria o botão dinamicamente em qualquer página que o script estiver ativo
    const botaoTopo = document.createElement('button');
    botaoTopo.innerHTML = '▲';
    botaoTopo.id = 'btnVoltarTopo';
    document.body.appendChild(botaoTopo);

    // Mostra o botão apenas se o usuário rolar a página para baixo
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            botaoTopo.style.display = 'block';
        } else {
            botaoTopo.style.display = 'none';
        }
    });

    // Faz a página rolar de forma suave para o topo ao clicar
    botaoTopo.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

});