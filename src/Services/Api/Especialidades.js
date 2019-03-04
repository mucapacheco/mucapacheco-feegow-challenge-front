import BaseApi from "./BaseApi";

class Especialidades extends BaseApi{

    static getEspecialidades() {
        return this.get('/api/especialidades');
    }

    static getEspecialidade(especialidade){
        return this.getEspecialidades().then((response) => {
            return response.find((a) => a.especialidade_id === especialidade);
        });
    }

}

export default Especialidades;