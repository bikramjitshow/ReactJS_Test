import React from 'react';
import { useState } from 'react';
import Card from './Card';

function Courses() {

  const [cdatas, setcdatas] = useState([
    { title: 'Computer Science', desc: 'Description of card A' },
    { title: 'Networking', desc: 'Description of card B' },
    { title: 'Master of C', desc: 'Description of card C' },
    { title: 'Basic C++', desc: 'Description of card D' },
    { title: 'Phython Programming', desc: 'Description of card E' },
    { title: 'Java Programming', desc: 'Description of card F' },
    { title: 'React JS', desc: 'Description of card G' },
    { title: 'Machine Learning', desc: 'Description of card H' },
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
