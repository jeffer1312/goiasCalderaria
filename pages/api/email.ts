import {NowRequest,NowResponse} from '@vercel/node'
export default (req: NowRequest,res:NowResponse) =>{
 const {values} = req.body
 const {name,email,mensagem} = values
 
 require("./nodemail")(email, name, mensagem)
   .then((response) => res.json(response))
   .catch((error) => res.json(error));
   
   
}