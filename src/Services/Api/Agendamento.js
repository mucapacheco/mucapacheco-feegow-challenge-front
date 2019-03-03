import BaseApi from "./BaseApi";

class Agendamento extends BaseApi{

    static agendar(data) {
        return this.postObject('/5c7b05982f00006700e59e52',data);
    }
}

export default Agendamento;