import React, { useState } from 'react';

const Traffic = () => {
    const [ color, setColor] = useState("red");
    const changecolor = (color) => {
        setColor (color);
    }

    const alternatecolor = () => {
        if (color == "red") {
            changecolor ("green")
        }
        else if (color == "green") {
            changecolor ("yellow")
        }
        else if (color == "yellow") {
            changecolor ("red")
        }
    }

    return (
        <div className="container-fluid">
			 <div className="traffic top "></div>
				<div className="container mb-5">
					<div className={`red traffic ${color == "red" ? "light-selected" : ""}`} onClick={ () => changecolor("red")}>

					</div>
                    <div className={`yellow traffic ${color == "yellow" ? "light-selected" : ""}`} onClick={() => changecolor("yellow")}>

                    </div>
                    <div className={`green traffic ${color == "green" ? "light-selected" : ""}`} onClick={ () => changecolor("green")}>

                    </div>
				</div>
                <button className="btn btn-primary" onClick = {alternatecolor} >Cambio de color</button>
		</div>
    )
} 

export {Traffic};