import React, {useState} from 'react';
import PageOne from './PageOne';

export default {
  title: 'Core/UnmountDraggable',
};

function Story() {
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
            <li>drag an 'draggableItem' to 'droppableItem'</li>
            <li>go back to the home page</li>
            <li>see the error in the console</li>
          </ul>
        </div>
      )}
      {page === 1 && <PageOne />}
    </>
  );
}

export const BasicSetup = () => <Story />;
