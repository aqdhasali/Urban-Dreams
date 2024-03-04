import '../../../assets/css/PropertyGallery.css'
import Slider from "react-slick";


//component for the image gallery of the property 

const PropertyGallery = ({images}) => {
    //Chekcing if the passed image array is null.
    if(!Array.isArray(images) || images.length ==0){
        return null;
    }

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


  return (
    <>
        <div className='gallery-container'>
            <Slider {...sliderSettings}>
                {images.map((imageUrl, index) => (
                    <img className='property-images' 
                        style={{width:'30%'}}
                        key={index}
                        src={imageUrl}
                        alt={`Property Image ${index + 1}`}
                    />
                ))}
            </Slider>
        </div>
    </>

  )
}

export default PropertyGallery
