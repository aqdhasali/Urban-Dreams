import DraggablePropertyCard from "./DraggablePropertyCard";
import { useDrop } from "react-dnd";



const FavouriteContainer = ({ favourite, HandleFavourites }) => {
    // Define the drop configuration using useDrop
    const [{ isOver }, drop] = useDrop({
      accept: 'CARD',
      drop: (item) => HandleFavourites(item.property), // Handle drop action
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    });
  
    return (
      <div ref={drop} className={`favourite-container-fc ${isOver ? 'over' : ''}`}>
        {favourite.map((property) => (
          <DraggablePropertyCard
            key={property.id}
            property={property}
            HandleFavourites={HandleFavourites}
            isPropertyFavourite={true}
          />
        ))}
      </div>
    );
  };

export default FavouriteContainer