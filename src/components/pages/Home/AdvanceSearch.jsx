import '../../../assets/css/AdvanceSearch.css'
import { useState } from 'react';
import propertiesData from '../../../properties.json'
import DropdownList from 'react-widgets/DropdownList'
import NumberPicker from 'react-widgets/NumberPicker'
import DatePicker from 'react-widgets/DatePicker'
import 'react-widgets/styles.css'

/* Component to hold the advance search form and filter the criterias */
const AdvanceSearch = ({ onAdvanceSearch }) => {

    //creating a single state object to manage all the properties
    const [searchCriteria,setSearchCriteria] = useState({
        propertyType:"",
        minPrice:null,
        maxPrice:null,
        noOfBedrooms:null,
        minAddedDateRange:null,
        maxAddedDateRange:null,
        location:""
    })

    //Updating a property in the state
    const updateProperty = (property,value) =>{
        setSearchCriteria(prevState => ({
            ...prevState,
            [property]:value,
            [property]: property.includes('DateRange') ? new Date(value) : value,
        }));
    }


    //to handle the search inputs
    const handleSearchInputs = (e) => { 
        e.preventDefault();
        console.log(searchCriteria);
    
        //conditions to perform the search based on the selected items
        let filtered = propertiesData.properties;

        //checking if the search criteria matches the propert value in the properties file.
        if(searchCriteria.propertyType){
            console.log(" Before Search Filteres")
            filtered = filtered.filter((property) => property.type.toLowerCase() === searchCriteria.propertyType.toLowerCase());
            console.log(" After Search Filteres")
            
        }
    
        if(searchCriteria.minPrice && searchCriteria.maxPrice){
            console.log(" Before Search Filteres")
            filtered = filtered.filter((property)=> property.price >= searchCriteria.minPrice && property.price <= searchCriteria.maxPrice);
            console.log(" After Search Filteres")
        }
    
        if(searchCriteria.noOfBedrooms){
            console.log(" Before Search Filteres")
            filtered = filtered.filter((property) => property.bedrooms === searchCriteria.noOfBedrooms);
            console.log(" After Search Filteres")

        }
    
        if(searchCriteria.minAddedDateRange && searchCriteria.maxAddedDateRange){
            console.log("Before Search Filter");
            filtered = filtered.filter((property) => property.added >= searchCriteria.minAddedDateRange && property.added <= searchCriteria.maxAddedDateRange);
            console.log("After Search Filter")
        }
    
        if (searchCriteria.location){

            filtered = filtered.filter((property) => property.location.toLowerCase().includes(searchCriteria.location.toLowerCase()))
        }

        console.log('Filtered Properties',filtered);

        onAdvanceSearch(filtered);
       
      }

    

  return (
    <>
        {/* Form for the advance search */}
        <div className="form-container">
            <form className='advance-search-form' onSubmit={handleSearchInputs}>
            
                <h3>Advance Search</h3>

                <label className='form-label'>Property Type: </label>
                <DropdownList
                    textField='property type'
                    data={['Bungalow','Flat','House']}
                    value={searchCriteria.propertyType}
                    onChange={ (value) => updateProperty('propertyType',value)} 
                />;

                
               <label>Min Price Range</label>
               <NumberPicker
                    min={0}
                    format={{ style: "currency", currency: "GBP" }}
                    value={searchCriteria.minPrice}
                    onChange={(value) => updateProperty('minPrice',value)}
                />;
               

                <label>Max Price Range</label>
                <NumberPicker
                    min={0}
                    format={{ style: "currency", currency: "GBP" }}
                    value={searchCriteria.maxPrice}
                    onChange={(value) => updateProperty('maxPrice',value)}
                />;
                

                <label>Number of Bedrooms</label>
                <NumberPicker
                    min={1}
                    placeholder='no of bedrooms'
                    value={searchCriteria.noOfBedrooms}
                    onChange={(value) => updateProperty('noOfBedrooms',value)}
                />;
                
                
               
                <label htmlFor='minAddedDateRange'>Min Date Range</label>
                <DatePicker placeholder="m/dd/yy" 
                    value={searchCriteria.minAddedDateRange}
                    onChange={(value) => updateProperty('minAddedDateRange',value)}  
                    dateFormat="dd MMMM yyyy"
                />;

                <label>Max Date Range</label>
                <DatePicker placeholder="m/dd/yy" 
                    value={searchCriteria.maxAddedDateRange}
                    onChange={(value) => updateProperty('maxAddedDateRange',value)}
                    dateFormat="dd MMMM yyyy"
                    
                />;

                <button type='submit'>Search</button>

            </form>
        </div> 
    </>
  )
}



export default AdvanceSearch
