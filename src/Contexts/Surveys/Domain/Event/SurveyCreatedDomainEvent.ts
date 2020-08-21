import DomainEvent from "@App/Shared/Domain/Bus/Event/DomainEvent";

export default class SurveyCreatedDomainEvent extends DomainEvent {
    private surveyId: Number;
    private name: String;
    
    constructor(aggregateId: string, eventId: string, ocurredOn: string, surveyId: Number, surveyName: String) {
        super(aggregateId, eventId, ocurredOn);

        this.surveyId = surveyId;
        this.name = surveyName;
    }

    toPrimitives() : {} {
        return { Id: this.surveyId, Name: this.name }
    }
    
    fromPrimitives(aggregateId: string, body: Array<Object>, eventId: string, occurredOn: string): SurveyCreatedDomainEvent {
        return new SurveyCreatedDomainEvent(
            aggregateId,
            eventId,
            occurredOn,
            body['surveyId'],
            body['surveyName']
        )
    }

    eventName(): string {
        return 'survey.created';
    }
}