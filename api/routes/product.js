const product=require('../../models/product')

module.exports= function(router){
    router.get('/product',function(req,res){
        // res.send('Hello')
        product.find({},(err,product)=>{
            if(err){
                res.json({success:false,message:err})
            }else{
                if(!product){
                    res.json({success:false,message:'No record'})
                }else{
                    res.json({success:true,product:product})
                }
            }
        })
        
    })


    router.post('/product',function(req,res){
        let note=new product(req.body)
        note.save(function(err,note){
            if(err){
                return res.status(400).json(err)
            }
            res.status(200).json(note)
        })
    })

    router.put('/updateproduct',function(req,res){
        if(!req.body._id){
            res.json({success:false,message:'No id provided'})
        }else{
            product.findOne({_id:req.body._id},(err,product)=>{
                if(err){
                    res.json({success:false,message:'not a valid id'})
                }else{
                    product.ProductName=req.body.ProductName
                    product.ProductDesc=req.body.ProductDesc
                    product.ProductPrice=req.body.ProductPrice
                    product.ManufactureDate=req.body.ManufactureDate
                    product.ExpiryDate=req.body.ExpiryDate
                    product.save((err)=>{
                        if(err){
                            res.json({success:false,message:err})
                        }
                        else{
                            res.json({success:true,message:'updated successfully'})
                        }
                    })
                }
            })
        }
    })



    router.delete('/deleteproduct/:id',function(req,res){
        if(!req.params.id){
            res.json({success:false,message:'No id provided'})
        }else{
            product.findOne({_id:req.params.id},(err,product)=>{
                if(err){
                    res.json({success:false,message:'not a valid id'})
                }else{
                   
                    product.remove((err)=>{
                        if(err){
                            res.json({success:false,message:err})
                        }
                        else{
                            res.json({success:true,message:'deleted successfully'})
                        }
                    })
                }
            })
        }
    })

}
                    