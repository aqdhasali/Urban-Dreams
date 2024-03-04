import { useState, useEffect} from "react";
import propertiesData from "../../../properties.json";
import { Link } from "react-router-dom";
import "../../../assets/css/HeroContainer.css";
import PropertyCard from "./PropertyCard";
import AdvanceSearch from "./AdvanceSearch";
import FavouriteContainer from "./FavouriteContainer";

/**
 * Hero container holds all the content thats is being displayed in the search page.
 * Which includes Search bar, Property Cards, Favourite Container 
 * @returns 
 */

const HeroContainer = () => {
  const title = <h2>THE RIGHT PLACE TO FIND YOURS</h2>;

  const desc = "If you beleive in Finding IT! You'll Definitely Find IT!";

  //creating a stte to handle the basic search
  const[searchInput,setSearchInput] = useState("")
  //creating a state to handle the filtered properties and passing the object
  const [filteredProperties, setFilterProperties] = useState(propertiesData.properties);

  //creating a state to handle the favourite properties 
  const[favourite,setFavourite] = useState([]);

  //state to hide the advance search
  const[showAdvanceSearch,setShowAdvancesearch] = useState(false)

  //state to handle the filetring of the vacant type
  const[selectedVacantType,setSelectedVacantType] = useState(null);

  // implementing basic search functionality

  const handleSearch = (e) => {
    const searchTerm = e.target.value; //getting the search term from the search bar
    setSearchInput(searchTerm);
  

    //filtering products based on the search (type,location,price)
    const filtered = propertiesData.properties.filter(
      (property) =>
        property.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.price.toString().includes(searchTerm)

    );

    //setting the state 

    setFilterProperties(filtered);
  };


//
  const onAdvanceSearch = (filteredProperties) => {
    setFilterProperties(filteredProperties)
  };


 //method to handle the favourite property cards
  const HandleFavourites = (property) =>{
    const isPropertyFavourite = favourite.some((favProperty) => favProperty.id === property.id);

    if(isPropertyFavourite){
      //If property is in the already in the  favourite container removing it
      const updateFavourites = favourite.filter((favProperty) => favProperty.id !== property.id); 
      setFavourite(updateFavourites)
    } else{
      // If property is not in favorites, adding it
      setFavourite([...favourite, property]);
    }
  };

  //implementing a method to handle the vacantype filter (displaying the matching properties if its rent/sale)
  const handleVacantTypeFilter = (vacantType) =>{
    console.log("Selected Vacant Type:", vacantType);
    setSelectedVacantType(vacantType);

    //Filering based on the slected vacant type
    
    const filtered = propertiesData.properties.filter(
      (property) => property.vacantType.toLowerCase() === vacantType.toLowerCase()
    );

    console.log('Fitered Results',filtered)
    setFilterProperties(filtered);
  }

  //to the show the advance search form when the advance search button is clicked 
  const toggleAdvanceSearch = () =>{
    setShowAdvancesearch(!showAdvanceSearch)
  }

 
  useEffect(() =>{
    //Reseting the vacant type
    setSelectedVacantType(null);
    onAdvanceSearch(filteredProperties);
  },[selectedVacantType,filteredProperties])

  const handleFormSubmit = (e) => {
    e.preventDefault(); // to preventing the default form submission behavior
    
  };
  


  return (
    <>

      <div className="container">
        <div className="hero-container-content">
          <div className="search-bar">
            {title} 
            <p><i>{desc}</i></p>
            <form className="search-bar-form" onSubmit={handleFormSubmit}>
              <button  id="filter-btn"onClick={() => handleVacantTypeFilter("rent")}>Rent</button>
              <button id="filter-btn" onClick={() => handleVacantTypeFilter("sale")}>Sale</button>
              <input
                type="text"
                name="search"
                placeholder="Search by type,location,price..."
                id="search"
                value={searchInput}
                onChange={handleSearch}
              />
              <button
                className="search-button"
                id="search-btn"
                style={{ width: "180px" }}
                onClick={toggleAdvanceSearch}>
                {showAdvanceSearch ? 'Hide Advance Search' : 'Advance Search'}
              </button>
            </form>
          </div>


          {/* ================================================================ */}
          {/* To show the advanced search form */}
          {showAdvanceSearch && (
            <div className="center-form">
              <AdvanceSearch onAdvanceSearch={onAdvanceSearch} />
            </div>
          )}

          {/* container which hold the propert cards and the favourite container */}
          <div className="component-container">

              <div className="property-container">
                  <h1>PROPERTIES</h1>
                  <PropertyCard properties={filteredProperties} HandleFavourites={HandleFavourites} selectedVacantType={selectedVacantType} />
                  {/* to diplay the searched property or display the all properties */}
                   
                    {filteredProperties.map((property) => (
                      // to link the property page to the card so once the card is clicked it is redirected to the particular property page
                      <Link
                        to={`/property/${property.id}`}
                        key={property.id}
                        style={{ textDecoration: 'none' }}
                      >
                      <PropertyCard
                            key={property.id}
                            property={property}
                            HandleFavourites={HandleFavourites}
                            isPropertyFavorite={favourite.some((favProperty) => favProperty.id === property.id)}
                        />
                      </Link>
                    ))}
                  
              </div>

                {/* Section for the Favourite Container */}
                <div className="favourite-container">
                  <h2>FAVOURITES</h2>
                  <FavouriteContainer favourite={favourite} HandleFavourites={HandleFavourites} />
                </div>


          </div> 
        </div>
      </div>
  
      
    </>
  );
};

export default HeroContainer;