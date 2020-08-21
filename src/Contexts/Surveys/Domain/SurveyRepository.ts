import Survey from "./Survey";
import SurveyId from "./SurveyId";

export default interface SurveyRepository {
    findSurveyById(surveyId: SurveyId) : Promise<Survey>;
    findAllSurveys() : Array<Survey>;
    save(survey: Survey) : void;
}