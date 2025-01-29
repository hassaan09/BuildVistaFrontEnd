export const environment = {
    local:{
        production: false,
        apiUrl: 'http://localhost:3500/api', // Replace with your dev backend URL
        socketUrl:'http://localhost:4000/',
    },
    prod:{
        production: true,
        apiUrl: 'https://your-production-api-url.com/', // Replace with your prod backend URL
    }
};
  