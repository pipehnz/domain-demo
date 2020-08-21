export default class StringValueObject {
    private stringValue: String;

    constructor(value: String) {
        this.stringValue = value;
    }

    value() {
        return this.stringValue;
    }

    toString() {
        return this.value().toString();
    }
}