
import ItemCard from "../components/item-card"
import bracelet1 from "../images/bracelets/bracelet1.webp"
import bracelet2 from "../images/bracelets/bracelet2.webp"
import bracelet3 from "../images/bracelets/bracelet3.webp"
  
  const Bracelets = () => {
 

      return (

        <div className="section-container">
    <div className="max-width-container">
    
      <div className="home-cards-container">
      
              
      <ItemCard
            name="Adjacent Pear Solitare"
            value="3"
            imageSrc={bracelet1}
          ></ItemCard>
              
                
              <ItemCard
            name="Giselle Linked Bracelet"
            value="3"
            imageSrc={bracelet2}
          ></ItemCard>
              
                       
                 
              <ItemCard
            name="Valencia Three Stone Bracelete"
            value="3"
            imageSrc={bracelet3}
          ></ItemCard>
      </div>
    </div>
    </div>
       
       
      );
    };
  
  export default Bracelets;