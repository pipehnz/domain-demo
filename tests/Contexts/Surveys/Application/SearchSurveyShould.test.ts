import RegisterSurvey from "@App/Surveys/Application/Create/RegisterSurvey"
import SearchSurvey from "@App/Surveys/Application/Find/SearchSurvey";

import InMemorySurveyRepository from "@App/Surveys/Infrastructure/Persistence/InMemory/InMemorySurveyRepository";
import FakeEventBus from "../Infrastructure/FakeEventBus";
import NotFoundSurveyRepository from "../Infrastructure/NotFoundSurveyRepository";
import SurveyException from "@App/Surveys/Domain/SurveyException";

const repository = new InMemorySurveyRepository();
const notFoundRepository = new NotFoundSurveyRepository();
const eventBus = new FakeEventBus();

describe('Search survey should', () => {
    test('return a finded survey by id', async () => {
        const registerSurvey = new RegisterSurvey(repository, eventBus);

        registerSurvey.registerSurvey(1, 'Encuesta familiar');

        const searchSurvey = new SearchSurvey(repository);

        const expectedId = 1, expectedName ='Encuesta familiar';

        const surveyFinded = await searchSurvey.findSurveyById(1);

        expect(expectedId).toBe(surveyFinded.Id().value());
        expect(expectedName).toBe(surveyFinded.Name().value());
    })

    test('return an exception when i try find a survey by id ', () => {
        const searchSurvey = new SearchSurvey(notFoundRepository);

        const surveyId = 5;

        searchSurvey.findSurveyById(surveyId)
            .catch(error => expect(error).toBeInstanceOf(SurveyException))
    })
})