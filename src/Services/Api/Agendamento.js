import BaseApi from "./BaseApi";

class Agendamento extends BaseApi{

    static agendar(data) {
        return this.postObject('/api/agendamento',data);
    }
}

export default Agendamento;