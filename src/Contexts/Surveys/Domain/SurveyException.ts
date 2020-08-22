export default class SurveyException extends Error {
    constructor(exception: string) {
        super(exception);
    }
}