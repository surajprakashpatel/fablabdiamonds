
import ItemCard from "../components/item-card"
import image5 from "../images/ring5.webp"
  
  const Rings = () => {
 

      return (

        <div className="section-container">
    <div className="max-width-container">
    
      <div className="home-cards-container">
      
      <ItemCard
            name="Earring"
            value="3"
            imageSrc={image5}
          ></ItemCard>
              
                
              <ItemCard
            name="Amazing Earring "
            value="3"
            imageSrc={image5}
          ></ItemCard>
              
                       
                 
              <ItemCard
            name="Earring"
            value="3"
            imageSrc={image5}
          ></ItemCard>
                 
                 <ItemCard
            name="Earring"
            value="3"
            imageSrc={image5}
          ></ItemCard>
                   
                 
                   <ItemCard
            name="Earring"
            value="3"
            imageSrc={image5}
          ></ItemCard>
                             
      <ItemCard
            name="Earring"
            value="3"
            imageSrc={image5}
          ></ItemCard>           
          <ItemCard
                name="Earring"
                value="3"
                imageSrc={image5}
              ></ItemCard>
          
     
      </div>
    </div>
    </div>
       
       
      );
    };
  
  export default Rings;