'use client'
import { useEffect, useState } from 'react';
import { CardComponents } from './components/cards';
import { fetchData } from './library/api';
import { OffCanvas } from './components/offcanvas';

export default function Page() {
  const [listCharacters, setListCharacters] = useState([]);

  useEffect(() => {
    if (listCharacters?.length == 0) {
      fetchData('https://rickandmortyapi.com/api/character', setListCharacters);
    }
  }, [listCharacters])

  return (
    <div className='container'>
      <div className='row py-4 grid gap-3 column-gap-3'>
        {Array.isArray(listCharacters?.results) && listCharacters?.results?.length == 0 ? null :
          listCharacters?.results?.map((items, index) => {
            return (
              <>
                <CardComponents key={index} sourceImg={items.image} name={items.name} species={items.species} />
                {/* <OffCanvas /> */}
              </>
            )
          })
        }
      </div>
    </div>
  );
}
