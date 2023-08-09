import {Request, Response} from "express";
import cepApi from '../services/cepApi';

const cepController = {
    
    show: async (req: Request, res: Response) => {        
        
        try {
            
            const page: String = req.route.path.replace("/","");
            const {zipcode} = req.body;
            const {data} = await cepApi.get(`/cep/v2/${zipcode}`);

            if(data){

                const objData: {
                        cssType: String, 
                        title: String, 
                        zipcode: String, 
                        state: String, 
                        city: String, 
                        neighborhood: String, 
                        street: String 
                } = {cssType: `/css/${page}.css`, title: "API | ZipCode", zipcode: data.cep, ...data};
                 
                return res.status(200).render('cep', objData);
            }

            res.status(400).end(`<h2>Cep inválido!</h2>`);

        } catch(err){
            return res.status(400).send(`<h2>Cep inválido!</h2>`);
        }
    },

    screen: (req: Request, res: Response) => {

        const objData: {cssType: String, title: String} = {cssType: '/css/style.css', title: "API | Home"};
        return res.render('home', objData);
    }
};

export default cepController;