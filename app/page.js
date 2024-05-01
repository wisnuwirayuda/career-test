'use client'
import { useEffect, useState } from 'react';
import { CardComponents } from './components/cards';
import { fetchData } from './library/api';
import { OffCanvas } from './components/offcanvas';
import styles from './page.module.css'

export default function Page() {
  const [listCharacters, setListCharacters] = useState([]);

  useEffect(() => {
    if (listCharacters?.length == 0) {
      fetchData('https://rickandmortyapi.com/api/character', setListCharacters);
    }
  }, [listCharacters])

  return (
    <div className='container'>
      <div className='row p-3 grid gap-3 column-gap-3 justify-content-center'>
        {Array.isArray(listCharacters?.results) && listCharacters?.results?.length == 0 ? null :
          listCharacters?.results?.map((items, index) => {
            return (
              <div className={`bg-white border py-3 shadow-sm rounded-3 d-flex flex-column justify-content-center align-items-center ${styles.custom_width}`}>
                <CardComponents key={index} sourceImg={items.image} name={items.name} gender={items.gender} />
                <OffCanvas data={items} />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
