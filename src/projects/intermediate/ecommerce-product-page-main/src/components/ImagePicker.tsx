import { useAppDispatch, useAppSelector } from "../hooks/useStore";
import { selectCurrentImage, goToImage } from "../app/gallerySlice";

import image1thumb from "../assets/images/image-product-1-thumbnail.jpg";
import image2thumb from "../assets/images/image-product-2-thumbnail.jpg";
import image3thumb from "../assets/images/image-product-3-thumbnail.jpg";
import image4thumb from "../assets/images/image-product-4-thumbnail.jpg";

const thumbnails = [image1thumb, image2thumb, image3thumb, image4thumb];

function ImagePicker() {
  const dispatch = useAppDispatch();
  const selectedImage = useAppSelector(selectCurrentImage);

  function imageHandler(index: number) {
    if (index === selectedImage) return;
    else dispatch(goToImage(index));
  }

  return (
    <ul className="image-picker">
      {thumbnails.map((image, index) => (
        <li
          key={index}
          className={`${index === selectedImage ? "selected" : ""}`}
        >
          <button onClick={() => imageHandler(index)}>
            <img src={image} />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ImagePicker;
