import sliderIcon from "../assets/images/icon-slider.svg";

import { useCallback, useEffect, useRef, useState } from "react";

function Slider({
  position,
  setPosition,
}: {
  position: number;
  setPosition: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [width, setWidth] = useState(500);
  const [barOrigin, setBarOrigin] = useState(0);
  const [x1, setX1] = useState(0);

  const draggableRef = useRef<HTMLDivElement>(null);
  const sliderBarRef = useRef<HTMLDivElement>(null);

  function resizeListener() {
    if (sliderBarRef.current) {
      setWidth(sliderBarRef.current.clientWidth);
      setBarOrigin(sliderBarRef.current.offsetLeft);
    }
  }

  useEffect(() => {
    resizeListener();
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  const dragHandler = useCallback(
    (event: DragEvent | TouchEvent) => {
      let x2 = 0;

      if (event instanceof DragEvent) {
        if (event.screenX === 0) return;
        x2 = event.clientX;
      }

      if (event instanceof TouchEvent) {
        x2 = event.touches[0]!.clientX;
      }

      if (x2 <= barOrigin) {
        setPosition(0);
        setX1(barOrigin);
        return;
      }

      if (x2 >= barOrigin + width) {
        setPosition(100);
        setX1(barOrigin + width);
        return;
      }

      const deltaX = x2 - x1;
      setX1((previous) => previous + deltaX);

      setPosition((previous) => {
        const percentage = Math.round(previous + (deltaX * 100) / width);
        if (percentage < 0) return 0;
        if (percentage > 100) return 100;
        return percentage;
      });
    },
    [barOrigin, setPosition, width, x1]
  );

  useEffect(() => {
    const slider = draggableRef.current;
    if (slider) {
      slider.addEventListener("dragstart", dragStartHandler);
      slider.addEventListener("drag", dragHandler);
      slider.addEventListener("dragend", dragEndHandler);

      slider.addEventListener("touchstart", dragStartHandler);
      slider.addEventListener("touchmove", dragHandler);
      slider.addEventListener("touchend", dragEndHandler);

      return () => {
        slider.removeEventListener("dragstart", dragStartHandler);
        slider.removeEventListener("drag", dragHandler);
        slider.removeEventListener("dragend", dragEndHandler);

        slider.removeEventListener("touchstart", dragStartHandler);
        slider.removeEventListener("touchmove", dragHandler);
        slider.removeEventListener("touchend", dragEndHandler);
      };
    }
  }, [dragHandler]);

  function dragStartHandler(event: DragEvent | TouchEvent) {
    let x2 = 0;

    if (event instanceof DragEvent) {
      event.dataTransfer?.setDragImage(new Image(), 0, 0);
      x2 = event.clientX;
    }

    if (event instanceof TouchEvent) {
      x2 = event.touches[0]!.clientX;
    }

    setX1(x2);
    if (draggableRef.current) {
      draggableRef.current.classList.add("selected");
    }
  }

  function dragEndHandler() {
    if (draggableRef.current) {
      draggableRef.current.classList.remove("selected");
    }
  }

  return (
    <div className="slider">
      <div
        className="bar"
        ref={sliderBarRef}
        style={{
          background: `linear-gradient(to right, #10d5c2 ${position}%, #eaeefb ${position}% 100%)`,
        }}
      >
        <div
          draggable
          className="draggable"
          ref={draggableRef}
          style={{
            left: `clamp(-20px, calc(${position}% - 20px), ${width - 20}px)`,
          }}
        >
          <img src={sliderIcon} className="switch" />
        </div>
        <div className="droppable"></div>
        <div className="droppable"></div>
        <div className="droppable"></div>
        <div className="droppable"></div>
        <div className="droppable"></div>
      </div>
    </div>
  );
}

export default Slider;
