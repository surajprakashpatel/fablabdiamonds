
import ItemCard from "../components/item-card"
import pendant1 from "../images/pendants/pendant1.png"
import pendant2 from "../images/pendants/pendant2.png"
import pendant3 from "../images/pendants/pendant3.png"
import pendant4 from "../images/pendants/pendant4.png"
import pendant5 from "../images/pendants/pendant5.png"
import pendant6 from "../images/pendants/pendant6.png"
import pendant7 from "../images/pendants/pendant7.png"

  
  const Necklace = () => {
 

      return (

        <div className="section-container">
    <div className="max-width-container">
    
      <div className="home-cards-container">
      
              
      <ItemCard
            name="Earring"
            value="3"
            imageSrc={pendant1}
          ></ItemCard>
              
                
              <ItemCard
            name="Amazing Earring "
            value="3"
            imageSrc={pendant2}
          ></ItemCard>
              
                       
                 
              <ItemCard
            name="Earring"
            value="3"
            imageSrc={pendant3}
          ></ItemCard>
                 
                 <ItemCard
            name="Earring"
            value="3"
            imageSrc={pendant4}
          ></ItemCard>
                   
                 
                   <ItemCard
            name="Earring"
            value="3"
            imageSrc={pendant5}
          ></ItemCard>
                             
      <ItemCard
            name="Earring"
            value="3"
            imageSrc={pendant6}
          ></ItemCard>           
          <ItemCard
                name="Earring"
                value="3"
                imageSrc={pendant7}
              ></ItemCard>
     
      </div>
    </div>
    </div>
       
       
      );
    };
  
  export default Necklace;