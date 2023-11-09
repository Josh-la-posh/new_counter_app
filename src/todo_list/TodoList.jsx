import React from 'react';
import { useState } from 'react';

function TodoList() {
    const [search, setSearch] = useState('');

    const newSearch = (e) => {
        setSearch(e);
        console.log(search)
    }

  return (
    <div>
        <input value={search}onChange={(e) => newSearch(e.target.value)} className='border border-[1px] rounded-[8px] py-[4px] px-[10px]' type="text" placeholder='Add a text ...' />
    </div>
  )
}

export default TodoList