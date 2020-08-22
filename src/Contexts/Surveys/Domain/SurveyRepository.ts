import Survey from "./Survey";
import SurveyId from "./SurveyId";

export default interface SurveyRepository {
    findById(surveyId: SurveyId) : Promise<Survey>;
    getAll() : Array<Survey>;
    save(survey: Survey) : void;
}