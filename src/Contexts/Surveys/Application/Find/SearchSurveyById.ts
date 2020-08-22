import Survey from "@App/Surveys/Domain/Survey";
import SurveyId from "@App/Surveys/Domain/SurveyId";
import SurveyException from "@App/Surveys/Domain/SurveyException";
import SurveyRepository from "@App/Surveys/Domain/SurveyRepository";

export default class SearchSurveyById {
    private surveyRepository: SurveyRepository;

    constructor(surveyRepository: SurveyRepository) {
        this.surveyRepository = surveyRepository;
    }

    async findSurveyById(surveyId: number) {
        return this.isValidSurvey(await this.surveyRepository.findById(SurveyId.create(surveyId)));
    }

    private isValidSurvey(survey: Survey) {
        if(survey.Id().value() == 0)
            throw new SurveyException('Survey does not exist')
        
        return survey;
    }
}