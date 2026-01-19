
import { useEffect, useState } from 'react'
import ad1 from '../assets/ads/ad1.jpg';
import ad2 from '../assets/ads/ad2.jpg';
import ad3 from '../assets/ads/ad3.jpg';
import ad4 from '../assets/ads/ad4.jpg';

const ads = [ad1, ad2, ad3, ad4]
export default function useAd() {

    const [adIndex, setAdIndex] = useState(0);
    const ad = ads[adIndex];

    useEffect(() => {
        const interval = setInterval(() => {
            setAdIndex(i => i == ads.length - 1 ? 0 : i + 1);
        }, 2000);

        return () => clearInterval(interval);
    }, [])

    return { ad };

}