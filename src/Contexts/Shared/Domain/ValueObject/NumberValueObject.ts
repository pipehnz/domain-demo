export default class NumberValueObject {
    private numberValue: number;

    constructor(value: number) {
        this.numberValue = value;
    }

    value() {
        return this.numberValue;
    }

    toString() {
        return this.value().toString();
    }
}