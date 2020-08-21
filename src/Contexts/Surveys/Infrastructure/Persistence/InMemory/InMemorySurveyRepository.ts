import Survey from '@App/Surveys/Domain/Survey';
import SurveyId from '@App/Surveys/Domain/SurveyId';
import SurveyNotFound from '@App/Surveys/Domain/SurveyNotFound';
import SurveyRepository from '@App/Surveys/Domain/SurveyRepository';

export default class InMemorySurveyRepository implements SurveyRepository {
    private surveys: Array<Survey>;

    constructor() {
        this.surveys = [];
    }

    async findAllSurveys() {
        return this.surveys;
    }

    async findSurveyById(surveyId: SurveyId): Promise<Survey | SurveyNotFound | undefined> {
        const survey = this.surveys.find((survey: Survey, index: Number) => survey.toPrimitives().Id == surveyId.getPrimitive());

        if(survey === null) {
            throw new SurveyNotFound()
        }

        return survey;
    }

    save(survey: Survey): void {
        this.surveys = [survey, ...this.surveys];
    }
}