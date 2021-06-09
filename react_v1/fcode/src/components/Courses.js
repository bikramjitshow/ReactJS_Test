import React from 'react';
import { useState } from 'react';
import Card from './Card';

function Courses() {

  const [cdatas, setcdatas] = useState([
    { title: 'Computer Science: Programming with a Purpose', desc: 'Description of card A' },
    { title: 'Card B', desc: 'Description of card B' },
    { title: 'Card C', desc: 'Description of card C' },
    { title: 'Card D', desc: 'Description of card D' },
    { title: 'Card E', desc: 'Description of card E' },
    { title: 'Card F', desc: 'Description of card F' },
    { title: 'Card G', desc: 'Description of card G' },
    { title: 'Card H', desc: 'Description of card H' },
  ]);

  return (
    <div>
      <h1>Courses</h1>
      <div className="card-wrap row">


        {
          cdatas.length > 0 ?
            cdatas.map((item) =>
              <div className="col-3">
                <Card cdata={item}></Card>
              </div>
            ) : <p className='no-data-txt'>!! No Cards Found !!</p>
        }

        {/* !! No Cards Found !! */}

      </div>
    </div>
  )
}

export default Courses
