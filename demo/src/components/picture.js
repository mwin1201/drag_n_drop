import React from "react";
import { useDrag } from "react-dnd";

const Picture = ({id, url}) => {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "image",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    return <img
                ref={drag}
                src={url} 
                id={id} 
                style={{border: isDragging ? "5px solid white" : "5px solid red"}}
            />
};

export default Picture;