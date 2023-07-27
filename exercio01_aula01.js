class Pessoa {
    constructor (nome, data_de_nacimento, altura){
    this.nome = nome;
    this.data_de_nacimento = data_de_nacimento;
    this.altura = altura;
    }
    idade(){
        let anoNacimento = this.data_de_nacimento.split("/")[2];
    return 2023 - anoNacimento;
    }

 MostrarAtributos(){
    return this.nome + " " + this.data_de_nacimento + " " + this.idade + " " +this.altura
 }

}

const pessoa = new Pessoa ("Marya", "16/11/2006", "1,55")
console.log(pessoa.nome);
console.log(pessoa.idade());
console.log(pessoa.altura);