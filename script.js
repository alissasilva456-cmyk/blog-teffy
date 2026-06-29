document.addEventListener("DOMContentLoaded", function() {
    
    // Configuração dos livros da semana[span_1](start_span)[span_1](end_span)
    const destaques = {
        livro1: {
            titulo: "A Biblioteca da Meia-Noite",
            sigla: "ABMN"
        },
        livro2: {
            titulo: "O Pequeno Princípe",
            sigla: "opp"
        },
        livro3: {
            titulo: "E se eu ficar",
            sigla: "ESEF"
        }
    };
    // Insere os dados dinamicamente no Livro 1[span_2](start_span)[span_2](end_span)
    document.getElementById("tituloLivro1").innerText = destaques.livro1.titulo;
    document.getElementById("capaLivro1").innerText = destaques.livro1.sigla;

    // Insere os dados dinamicamente no Livro 2[span_3](start_span)[span_3](end_span)
    document.getElementById("tituloLivro2").innerText = destaques.livro2.titulo;
    document.getElementById("capaLivro2").innerText = destaques.livro2.sigla;
    
});