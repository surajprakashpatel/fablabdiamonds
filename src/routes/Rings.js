
import ItemCard from "../components/item-card"
import ring1 from "../images/rings/ring11.jpg"
import ring2 from "../images/rings/ring12.jpg"
import ring3 from "../images/rings/ring13.jpg"
import ring4 from "../images/rings/ring14.jpg"
import ring5 from "../images/rings/ring15.jpg"
import ring6 from "../images/rings/ring16.jpg"
import ring7 from "../images/rings/ring17.jpg"
import ring8 from "../images/rings/ring18.jpg"
import ring9 from "../images/rings/ring19.jpg"
import ring10 from "../images/rings/ring20.jpg"
import ring11 from "../images/rings/ring21.jpg"
import ring12 from "../images/rings/ring22.jpg"
import ring13 from "../images/rings/ring24.jpg"
import ring20 from "../images/rings/ring20.jpg"
  
  const Rings = () => {
 

      return (

        <div className="section-container">
    <div className="max-width-container">
    
      <div className="home-cards-container">
      
      <ItemCard
            name="Dual Tone Glance Pave Ring With 3 Carat Oval Solitare"
            value="3"
            imageSrc={ring13}
          ></ItemCard>
              
                
              <ItemCard
            name="Alegria Twisted Band With a Round Solitare"
            value="3"
            imageSrc={ring2}
          ></ItemCard>
              
                       
                 
              <ItemCard
            name="Amalia Round Brilliant Solitare Pave Ring"
            value="3"
            imageSrc={ring20}
          ></ItemCard>
                 
                 <ItemCard
            name="Chandele Double Studbbed Halo Ring"
            value="3"
            imageSrc={ring4}
          ></ItemCard>
                   
                 
                   <ItemCard
            name="Frech Bar Embellished With a Marquise Solitare"
            value="3"
            imageSrc={ring5}
          ></ItemCard>
                             
      <ItemCard
            name="French Bar Embellished With Cushion Solitare"
            value="3"
            imageSrc={ring6}
          ></ItemCard>           
          <ItemCard
                name="Amalia Marquise Solitare Best Pave Ring"
                value="3"
                imageSrc={ring7}
              ></ItemCard>
          
     
      </div>
    </div>
    </div>
       
       
      );
    };
  
  export default Rings;