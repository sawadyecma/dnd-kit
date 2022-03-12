import React, {useState} from 'react';
import {DndContext} from '@dnd-kit/core';

import {arrayMove, SortableContext} from '@dnd-kit/sortable';

import {SortableItem} from './SortableItem';
import type {DragEndEvent} from 'packages/core/dist';

export const ItemList = () => {
  const [items, setItems] = useState(['1', '2', '3']);

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={items}>
        {items.map((id) => (
          <SortableItem key={id} id={id} />
        ))}
      </SortableContext>
    </DndContext>
  );

  function handleDragEnd(event: DragEndEvent) {
    const {active, over} = event;
    if (!over) return;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
};
