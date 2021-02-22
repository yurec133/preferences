import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styles from "./list.module.scss";
import { ReactComponent as DeleteIcon } from "../../img/icon-minus.svg";
import { ReactComponent as DraggableIcon } from "../../img/icon-draggable.svg";
import { useDispatch } from "react-redux";
import { deleteFavoriteIndustries } from "../../redux/actions/industryAction";

export const List = ({ items, switchToggle }) => {
  const dispatch = useDispatch();
  const onDelete = id => {
    dispatch(deleteFavoriteIndustries(id));
  };

  return (
    <div className={styles.list}>
      {items.length > 2 && (
        <div className={`${styles.box} ${switchToggle ? styles.blur : ""}`}>
          <span>High</span>
          <span>Low</span>
        </div>
      )}
      <DragDropContext
        onDragEnd={params => {
          const srcI = params.source.index;
          const desI = params.destination?.index;
          if (desI) {
            items.splice(desI, 0, items.splice(srcI, 1)[0]);
          }
        }}
      >
        <Droppable droppableId="droppable-1">
          {provided => (
            <ul
              className={styles.ul}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {items.map((item, id) => (
                <Draggable
                  key={`${item.id}_${item.label}`}
                  draggableId={`draggable-${item.id}`}
                  index={id}
                >
                  {(provided, snapshot) => (
                    <li
                      className={`${styles.li} ${
                        snapshot.isDragging ? styles.shadow : ""
                      }`}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <DraggableIcon className={styles.draggable} />
                      {item.label}
                      <DeleteIcon
                        className={styles.delete}
                        onClick={() => onDelete(item.id)}
                      />
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
