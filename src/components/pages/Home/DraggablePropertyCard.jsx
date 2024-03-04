import { useDrag } from 'react-dnd';
import { Link } from 'react-router-dom';


const DraggablePropertyCard = ({ property, HandleFavourites, isPropertyFavourite }) => {

  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    item: { property },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag} // Attaching the drag ref to the component
      className={`card ${isDragging ? 'dragging' : ''}`}
      style={{ width: '18rem', height: 'auto', margin: '10px', display: 'inline-block' }}
    >
      <Link to={`/property/${property.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img className="card-img-top" alt="property image" src={property.picture} width={250} height={200} />
        <div className="card-body">
          <h5 className="card-title">£{property.price}</h5>
          <p>Bedrooms: {property.bedrooms}</p>
          <p className="card-text">{property.description.slice(0, 100)}...</p>
        </div>
      </Link>
      <a href="#" className="btn btn-primary" onClick={() => HandleFavourites(property)}>
        {isPropertyFavourite ? 'Remove Favourite' : 'Add to Favourite'}
      </a>
    </div>
  );
};

export default DraggablePropertyCard
