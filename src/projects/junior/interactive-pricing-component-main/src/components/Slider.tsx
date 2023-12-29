import sliderIcon from "../assets/images/icon-slider.svg";

import { useCallback, useEffect, useRef, useState } from "react";

function Slider() {
  const [width, setWidth] = useState(500);
  const [barOrigin, setBarOrigin] = useState(0);
  const [x1, setX1] = useState(0);
  const [offsetPercentage, setOffsetPercentage] = useState(50);

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
    (event: DragEvent) => {
      // X co-ordinate defaults to 0 on last drag event
      if (event.screenX === 0) return;

      if (event.clientX <= barOrigin) {
        setOffsetPercentage(0);
        setX1(barOrigin);
        return;
      }

      if (event.clientX >= barOrigin + width) {
        setOffsetPercentage(100);
        setX1(barOrigin + width);
        return;
      }

      const deltaX = event.clientX - x1;
      setX1((previous) => previous + deltaX);

      setOffsetPercentage((previous) => {
        const percentage = previous + (deltaX * 100) / width;
        if (percentage < 0) return 0;
        if (percentage > 100) return 100;
        return percentage;
      });
    },
    [barOrigin, width, x1]
  );

  const touchMoveHandler = useCallback(
    (event: TouchEvent) => {
      if (event.touches[0]!.clientX <= barOrigin) {
        setOffsetPercentage(0);
        setX1(barOrigin);
        return;
      }

      if (event.touches[0]!.clientX >= barOrigin + width) {
        setOffsetPercentage(100);
        setX1(barOrigin + width);
        return;
      }

      const deltaX = event.touches[0]!.clientX - x1;
      setX1((previous) => previous + deltaX);

      setOffsetPercentage((previous) => {
        const percentage = previous + (deltaX * 100) / width;
        if (percentage < 0) return 0;
        if (percentage > 100) return 100;
        return percentage;
      });
    },
    [barOrigin, width, x1]
  );

  useEffect(() => {
    const slider = draggableRef.current;
    if (slider) {
      slider.addEventListener("dragstart", dragStartHandler);
      slider.addEventListener("drag", dragHandler);
      slider.addEventListener("dragend", dragEndHandler);

      slider.addEventListener("touchstart", touchStartHandler);
      slider.addEventListener("touchmove", touchMoveHandler);
      slider.addEventListener("touchend", touchEndHandler);

      return () => {
        slider.removeEventListener("drag", dragHandler);
        slider.removeEventListener("dragstart", dragStartHandler);
        slider.removeEventListener("dragend", dragEndHandler);

        slider.removeEventListener("touchstart", touchStartHandler);
        slider.removeEventListener("touchmove", touchMoveHandler);
        slider.removeEventListener("touchend", touchEndHandler);
      };
    }
  }, [dragHandler, touchMoveHandler]);

  function dragStartHandler(event: DragEvent) {
    event.dataTransfer?.setDragImage(new Image(), 0, 0);
    setX1(event.clientX);
    if (draggableRef.current) {
      draggableRef.current.classList.add("selected");
    }
  }

  function touchStartHandler(event: TouchEvent) {
    setX1(event.touches[0]!.clientX);
    if (draggableRef.current) {
      draggableRef.current.classList.add("selected");
    }
  }

  function dragEndHandler() {
    if (draggableRef.current) {
      draggableRef.current.classList.remove("selected");
    }
  }

  function touchEndHandler() {
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
          background: `linear-gradient(to right, #10d5c2 ${offsetPercentage}%, #eaeefb ${offsetPercentage}% 100%)`,
        }}
      >
        <div
          draggable
          className="draggable"
          ref={draggableRef}
          style={{
            left: `clamp(-25px, calc(${offsetPercentage}% - 25px), ${
              width - 25
            }px)`,
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
