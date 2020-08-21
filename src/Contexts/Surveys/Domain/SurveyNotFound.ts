export default class SurveyNotFound extends Error {
    constructor(exception: string) {
        super(exception);
    }
}