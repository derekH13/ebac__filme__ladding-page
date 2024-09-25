import { useEffect } from 'react';
import '../../../../styles/styles.css'

function CarousselInfinite(){

    useEffect(() => {
        const logosContainer = document.querySelector(".logos");
        if (logosContainer && logosContainer.childElementCount < 1) {
          const logosSlide = document.querySelector(".logos-slide");
          if (!logosSlide) return
            const copy = logosSlide.cloneNode(true)
          logosContainer.appendChild(copy);
        }
      }, []);
    
      return (
        <div className="logos">
          <div className="logos-slide">
            <h1>Batman</h1>
            <h1>Superman </h1>
            <h1>Mulher-Maravilha</h1>
            <h1>Flash </h1>
            <h1>Aquaman </h1>
            <h1>Lanterna Verde</h1>
            <h1>Cyborg </h1>
            <h1>Arqueiro Verde</h1>


          </div>
        </div>
      );
    }

export default CarousselInfinite