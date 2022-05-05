function naoMudar(e){
    e.preventDefault();
}
function salva(){
    const nome = document.getElementById("name");
    const fone = document.getElementById("phone");
    const endereco = document.getElementById("adress");
    const url = document.getElementById("url");
    const cidade = document.getElementById("city")
    const estado = document.getElementById("state")
    const descricao = document.getElementById("description");
    

    let cadastro = {}
    cadastro.nome = nome.value;
    cadastro.fone = parseInt(fone.value);
    cadastro.endereco = endereco.value;
    cadastro.url = url.value;
    cadastro.cidade = cidade.value;
    cadastro.estado = estado.value;
    cadastro.descricao = descricao.value;
    let cadastroJson =JSON.stringify(cadastro);
    alert("Cadastro da Institutição\n"+cadastro.nome+"\nRealizado com sucesso!!\nPara alterar alguma informação acesse nosso site");
}