import EventBus from "@App/Shared/Domain/Bus/Event/EventBus";
import DomainEvent from "@App/Shared/Domain/Bus/Event/DomainEvent";

export default class InMemoryEventBus implements EventBus {
    constructor() {
    }

    publish(events: Array<DomainEvent>): void {
        events.forEach((event: DomainEvent) => {
            console.log(`ID: '${event.eventId()}' Event: '${event.eventName()}' Published: ${event.ocurredOn()}`)
        });
    }
}