// Como podemos melhorar o esse código usando TS? 

enum Profissao {
    Atriz,
    Padeiro
}

interface IPessoas {
    nome     : string;
    idade    : number;
    profissao: Profissao;
}

let pessoa1: IPessoas = {
    nome     : "maria",
    idade    : 29,
    profissao: Profissao.Atriz
};


let pessoa2: IPessoas = {
    nome     : "roberto",
    idade    : 19,
    profissao: Profissao.Padeiro
}


let pessoa3: IPessoas = {
    nome     : "laura", 
    idade    : 32,
    profissao: Profissao.Atriz
};

let pessoa4: IPessoas = {
    nome     : "carlos",
    idade    : 19,
    profissao: Profissao.Padeiro
}