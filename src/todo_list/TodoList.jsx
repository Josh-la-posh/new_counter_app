import React from 'react';
import { useState } from 'react';

function TodoList() {
    const [search, setSearch] = useState('');
    const [lists, setLists] = useState([]);




    const newSearch = (e) => {
        setSearch(e);
    }

    const newLists = () => {
      if (search.length > 0) {
        lists.push(search)
        setSearch('');
        console.log(lists)
      } else {
        console.log('Search field is empty')
      }
    }

    const delList = (index) => {
      const filteredList = lists.filter((list, ind) => ind != index);
      setLists(filteredList);
    }

  return (
    <div>
    <h1 className="text-3xl font-bold mb-10 text-center">Project 2</h1>
      <div className="mb-[4rem] flex justify-center">
        <input value={search}onChange={(e) => newSearch(e.target.value)} className='border border-[1px] rounded-[8px] py-[4px] px-[10px] w-[25rem] h-[3rem]' type="text" placeholder='Add a text ...' />
        <button onClick={newLists} className='bg-red-400 py-2 px-4 rounded-[8px] h-[3rem] ml-[2rem] text-white font-bold'>Add</button>
      </div>

      <ol>

        {
          lists.map((list, index) => {
            return (
              <li key={index} className='px-[2rem] py-[1rem] bg-green-600 text-white rounded-[8px] mb-[2rem] w-[50%] flex justify-between'>{list}<button onClick={() => delList(index)}>X</button></li>
            )
          })
        }



      </ol>
    </div>
  )
}

export default TodoList;

