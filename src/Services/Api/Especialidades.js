import BaseApi from "./BaseApi";

class Especialidades extends BaseApi{

    static getEspecialidades() {
        return this.get('/5c7b05982f00006700e59e52');
    }

    static getEspecialidade(especialidade){
        return this.getEspecialidades().then((response) => {
            return response.find((a) => a.especialidade_id === especialidade);
        });
    }

}

export default Especialidades;