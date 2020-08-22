import SurveyRepository from '@App/Surveys/Domain/SurveyRepository';
import SurveyId from '@App/Surveys/Domain/SurveyId';
import Survey from '@App/Surveys/Domain/Survey';
import SurveyException from '@App/Surveys/Domain/SurveyException';

export default class NotFoundSurveyRepository implements SurveyRepository {
    findSurveyById(surveyId: SurveyId): Promise<Survey | undefined> {
        throw new SurveyException('Survey can\'t find');
    }
    findAllSurveys(): Array<Survey> {
        throw new SurveyException('Survey can\'t find');
    }
    save(survey: Survey): void {
        throw new SurveyException('Survey can\'t save');
    }
}