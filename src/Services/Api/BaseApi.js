class BaseApi {

    static urlfeegow = 'http://www.mocky.io/v2';
    static urlchallenge = 'http://www.mocky.io/v2';

    static get(path){
        return fetch(`${this.urlfeegow}${path}`).then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        }).then(function (response) {
            if (response.success !== true) {
                throw Error("Erro ao consultar a api");
            };
            return response.content;
        });
    }

    static postObject(path,data){
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("x-access-token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmZWVnb3ciLCJhdWQiOiJwdWJsaWNhcGkiLCJpYXQiOiIxNy0wOC0yMDE4IiwibGljZW5zZUlEIjoiMTA1In0.UnUQPWYchqzASfDpVUVyQY0BBW50tSQQfVilVuvFG38");


        return fetch(`${this.urlfeegow}${path}`,{
            headers,
            body: JSON.stringify(data),
            method: 'POST'
        })
            .then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        }).then(function (response) {
            if (response.success !== true) {
                throw Error("Erro ao consultar a api");
            };
            return response.content;
        });
    }
}

export default BaseApi;