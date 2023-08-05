import Link from 'next/link';


interface eletype{
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rating:any;
  }
function cart(){

    let productArray :any= [];
  
        if(localStorage.getItem("CartPro") !== null)
        {
        
            productArray =(localStorage.getItem("CartPro"));
            productArray = JSON.parse(productArray);
        }      
       
     

    return(
        <div>
            
            <div style={{display:"flex",}}  >
                <h1 style={{ margin:"30px"}}>cart page</h1>
                <Link href="/"><button  style={{fontSize:"30px" , marginLeft:"1100px", marginTop:"20px"}}>Product page</button> </Link>
            </div>
            
             <div style={{  gap:"10px"}}>

                {
                     productArray.map((ele:eletype)=>{
                        return <div style={{display:"flex",  margin:"30px"}}>
                                     <img src={ele.image} alt="" width="120px" height="150px"/>
                                        <div style={{ margin:"10px"}}>                    
                                            <div className=""><h3 className="font-semibold">{ele.title}</h3></div>
                                            <br />
                                            <div><h5 className="">${ele.price}</h5></div>
                                            <br />
                                        
                                        </div>
                                </div>
                      })
                }
               
           </div>
        </div>
    )
}
export default cart;