import React from 'react'
import { readCardData } from '../services/cardService';

export default function CardReader() {

    const onRead = async e => {
        if(!e.target.files?.[0]) return;
        const data = await readCardData(e.target.files[0])
        console.log(data);
    }
    return (
        <div className="cardAccepter">
            <div className="fingerSpace">
                <div className="cardReader"></div>
            </div>
            <input type="file" accept=".card" onChange={onRead} className="cardFile" />
        </div>
    )
}
