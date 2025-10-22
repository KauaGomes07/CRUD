import promptSync from "prompt-sync";

const prompt = promptSync();


//Formato de contato
interface Contato {
    nome: string;
    numero: number;
}

//Lista com os contatos
let lista_Contatos: Contato[] = [];

//Uma lista para pegar o índice dos contatos
let indice_Contato: string[] = [];


function addContato(person: Contato): void {
    //Trata entradas vazias
    if (!person.nome.trim()){
        console.log("\nNome inválido!\n");
        return;
    }
    //Verifica se é um número válido
    if (isNaN(person.numero) || person.numero <= 0) {
        console.log("\nNúmero inválido!\n");
        return;
    }

    if (indice_Contato.includes(person.nome)){
        console.log("\nContato já existente!\n");
        return;
    }   
        console.log("Contato adicionado!");
        indice_Contato.push(person.nome);
        lista_Contatos.push(person);
}

function listar_Contatos(array: Contato[]): void {
    if (array.length === 0) {
    console.log("\nNenhum contato na lista.\n");
    return;
  }
    array.forEach((obj: Contato) => {
        console.log(`{Nome: ${obj.nome}, Telefone: ${obj.numero}}\n`)
    })
    console.log("");
}

function updateContato(name: string ): void { 
    if (indice_Contato.includes(name)){ 
        const i = indice_Contato.indexOf(name);

        const newName:string = prompt("Nome:");
        const newNumber: number = Number(prompt("Telefone:"));
        
        lista_Contatos[i].nome = newName;
        lista_Contatos[i].numero = newNumber;

        indice_Contato[indice_Contato.indexOf(name)] = newName;

        console.log("\nContato atualizado!\n")

        return;
    }

    console.log("\nContato não existente!\n");
}

function deleteContato(name: string): void {

    if (indice_Contato.includes(name)){
        const i = indice_Contato.indexOf(name);
        lista_Contatos.splice(i, 1);
        indice_Contato.splice(i, 1);

        console.log("\nContato excluído!\n")

        return
    }

    console.log("\nContato não existente!\n")
}

console.log("\nCRUD | LISTA DE CONTATOS\n");


while(true){

    console.log("\n=== MENU PRINCIPAL ===");
    console.log("[1] Adicionar contato");
    console.log("[2] Listar contatos");
    console.log("[3] Atualizar contato");
    console.log("[4] Deletar contato");
    console.log("[0] Sair\n");


    const opcao = Number(prompt("Selecione uma opção:"));

    
    switch (opcao){

        case 0:

            console.log("\nEncerrando programa...")
            process.exit(0)

        case 1:

            const nome: string = prompt("Nome:");
            const numero: number = Number(prompt("Telefone:"));
            const contato: Contato = {nome: nome, numero: numero};

            addContato(contato);

            break;

        case 2:

            listar_Contatos(lista_Contatos);

            break;

        case 3: 

            const searchName: string = prompt("Nome do contato:");
            updateContato(searchName);
            break;

        case 4:

            const deleteName = prompt("Nome do contato:");
            deleteContato(deleteName);
            break;

        default:

            console.log("\nOpção inválida!\n")
            break;
    }
}