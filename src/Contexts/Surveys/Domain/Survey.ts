import SurveyId from "./SurveyId";
import SurveyName from "./SurveyName";
import AggregateRoot from "@App/Shared/Domain/Aggregate/AggregateRoot";
import SurveyCreatedDomainEvent from "./Event/SurveyCreatedDomainEvent";

export default class Survey extends AggregateRoot {
    private surveyId: SurveyId;
    private surveyName: SurveyName;

    constructor(surveyId: SurveyId, surveyName: SurveyName) {
        super();

        this.surveyId = surveyId;
        this.surveyName = surveyName;
    }

    Id() {
        return this.surveyId;
    }

    Name() {
        return this.surveyName;
    }

    public toPrimitives() {
        return {
            Id: this.surveyId.value(),
            Name: this.surveyName.value()
        }
    }

    public static createFromPrimitives(surveyId: Number, surveyName: String) : Survey {
        const survey = new Survey(SurveyId.create(surveyId), new SurveyName(surveyName));

        survey.record(new SurveyCreatedDomainEvent(
            surveyId.toString(),
            'S-000-20200820',
            new Date().toString(),
            surveyId,
            surveyName
        ))

        return survey;
    }
}