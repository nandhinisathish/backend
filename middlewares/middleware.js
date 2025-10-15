export const globalErr =  (err, _req, res, _next) => {

    res.json({msg: `${err.message}`});

}

export const log = (req, res, next) =>{

    console.log(`${req.method} - ${req.path}`);

} 