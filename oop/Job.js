class Job {
    constructor(title, description, salary) {
        this.title = title
        this.description = description
        this.salary = salary
    }

    logJobDescription() {
        console.log(
            'Job title: ' + this.title + ' Job description: ' + this.description
        )
    }
}

module.exports = Job
