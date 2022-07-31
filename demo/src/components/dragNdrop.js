import React from "react";
import Picture from "./picture";
import { useState } from "react";
import { useDrop } from "react-dnd";

const pictureList = [
    {
        id: 1,
        url: "https://www.formula1.com/content/dam/fom-website/teams/2022/red-bull-racing.png.transform/4col/image.png"
    },
    {
        id: 2,
        url: "https://www.formula1.com/content/dam/fom-website/teams/2022/ferrari.png.transform/4col/image.png"
    },
    {
        id: 3,
        url: "https://www.formula1.com/content/dam/fom-website/teams/2022/mercedes.png.transform/4col/image.png"
    }
];

const DragDrop = () => {

    const [board, setBoard] = useState([]);

    const [{isOver}, drop] = useDrop(() => ({
        accept: "image",
        drop: (pic) => {
            addImageToBoard(pic.id);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))

    const addImageToBoard = (id) => {
        const picList = pictureList.filter((pic) => id === pic.id);
        //setBoard((board) => [...board, picList[0]]);
        setBoard([picList[0]]);
    };

    return (
        <>
            <div className="pictures">
                {pictureList.map((pic) => {
                    return <Picture url={pic.url} id={pic.id} />
                })}
            </div>

            <div className="board" ref={drop}>
                <p>Drag Photos Here</p>
                {board.map((item) => {
                    return <Picture url={item.url} id={item.id} />
                })}
            </div>
        </>
    )
};

export default DragDrop;