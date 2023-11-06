import React from "react"

export default function Item({name, quantity, category, onSelect}){

    const handleClick = () => {
        onSelect({name, quantity, category});
    }

    return(
        <div className="border-2 border-green-400 bg-emerald-600 w-full max-w-xs m-4 p-2"
        onClick={handleClick}>
            <ul>
                <li className="font-bold text-2xl">{name}</li>
                <li className="text-base">Quanity: {quantity}</li>
                <li className="text-base">Category: {category}</li>
            </ul>
        </div>
    )
}