function salva(){
    let nome = document.querySelector("#name");
    


    let cadastro = {
        nome:"",
        endereço:"",
        telefone:0,
        url:""

    }
    cadastro.nome = nome.value;
    
    let cadastroJson =JSON.stringify(cadastro);
    alert("Cadastro da Institutição\n"+cadastro.nome+"\nRealizado com sucesso!!\nPara alterar alguma informação acesse nosso site");
}