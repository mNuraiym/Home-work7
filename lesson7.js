class Worker {
    constructor(name,surname,rate,days) {
        this.name=name;
        this.surname=surname;
        this.rate=rate;
        this.days=days;
    }
    getSalary(){
        return this.rate*this.days;
    }
}
const worker=new Worker('nuraiym','maratkyzy','1000','10')
console.log(worker.name)
console.log(worker.surname)
console.log(worker.rate)
console.log(worker.days)
console.log(worker.getSalary())

///////////////////////////////////////////////////
class Worker2 {
    #name
    #surname
    #rate
    #days
    constructor(name,surname,rate,days) {
        this.#name=name;
        this.#surname=surname;
        this.#rate=rate;
        this.#days=days;
    }
    getName() {
    return this.#name;
    }
    getSurname() {
    return this.#surname;
    }
    getRate() {
    return this.#rate;
    }
    getDays() {
    return this.#days;
    }
    getSalary(rate,days) {
        let salary=this.#rate*this.#days;
        return salary;
    }
}
const worker2=new Worker2('nuraiym','maratkyzy','1000','10')
console.log(worker2.getName());
console.log(worker2.getSurname());
console.log(worker2.getRate());
console.log(worker2.getDays());
console.log(worker2.getSalary());
