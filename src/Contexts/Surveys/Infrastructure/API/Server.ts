import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { config } from 'dotenv'

import RegisterSurvey from '@App/Surveys/Application/Create/RegisterSurvey';
import SearchSurveyById from '@App/Surveys/Application/Find/SearchSurveyById';
import MySqlSurveyRepository from '../Persistence/MySQL/MySqlSurveyRepository';
import InMemoryEventBus from '../Event/InMemoryEventBus';
import SearchAllSurveys from '@App/Surveys/Application/Find/SearchAllSurveys';

// Bootrstrap

const app = express()

config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Services

const surveyRepository = new MySqlSurveyRepository();
const eventBus = new InMemoryEventBus();

const registerSurveyUseCase = new RegisterSurvey(surveyRepository,eventBus);
const finderSurveyByIdUseCase = new SearchSurveyById(surveyRepository);
const finderSurveyAllUseCase = new SearchAllSurveys(surveyRepository);

// Routes

app.post('/api/v1/surveys', (request: Request, response: Response) => {
    const { Id, Name } = request.body;

    registerSurveyUseCase.registerSurvey(Id, Name);

    response.json('Survey was created.');
})

app.get('/api/v1/surveys', (request: Request, response: Response) => {
    const surveys = finderSurveyAllUseCase.findAllSurveys();

    response.json(surveys);
})

app.get('/api/v1/surveys/:Id', async (request: Request, response: Response) => {
    const Id = parseInt(request.params.Id);
    const survey = await finderSurveyByIdUseCase.findSurveyById(Id);

    response.json(survey);
})

app.listen(process.env.PORT, () => {
    console.log(`Server running at port ${process.env.PORT}`);
})