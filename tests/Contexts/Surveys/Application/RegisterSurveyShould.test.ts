import RegisterSurvey from "@App/Surveys/Application/Create/RegisterSurvey"

import InMemorySurveyRepository from "@App/Surveys/Infrastructure/Persistence/InMemory/InMemorySurveyRepository";
import FakeEventBus from "../Infrastructure/FakeEventBus";

const repository = new InMemorySurveyRepository();
const eventBus = new FakeEventBus();

describe('Register survey should', () => {
    test('create a new survey', (done) => {        
        const registerSurvey = new RegisterSurvey(repository, eventBus);

        registerSurvey.registerSurvey(1, 'Encuesta familiar');

        done();
    })
})