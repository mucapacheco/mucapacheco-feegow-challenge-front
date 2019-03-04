import BaseApi from "./BaseApi";

class Origens extends BaseApi {
    static getOrigens() {
        return this.get('/api/feegowgeneric/patient/list-sources');
    }
}

export default Origens;