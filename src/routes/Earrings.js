
import ItemCard from "../components/item-card"
import earring1 from "../images/earrings/earring1.jpg"
import earring2 from "../images/earrings/earring2.png"
import earring3 from "../images/earrings/earring3.webp"
import earring4 from "../images/earrings/earring4.jpg"
import earring5 from "../images/earrings/earring15.webp"
import earring6 from "../images/earrings/earring6.webp"
import earring7 from "../images/earrings/earring7.jpg"
import earring8 from "../images/earrings/earring8.png"
import earring9 from "../images/earrings/earring9.webp"
  
  const Earrings = () => {
 

      return (

        <div className="section-container">
    <div className="max-width-container">
    
      <div className="home-cards-container">
      
                
      <ItemCard
            name="Classic Diamond Studs Set With an Emerald Solitare"
            value="3"
            imageSrc={earring1}
          ></ItemCard>
              
                
              <ItemCard
            name="Valencia Three Stone Studs"
            value="3"
            imageSrc={earring2}
          ></ItemCard>
              
                       
                 
              <ItemCard
            name="Gabriel Petite Pave Cluster Round Studs"
            value="3"
            imageSrc={earring3}
          ></ItemCard>
                 
                 <ItemCard
            name="Classic Diamond Studs Set With a Marquise Solitare"
            value="3"
            imageSrc={earring4}
          ></ItemCard>
                   
                 
                   <ItemCard
            name="Gabriel Petite Pave Cluster Cushion Studs"
            value="3"
            imageSrc={earring5}
          ></ItemCard>
                             
      <ItemCard
            name="Millenia Pear Drop Earrings"
            value="3"
            imageSrc={earring6}
          ></ItemCard>           
        <ItemCard
              name="Classic Diamond Studs Set With an Oval Solitare"
              value="3"
              imageSrc={earring7}
              ></ItemCard>

      <ItemCard
              name="Margarita Cluster Studs"
              value="3"
              imageSrc={earring8}
              ></ItemCard>
    
     
      </div>
    </div>
    </div>
       
       
      );
    };
  
  export default Earrings;