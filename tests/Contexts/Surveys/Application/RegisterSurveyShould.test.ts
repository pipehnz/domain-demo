import RegisterSurvey from "@App/Surveys/Application/Create/RegisterSurvey"
import InMemorySurveyRepository from "@App/Surveys/Infrastructure/Persistence/InMemory/InMemorySurveyRepository";
import InMemoryEventBus from "@App/Surveys/Infrastructure/Event/InMemoryEventBus";

const repository = new InMemorySurveyRepository();
const eventBus = new InMemoryEventBus();

describe('Register survey should', () => {
    test('create a new survey', (done) => {        
        const registerSurvey = new RegisterSurvey(repository, eventBus);

        registerSurvey.registerSurvey(1, 'Encuesta familiar');

        done();
    })
})