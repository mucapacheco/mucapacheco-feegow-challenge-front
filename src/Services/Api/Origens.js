import BaseApi from "./BaseApi";

class Origens extends BaseApi {
    static getOrigens() {
        return this.get('/5c7b3f7d2f00006100e59e77');
    }
}

export default Origens;