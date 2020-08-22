import Survey from '@App/Surveys/Domain/Survey';
import SurveyId from '@App/Surveys/Domain/SurveyId';
import SurveyException from '@App/Surveys/Domain/SurveyException';
import SurveyRepository from '@App/Surveys/Domain/SurveyRepository';

export default class InMemorySurveyRepository implements SurveyRepository {
    private surveys: Array<Survey>;

    constructor() {
        this.surveys = [];
    }

    getAll() {
        return this.surveys;
    }

    findById(surveyId: SurveyId): Promise<Survey> {
        return new Promise<Survey>((resolve, reject) => {
            const survey = this.surveys.find((surveyFinded, index: number) => surveyFinded.toPrimitives().Id == surveyId.value());

            if (survey === null) {
                reject(new SurveyException('Surveys does not exists'))
            }

            resolve(survey);
        })
    }

    save(survey: Survey): void {
        this.surveys = [survey, ...this.surveys];
    }
}