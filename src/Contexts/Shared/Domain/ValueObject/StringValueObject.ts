export default class StringValueObject {
    private stringValue: string;

    constructor(value: string) {
        this.stringValue = value;
    }

    value() {
        return this.stringValue;
    }

    toString() {
        return this.value().toString();
    }
}