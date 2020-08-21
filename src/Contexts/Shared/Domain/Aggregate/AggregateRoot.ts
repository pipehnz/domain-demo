import DomainEvent from "../Bus/Event/DomainEvent";

export default abstract class AggregateRoot {
    private domainEvents: Array<DomainEvent>;

    constructor() {
        this.domainEvents = []
    }

    pullDomainEvents(): Array<DomainEvent>
    {
        const domainEvents = this.domainEvents;
        
        this.domainEvents = [];

        return domainEvents;
    }

    protected record(domainEvent: DomainEvent): void
    {
        this.domainEvents.push(domainEvent);
    }
}