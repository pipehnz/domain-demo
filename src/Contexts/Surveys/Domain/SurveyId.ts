import NumberValueObject from "@App/Shared/Domain/ValueObject/NumberValueObject";

export default class SurveyId extends NumberValueObject {
    private constructor(surveyId: number) {
        super(surveyId);
    }

    static create(surveyId: number) : SurveyId {
        if (surveyId <= 0)
            throw new Error('The ID for this survey is not valid');

        return new SurveyId(surveyId);
    }
}