class Api {
    static HOST = 'http://intravision-task.test01.intravision.ru';
    
    constructor(token) {
        this.token = token;
    }

    get prefix() {
        return `${Api.HOST}/api/${this.token}`;
    }

    request(endpoint, options) {
        return fetch(endpoint, options).then(r => {
            if (r.status === 200) {
                return r.json()
            }
            if (r.status === 404) {
                throw new Error("Not Found");
            }
            return r.text().then(msg => {
                throw new Error(msg);
            })
        });
    }

    getPriorities() {
        return this.request(`${this.prefix}/Priorities`)
    }
    
    // http://intravision-task.test01.intravision.ru/odata/tasks?tenantguid=f06e33d8-5eb0-4182-85df-f3e790ff0328
    getTasks() {
        return this.request(`${Api.HOST}/odata/tasks/?tenantguid=${this.token}`);
    }
    getTask(id) {
        return this.request(`${this.prefix}/Tasks/${id}`);
    }

    changeTask(data) {
        return this.request(`${this.prefix}/Tasks`, {
            method: "PUT",
            body: JSON.stringify(data),
        });
    }

    createNewTask(data) {
        return this.request(`${this.prefix}/Tasks`, {
            method: "POST",
            body: JSON.stringify(data),
        });
    }
}

export const api = new Api(process.env.REACT_APP_TOKEN);

