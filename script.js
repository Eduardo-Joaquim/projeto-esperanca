document.addEventListener("DOMContentLoaded", function () {

    const campoCPF = document.getElementById("cpf");

    if (campoCPF) {

        campoCPF.addEventListener("input", function () {

            let valor = campoCPF.value;

            valor = valor.replace(/\D/g, "");

            valor = valor.substring(0, 11);

            valor = valor.replace(
                /(\d{3})(\d)/,
                "$1.$2"
            );

            valor = valor.replace(
                /(\d{3})(\d)/,
                "$1.$2"
            );

            valor = valor.replace(
                /(\d{3})(\d{1,2})$/,
                "$1-$2"
            );

            campoCPF.value = valor;

        });

    }


    const campoTelefone = document.getElementById("telefone");

    if (campoTelefone) {

        campoTelefone.addEventListener("input", function () {

            let valor = campoTelefone.value;

            valor = valor.replace(/\D/g, "");

            valor = valor.substring(0, 11);


            if (valor.length <= 10) {

                valor = valor.replace(
                    /(\d{2})(\d)/,
                    "($1) $2"
                );

                valor = valor.replace(
                    /(\d{4})(\d)/,
                    "$1-$2"
                );

            } else {

                valor = valor.replace(
                    /(\d{2})(\d)/,
                    "($1) $2"
                );

                valor = valor.replace(
                    /(\d{5})(\d)/,
                    "$1-$2"
                );

            }

            campoTelefone.value = valor;

        });

    }


    const campoCEP = document.getElementById("cep");

    if (campoCEP) {

        campoCEP.addEventListener("input", function () {

            let valor = campoCEP.value;

            valor = valor.replace(/\D/g, "");

            valor = valor.substring(0, 8);

            valor = valor.replace(
                /(\d{5})(\d)/,
                "$1-$2"
            );

            campoCEP.value = valor;

        });

    }


    const campoNascimento =
        document.getElementById("nascimento");


    if (campoNascimento) {

        const hoje = new Date();

        const ano = hoje.getFullYear();

        const mes =
            String(hoje.getMonth() + 1).padStart(2, "0");

        const dia =
            String(hoje.getDate()).padStart(2, "0");

        const dataAtual =
            `${ano}-${mes}-${dia}`;

        campoNascimento.max = dataAtual;

    }

    const formulario =
        document.getElementById("formulario-voluntario");


    if (formulario) {


        formulario.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!formulario.checkValidity()) {

                formulario.reportValidity();

                return;

            }


            const mensagemAnterior =
                document.querySelector(".mensagem-sucesso");


            if (mensagemAnterior) {

                mensagemAnterior.remove();

            }


            const mensagem =
                document.createElement("div");


            mensagem.className =
                "mensagem-sucesso";


            mensagem.setAttribute(
                "role",
                "alert"
            );


            mensagem.setAttribute(
                "tabindex",
                "-1"
            );


            mensagem.innerHTML =
                "✅ Cadastro realizado com sucesso! Obrigado por querer fazer parte do Projeto Esperança.";


            formulario.parentNode.insertBefore(
                mensagem,
                formulario
            );



            mensagem.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });


            mensagem.focus();



            formulario.reset();

        });


        formulario.addEventListener("reset", function () {

            setTimeout(function () {

                const mensagem =
                    document.querySelector(".mensagem-sucesso");


                if (mensagem) {

                    mensagem.remove();

                }

            }, 10);

        });

    }



    const elementosAno =
        document.querySelectorAll(".ano-atual");


    const anoAtual =
        new Date().getFullYear();


    elementosAno.forEach(function (elemento) {

        elemento.textContent = anoAtual;

    });



    const linksNavegacao =
        document.querySelectorAll(".navegacao a");


    let paginaAtual =
        window.location.pathname.split("/").pop();

    if (
        paginaAtual === "" ||
        paginaAtual === "/"
    ) {

        paginaAtual = "index.html";

    }


    linksNavegacao.forEach(function (link) {

        const endereco =
            link.getAttribute("href");


        if (endereco === paginaAtual) {

            link.setAttribute(
                "aria-current",
                "page"
            );

        } else {

            link.removeAttribute(
                "aria-current"
            );

        }

    });


    const cards =
        document.querySelectorAll(
            ".card, .projeto-card, .doacao-card, .impacto-card"
        );

    if ("IntersectionObserver" in window) {


        const observador =
            new IntersectionObserver(
                function (entradas, observer) {

                    entradas.forEach(function (entrada) {

                        if (entrada.isIntersecting) {

                            entrada.target.classList.add(
                                "card-visivel"
                            );

                            observer.unobserve(
                                entrada.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.15
                }
            );


        cards.forEach(function (card) {

            card.classList.add(
                "card-animacao"
            );

            observador.observe(card);

        });

    }


    const linksPlaceholder =
        document.querySelectorAll(
            'a[href="#"]'
        );


    linksPlaceholder.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

        });

    });

});