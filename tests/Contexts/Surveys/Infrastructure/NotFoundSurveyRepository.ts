import SurveyRepository from '@App/Surveys/Domain/SurveyRepository';
import SurveyId from '@App/Surveys/Domain/SurveyId';
import Survey from '@App/Surveys/Domain/Survey';
import SurveyException from '@App/Surveys/Domain/SurveyException';

export default class NotFoundSurveyRepository implements SurveyRepository {
    findById(surveyId: SurveyId): Promise<Survey> {
        throw new SurveyException('Survey can\'t find');
    }
    getAll(): Array<Survey> {
        throw new SurveyException('Survey can\'t find');
    }
    save(survey: Survey): void {
        throw new SurveyException('Survey can\'t save');
    }
}