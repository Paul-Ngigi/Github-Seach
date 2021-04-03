export class Users {
    constructor(public avatar_url: string, public name: string, public login: string,
        public html_url: string, public followers: number, public following: number,
        public public_repos: number
    ) { }
}
