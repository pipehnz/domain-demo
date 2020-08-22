import EventBus from "@App/Shared/Domain/Bus/Event/EventBus";
import DomainEvent from "@App/Shared/Domain/Bus/Event/DomainEvent";

export default class FakeEventBus implements EventBus {
    publish(events: Array<DomainEvent>): void {
        
    }
}
