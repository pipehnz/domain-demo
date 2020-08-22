import SurveyRepository from "@App/Surveys/Domain/SurveyRepository";

export default class SearchAllSurveys {
    private surveyRepository: SurveyRepository;

    constructor(surveyRepository: SurveyRepository) {
        this.surveyRepository = surveyRepository;
    }

    findAllSurveys() {
        return this.surveyRepository.getAll();
    }
}