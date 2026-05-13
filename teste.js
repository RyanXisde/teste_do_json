function cafe() {
    document.getElementById('destino').innerHTML = "<p>Dados prontos! Clique em 'Buscar Informações'.</p>";
}


function buscar_adm() {
    fetch('dados.json')
        .then(response => response.json())
        .then(dados => {
            const tbody = document.getElementById('lugar');
            tbody.innerHTML = ""; 

            dados.forEach(item => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${item.nome}</td>
                    <td>${item.idade}</td>
                    <td>${item.propriedade3}</td>
                    <td>${item.propriedade4}</td>
                    <td>${item.propriedade5}</td>
                    <td>${item.propriedade6}</td>
                `;
                tbody.appendChild(tr);
            });
        })
        .catch(error => {
            console.error("Erro ao carregar dados:", error);
        });
}

function botaun(){
    alert("mds sla");
}