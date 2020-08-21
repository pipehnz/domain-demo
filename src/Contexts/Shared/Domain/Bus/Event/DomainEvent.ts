export default abstract class DomainEvent {
    private _aggregateId: string;
    private _eventId: string;
    private _ocurredOn: string;

    constructor(aggregateId: string, eventId: string, ocurredOn: string | null) {
        this._aggregateId = aggregateId;
        this._eventId = eventId;
        this._ocurredOn = ocurredOn == null ? new Date().toString() : ocurredOn;
    }

    abstract fromPrimitives(
        aggregateId: string,
        body: Array<Object>,
        eventId: string,
        occurredOn: string
    ) : Object;

    abstract eventName(): string;

    abstract toPrimitives(): {};

    aggregateId() : string {
        return this._aggregateId;
    }

    eventId() : string {
        return this._eventId;
    }

    ocurredOn() : string {
        return this._ocurredOn.toString();
    }
}