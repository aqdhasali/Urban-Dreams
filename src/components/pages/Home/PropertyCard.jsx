import '../../../assets/css/PropertyCard.css'
import'../../../assets/css/Herocontainer.css'
import { Link } from 'react-router-dom';

/* Component to hold the property card and its details */

const PropertyCard = ({ properties, HandleFavourites, isPropertyFavourite, selectedVacantType }) => {
  if(!Array.isArray(properties)){
    console.error('Invalid properties data',properties);
    return null;
  }

  
  return (
    <div>
      {properties.map((property) => {
        if (
          !selectedVacantType ||
          property.vacantType.toLowerCase() === selectedVacantType.toLowerCase()
        ) {
          return (
            <div key={property.id} className="card" style={{ width: '18rem', height: 'auto', margin: '10px', display: 'inline-block' }}>
              <Link to={`/property/${property.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img className="card-img-top" alt="property image" src={property.picture} width={250} height={200} />
                <div className="card-body">
                  <h5 className="card-title">£{property.price}</h5>
                  <p>Bedrooms: {property.bedrooms}</p>
                  <p className="card-text">{
                    property.description.slice(0, 100)
                  }...</p>
                </div>
              </Link>
              <a href="#" className="btn btn-primary" onClick={() => HandleFavourites(property)}>
                {isPropertyFavourite ? 'Remove Favourite' : 'Add to Favourite'}
              </a>
            </div>
          );
        } else {
          // Returning null if the property doesn't match the selected vacant type
          return null;
        }
      })}
    </div>
  )
}

export default PropertyCard
