import RegisterSurvey from "@App/Surveys/Application/Create/RegisterSurvey"
import SearchSurvey from "@App/Surveys/Application/Find/SearchSurvey";

import InMemorySurveyRepository from "@App/Surveys/Infrastructure/Persistence/InMemory/InMemorySurveyRepository";
import FakeEventBus from "../Infrastructure/FakeEventBus";

const repository = new InMemorySurveyRepository();
const eventBus = new FakeEventBus();

describe('Search survey should', () => {
    test('find survey id', async () => {
        const registerSurvey = new RegisterSurvey(repository, eventBus);

        registerSurvey.registerSurvey(1, 'Encuesta familiar');

        const searchSurvey = new SearchSurvey(repository);

        const expectedId = 1, expectedName ='Encuesta familiar';

        const surveyFinded = await searchSurvey.findSurveyById(1);

        expect(expectedId).toBe(surveyFinded.Id().value());
        expect(expectedName).toBe(surveyFinded.Name().value());
    })
})