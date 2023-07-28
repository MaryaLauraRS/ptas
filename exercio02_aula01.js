class Aluno_Matriculado {
    constructor(nome, matricula, Ntrabalho, Nprova){
        this.nome = nome;
        this.matricula = matricula;
        this.Ntrabalho = Ntrabalho;
        this.Nprova = Nprova;
    }
    media () {
      return ( this.Ntrabalho + this.Nprova ) / 2 
      };
      falta() {
        if (this.media >= 7 ) {
            console.log ("Você já passou")
        } else {
            let soma = 7 - this.media();
            return "Falta " + soma + " Para você passar"
        }
        }
}

const aluno_matriculado = new Aluno_Matriculado ("300026-2", "Marya Laura",6, 5, 6);
console.log(aluno_matriculado.nome);
console.log(aluno_matriculado.matricula);
console.log(aluno_matriculado.Ntrabalho);
console.log(aluno_matriculado.Nprova);
console.log(aluno_matriculado.media());
console.log(aluno_matriculado.falta());
