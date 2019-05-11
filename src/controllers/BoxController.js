const Box = require('../models/Box');

class BoxController{
  //async eh uma promise
  async store(req, res){
    //await eh uma promise
    const box = await Box.create( req.body );
    return res.json(box);
    //return res.send(req.body.title);
  }

  async show(req, res){
    const box = await Box.findById(req.params.id).populate({
      path: 'files',
      options: {sort: { createdAt: -1 } }
    });

    return res.json(box);

  }
}

module.exports = new BoxController(); 