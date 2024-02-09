import { useAppSelector } from "../hooks/useStore";
import { selectCurrentImage } from "../app/gallerySlice";

import ImagePicker from "./ImagePicker";

import image1 from "../assets/images/image-product-1.jpg";
import image2 from "../assets/images/image-product-2.jpg";
import image3 from "../assets/images/image-product-3.jpg";
import image4 from "../assets/images/image-product-4.jpg";

const images = [image1, image2, image3, image4];

interface Props {
  onOpen: () => void;
}

function Gallery({ onOpen }: Props) {
  const selectedImage = useAppSelector(selectCurrentImage);

  return (
    <section className="gallery">
      <img
        src={images[selectedImage]}
        className="display-image"
        onClick={onOpen}
      />
      <ImagePicker />
    </section>
  );
}

export default Gallery;
