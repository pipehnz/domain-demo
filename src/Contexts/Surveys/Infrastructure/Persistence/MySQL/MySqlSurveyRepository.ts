import Survey from "@App/Surveys/Domain/Survey";
import SurveyId from "@App/Surveys/Domain/SurveyId";
import SurveyRepository from "@App/Surveys/Domain/SurveyRepository";
import MySqlRepository from "@App/Shared/Infrastructure/MySqlRepository";

export default class MySqlSurveyRepository extends MySqlRepository implements SurveyRepository {

    findById(surveyId: SurveyId): Promise<Survey> {
        return new Promise<Survey>((resolve, reject) => {
            const query = `SELECT Id, Name FROM Surveys WHERE Id = ${surveyId.value()}`;
        
            this.executeQuery(query, (error, results) => {
                if(error) reject(error);
    
                resolve(Survey.createFromPrimitives(results[0].Id, results[0].Name));
            });
        })
    }

    getAll(): Array<Survey> {
    //     const query = `SELECT Id, Name FROM Surveys`;
    //     const surveysDto: Array<SurveyDTO> = await this.findAll(query);
    //     const surveys =  surveysDto.map((surveyDto: SurveyDTO) => Survey.createFromDto(surveyDto));

    //     return surveys;
        throw new Error("Method not implemented.");
    }

    save(survey: Survey): void {
        const query = `INSERT INTO Surveys (Id, Name) VALUES (${survey.Id().value()},'${survey.Name().value()}')`;

        this.executeQuery(query, (error, results, fields) => {
            if(error) throw error;
        });
    }
}