import Survey from "@App/Surveys/Domain/Survey";
import SurveyId from "@App/Surveys/Domain/SurveyId";
import SurveyNotFound from "@App/Surveys/Domain/SurveyNotFound";
import SurveyRepository from "@App/Surveys/Domain/SurveyRepository";

export default class SearchSurvey {    
    private surveyRepository: SurveyRepository;
 
    constructor(surveyRepository: SurveyRepository) {
        this.surveyRepository = surveyRepository;
    }

    findAllSurveys() {
        return this.surveyRepository.findAllSurveys();
    }

    async findSurveyById(surveyId: Number) {
        return this.isValidSurvey(await this.surveyRepository.findSurveyById(SurveyId.create(surveyId)));
    }

    private isValidSurvey(survey: Survey) {
        if(survey.Id().value() == 0)
            throw new SurveyNotFound('Survey does not exist')
        
        return survey;
    }
}