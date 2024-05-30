class route{
    constructor({express,path})
    {
        this.router = express.Router();
        this.path = path
        
        route.start(this)
    }
    static start(params)
    {
        const {router,path} = params;

        router
        .get('/',(req,res) =>{
            res.sendFile(path.join(__dirname,'../static/signUp/createAcc.html'))
        })
        .get('/player2bot', (req,res) =>{
            res.sendFile(path.join(__dirname,'../static/botGame/bot$player.html'))
        })
    }
}

module.exports = route;