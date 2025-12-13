let pessoas = [];
    
            function sortear() {
                let np = pessoas.length;
                let ns = Math.floor(Math.random() * np);
                let vencedor = pessoas[ns];
    
                document.getElementById("d").innerHTML = vencedor;
                document.getElementById("vencedor").innerHTML = vencedor;
                document.getElementById("modal").style.display = "block";
            }
    
            function fecharModal() {
                document.getElementById("modal").style.display = "none";
            }
    
            function atualizarLista() {
                const lista = document.getElementById("listaParticipantes");
                lista.innerHTML = ""; // Limpa a lista antes de recriá-la
    
                pessoas.forEach((nome, index) => {
                    const li = document.createElement("li");
                    li.textContent = nome;
                    lista.appendChild(li);
                });
            }
    
            // Atualiza a lista ao carregar a página
            atualizarLista();
    
            // Evento para adicionar novos participantes
            document.getElementById("adicionar").addEventListener("click", () => {
                let input = document.getElementById("nomeParticipante");
                let nome = input.value.trim();
    
                if (nome !== "") {
                    pessoas.push(nome);
                    atualizarLista(); // Atualiza a lista exibida
                    input.value = ""; // Limpa o campo de input
                } else {
                    alert("Digite um nome válido!");
                }
            });
    
