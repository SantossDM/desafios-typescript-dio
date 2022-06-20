// Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {
    code: 10,
    name: "Jhon"
};

interface IEmployee {
    code: number;
    name: string;
}

let Employee: IEmployee = {
    code: 10,
    name: "Jhon"
}

employee.code = 10;
employee.name = "John";