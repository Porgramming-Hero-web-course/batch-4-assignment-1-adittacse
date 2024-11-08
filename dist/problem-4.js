"use strict";
{
    function calculateShapeArea(data) {
        if (data.shape === "circle") {
            return (Math.PI * (data.radius ** 2)).toFixed(2);
        }
        if (data.shape === "rectangle") {
            return data.height * data.width;
        }
        else {
            return "Unknown area...";
        }
    }
    ;
    const circleArea = calculateShapeArea({
        shape: "circle",
        radius: 5,
    });
    console.log(circleArea);
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(rectangleArea);
}
