export default class NumberValueObject {
    private numberValue: Number;

    constructor(value: Number) {
        this.numberValue = value;
    }

    value() {
        return this.numberValue;
    }

    toString() {
        return this.value().toString();
    }
}