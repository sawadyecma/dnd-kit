import React, {useState} from 'react';
import {ItemList} from './itemList';

export default {
  title: 'Core/UnmountSortable',
};

function UnmountStory() {
  const [page, setPage] = useState(0);

  return (
    <>
      <button onClick={() => setPage(0)}>Home Page</button>
      <button onClick={() => setPage(1)}>Gallery</button>
      {page === 0 && (
        <div>
          <p>Steps to reproduce the bug:</p>
          <ul>
            <li>open the console</li>
            <li>click the gallery button</li>
            <li>drag an item</li>
            <li>go back to the home page</li>
            <li>see the error in the console</li>
          </ul>
        </div>
      )}
      {page === 1 && <ItemList />}
    </>
  );
}

export const BasicSetup = () => <UnmountStory />;
