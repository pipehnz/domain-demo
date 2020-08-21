import DomainEvent from "./DomainEvent";

export default interface EventBus
{
    publish(events: Array<DomainEvent>): void;
}