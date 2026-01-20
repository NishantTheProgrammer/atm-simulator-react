import { readCardData } from '../services/cardService';
import { useDispatch } from 'react-redux';
import { login } from '../reducers/authSlice';

export default function CardReader() {
    const dispatch = useDispatch();

    const onRead = async e => {
        if(!e.target.files?.[0]) return;
        const data = await readCardData(e.target.files[0])
        dispatch(login(data));
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
