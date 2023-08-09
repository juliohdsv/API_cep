import {Request, Response, NextFunction} from "express";

const checkData = (req: Request, res: Response, next: NextFunction)=>{

    const {zipcode} = req.body;
    if(!zipcode){
        return res.status(400).send("<h2/>Favor, preencher o campo com o número do cep</h2>");
    }

    next();
}

export default checkData;