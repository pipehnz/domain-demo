import MySql, { Connection, queryCallback } from 'mysql';

export default class MySqlRepository {
    private connection: Connection;

    constructor() {
        this.connection = MySql.createConnection({
            host: 'mycloud',
            user: 'root',
            password: 'r00t',
            database: 'Development'
        })
    }

    executeQuery(query: string, callback: queryCallback) {
        this.open();
        this.connection.query(query, callback)
        this.close();
    }

    protected close() {
        this.connection.end();
    }

    protected open() {
        this.connection.connect();
    }
}