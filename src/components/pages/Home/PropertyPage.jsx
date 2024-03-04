import { useParams } from "react-router-dom";
import {useEffect,useState} from "react"
import propertiesData from "../../../properties.json";
import PropertyGallery from "./PropertyGallery";
import '../../../assets/css/PropertyPage.css';
import{Tab,Tabs,TabList,TabPanel} from "react-tabs";
import "react-tabs/style/react-tabs.css";

/* Property page which holds all the data of the properties */

const PropertyPage = () => {
  
  const { id } = useParams();
  const[property,setProperty] = useState(null)


  useEffect(() => {
    // Fetch property data based on id and update state
    const fetchedProperty = propertiesData.properties.find((prop) => prop.id === id);
    setProperty(fetchedProperty);
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  const {
    type = "N/A",
    description = "N/A",
    bedrooms = "N/A",
    price = "N/A",
    location = "N/A",
    mapLink ="N/A",
    images = [],
    floorPlan = "N/A"
  } = property;

  return (
    <>
      <div className="property-page-container">
        
        <div className="gallery-container">
          <div className="gallery">
            <PropertyGallery images={images} />
          </div>
        </div>
        

        <Tabs>
            <TabList>
              <Tab>Details</Tab>
              <Tab>Map</Tab>
              <Tab>Floor Plan</Tab>
            </TabList>

            <TabPanel>
              <div className="property-detail-container">
                <div>
                  <span>Property Type:</span><h5>{type}</h5> 
                </div>
                <div>
                  <span>Bedrooms :</span> <h5>{bedrooms}</h5>
                </div>
                <div>
                  <span>Price :</span> <h5>{price}</h5>
                </div>
                <div>
                  <span>Location :</span> <h5>{location}</h5>
                </div>
                <div>
                  <span>Description :</span> <p>{description}</p>
                </div>
                
              </div>
            </TabPanel>

            <TabPanel>
              <div className="map-container">
                <div>
                  <iframe
                    title="propertyMap"
                    src={mapLink}
                    width={300}
                    height={400}
                    style={{ border: "0", borderRadius: "5px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </TabPanel>

            
            <TabPanel>
              <div className="property-floor-conatiner">
                <img src={floorPlan} alt="floor-plan" className="fp-img" width={400} height={500}/>
              </div>
            </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default PropertyPage;
