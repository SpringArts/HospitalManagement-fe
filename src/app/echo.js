import Echo from "laravel-echo";
import Pusher from "pusher-js";

const echo = new Echo({
    broadcaster: 'pusher',
    key: 'ABCDEFG',
    cluster: 'mt1',
    encrypted: true,
    wsHost: '127.0.0.1',
    wsPort: 6001, // Laravel Echo Server port
    forceTLS: false, // Change this to true if you're using HTTPS
});

export default echo;
