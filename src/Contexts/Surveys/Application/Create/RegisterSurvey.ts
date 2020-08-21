import Survey from "@App/Surveys/Domain/Survey";
import SurveyRepository from "@App/Surveys/Domain/SurveyRepository";
import EventBus from "@App/Shared/Domain/Bus/Event/EventBus";

export default class RegisterSurvey {    
    private surveyRepository: SurveyRepository;
    private bus: EventBus;
 
    constructor(surveyRepository: SurveyRepository, bus: EventBus) {
        this.surveyRepository = surveyRepository;
        this.bus = bus;
    }

    registerSurvey(surveyId: Number, surveyName: String) {
        const survey = Survey.createFromPrimitives(surveyId, surveyName);

        this.surveyRepository.save(survey);

        this.bus.publish(survey.pullDomainEvents());
    }
}