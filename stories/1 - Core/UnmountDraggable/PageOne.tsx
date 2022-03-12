import React from 'react';
import {DndContext, useDraggable, useDroppable} from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';

function Draggable(props: {children: React.ReactNode}) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: 'draggable',
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    border: 'solid 1px',
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </div>
  );
}

function Droppable(props: {children: React.ReactNode}) {
  const {isOver, setNodeRef} = useDroppable({
    id: 'droppable',
  });
  const style = {
    color: isOver ? 'red' : undefined,
    border: 'solid 1px',
  };

  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}

export default function PageOne() {
  return (
    <DndContext>
      <Draggable>draggableItem</Draggable>
      <Droppable>droppableItem</Droppable>
    </DndContext>
  );
}
