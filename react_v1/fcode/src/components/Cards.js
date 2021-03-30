import { useState } from 'react';
import Card from './Card';


function Cards() {
  const [cdatas, setcdatas] = useState([
    {title: 'Card A', desc: 'Description of card A'},
    {title: 'Card B', desc: 'Description of card B'},
    {title: 'Card C', desc: 'Description of card C'},
    {title: 'Card D', desc: 'Description of card D'},
    {title: 'Card E', desc: 'Description of card E'},
    {title: 'Card F', desc: 'Description of card F'},
    {title: 'Card G', desc: 'Description of card G'},
    {title: 'Card H', desc: 'Description of card H'},
  ])
  return (
    <div className="cards">
      <h1>All Cards</h1>
      <div className="card-wrap">
        {/* <Card cdata={{title: 'Card A', desc: 'Description of card A'}}></Card> */}
        {/* <Card cdata={{title: 'Card B', desc: 'Description of card B'}}></Card> */}

        {
          cdatas.length > 0 ?
            cdatas.map((item) =>
              <Card cdata={item}></Card>
            ) : <p className='no-data-txt'>!! No Cards Found !!</p>
        }

{/* !! No Cards Found !! */}

      </div>
    </div>
  );
}
export default Cards;