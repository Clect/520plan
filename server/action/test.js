module.exports = function*(){

    let ret = {
        'a':1,
    }

    return new this.U.JsonOk(ret);
}