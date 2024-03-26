class Actions {
    static visitUrl(url){
        return new Promise((resolve, reject) => {    
            setTimeout(() => {
                if(url.startsWith('www') || url.startsWith('https://'))
                resolve(console.log('URL visited successfully'));
                else reject('Wrong URL');
            }, 1000);
        })
    }
    static login(username, password){
        return new Promise((resolve, reject) => {    
            setTimeout(() => {
                if(username === 'TechGlobal' && password === 'Test1234')
                resolve(console.log('Logged in successfully'));
                else reject('Wrong credentials');
            }, 3000);
        })
    }
    static validateTitle(title){
        return new Promise((resolve, reject) => {    
            setTimeout(() => {
                if(title !== '' && title !== undefined && title !== null)
                resolve(console.log('Title validated successfully'));
                else reject('Wrong title');
            }, 500);
        })
    }
}

module.exports.Actions = Actions