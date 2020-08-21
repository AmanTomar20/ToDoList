const express=require('express')
const bodyParser=require('body-parser')
const ejs=require('ejs')
const app=express()

app.use(bodyParser.urlencoded({
    extended:true
}))
const listItem=['Buy Food','Cook Food','Eat Food']
const workItem=[]
app.set('view engine', 'ejs');

app.use(express.static('public'))

app.post('/',(req,res)=>{
    listItem.push(req.body.newItem)
    res.redirect('/')
})

app.get('/', (req, res) => {
    const date=new Date()
    var options = { weekday: 'long', day: 'numeric', month: 'long' }
    const day=date.toLocaleDateString('en-US',options)
    res.render('index', {path:'',title:day,listItem})
});

app.get('/work',(req,res)=>{
    res.render('index',{path:'work',title:'Work List',listItem:workItem})
})

app.post('/work',(req,res)=>{
    workItem.push(req.body.newItem)
    res.redirect('/work')
})
app.get('/about',(req,res)=>{
    res.render('about',{path:'about'})
})
app.listen(3000,()=>console.log('App is running on port 3000'))