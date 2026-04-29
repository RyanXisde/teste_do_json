function busca_adm() {
    const dados = [
        {
            "nome": "Kcb",
            "idade": "16",
            "peso": "250kg",
            "personalidade": "Fofo e esforçado, mas um tanto quanto incoveninente as vezes. Muito legal.",
            "associado": {
                "server": "Veyarticos",
                "habilidade": "Coordenação",
                "membros": 600067
            }
        },
        {
            "nome": "TutuZ",
            "idade": "16",
            "peso": "70kg",
            "personalidade": "Mal humorado, interesseiro. Vê beneficios acima da amizade.",
            "associado": {
                "server": "K11NG",
                "habilidade": "Administração",
                "membros": 420000
            }
        },
        {
            "nome": "Angel",
            "idade": "16",
            "peso": "30kg",
            "personalidade": "Fofifnha kwai, super simpatica e inteligente s2",
            "associado": {
                "server": "K11NG",
                "habilidade": "Todas",
                "membros": 867420
            }
        },
        {
            "nome": "Sainty",
            "idade": "8",
            "peso": "500kg",
            "personalidade": "Agudada, bebe mal humorada e estressada",
            "associado": {
                "server": "Desempregada",
                "habilidade": "Nenhuma",
                "membros": 0
            }
        }
    ];

    const lugar = document.getElementById('lugar');
    lugar.innerHTML = "";
    dados.forEach(pessoa => {
        const linha = document.createElement('tr');
        linha.innerHTML = `
            <td>${pessoa.nome}</td>
            <td>${pessoa.idade}</td>
            <td>${pessoa.peso}</td>
            <td>${pessoa.personalidade}</td>
            <td>${pessoa.associado.server}</td>
            <td>${pessoa.associado.habilidade}</td>
            <td>${pessoa.associado.membros}</td>
        `;
        lugar.appendChild(linha);
    });
}