class BaseApi {

    static urlfeegow = 'http://localhost:8001';

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

        return fetch(`${this.urlfeegow}${path}`,{
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