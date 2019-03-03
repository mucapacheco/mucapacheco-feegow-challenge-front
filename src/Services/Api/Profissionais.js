import {Component} from 'react';

class Profissionais extends BaseApi {
    static getProfissionais(especialidade) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("x-access-token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmZWVnb3ciLCJhdWQiOiJwdWJsaWNhcGkiLCJpYXQiOiIxNy0wOC0yMDE4IiwibGljZW5zZUlEIjoiMTA1In0.UnUQPWYchqzASfDpVUVyQY0BBW50tSQQfVilVuvFG38");

        return fetch('http://www.mocky.io/v2/5c7b15482f00006100e59e5b?especialidade_id=' + especialidade, {
            headers: headers
        }).then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        }).then(function (response) {
            if (response.success !== true) {
                throw Error("Erro ao consultar a api");
            }
            return response.content;
        });
    }

    static getProfissional(especialidade,profissional){
        return this.getProfissionais(especialidade).then((response) => {
            return response.find((a) => a.profissional_id === profissional);
        });
    }

}

export default Profissionais;