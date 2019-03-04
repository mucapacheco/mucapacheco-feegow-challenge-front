import BaseApi from "./BaseApi";

class Profissionais extends BaseApi {
    static getProfissionais(especialidade) {
        return this.get('/api/profissionais?especialidade_id=' + especialidade);
    }

    static getProfissional(especialidade, profissional) {
        return this.getProfissionais(especialidade).then((response) => {
            return response.find((a) => a.profissional_id === profissional);
        });
    }
}

export default Profissionais;