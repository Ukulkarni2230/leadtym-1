import React, { useState, useEffect } from "react";
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Popover,
} from "@mui/material";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { FaGripVertical } from "react-icons/fa";
import { MdLock, MdLockOpen } from "react-icons/md";
import CustomCheckbox from "../../reuseable/checkbox";

function SortableItem({
  id,
  label,
  tableId,
  visible,
  locked,
  onToggle,
  onLockToggle,
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex items-center justify-between mb-2 px-2 rounded hover:bg-gray-200"
    >
      <div className="flex items-center">
        <FaGripVertical className="mr-2 cursor-move text-gray-500" />
        <CustomCheckbox
          label={label}
          checked={visible}
          onCheckedChange={onToggle}
          id={`custom-checkbox-${id}`}
        
          className="!rounded-[2.5px] mr-2 !h-[16px] !w-[16px]"
        />
      </div>

      <IconButton onClick={onLockToggle}>
        {locked ? (
          <MdLock className="text-black" />
        ) : (
          <MdLockOpen className="text-gray-500" />
        )}
      </IconButton>
    </div>
  );
}

const ConfigureTableModal = ({
  open,
  onClose,
  columns,
  setColumns,
  anchorEl,
  tableId,
}) => {
  const [tempColumns, setTempColumns] = useState(columns);

  useEffect(() => {
    setTempColumns(columns);
  }, [columns]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setTempColumns((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleToggle = (index) => {
    setTempColumns((prevColumns) => {
      const updatedColumns = [...prevColumns];
      updatedColumns[index] = {
        ...updatedColumns[index],
        visible: !updatedColumns[index].visible,
      };
      return updatedColumns;
    });
  };

  const handleLockToggle = (index) => {
    setTempColumns((prevColumns) => {
      const updatedColumns = [...prevColumns];
      updatedColumns[index] = {
        ...updatedColumns[index],
        locked: !updatedColumns[index].locked,
      };
      return updatedColumns;
    });
  };

  const handleApply = () => {
    setColumns(tempColumns);
    onClose();
  };

  const handleCancel = () => {
    setTempColumns(columns);
    onClose();
  };
  const filteredColumns = ["optimizationsRulesTable", "campaignTable"].includes(
    tableId
  )
    ? tempColumns.filter((column) => column.field !== "actions")
    : tempColumns;

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleCancel}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <DialogTitle>
        <p className="text-sm sm:text-base md:text-lg">Configure Table</p>
      </DialogTitle>
      <DialogContent>
        <div className="border-b mb-2"></div>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={filteredColumns.map((column) => column.id)}>
            {filteredColumns.map((column, index) => (
              <SortableItem
                key={column.id}
                id={column.id}
                label={column.label}
                visible={column.visible}
                locked={column.locked}
                onToggle={() => handleToggle(index)}
                onLockToggle={() => handleLockToggle(index)}
              />
            ))}
          </SortableContext>
        </DndContext>
      </DialogContent>
      <DialogActions>
        <button
          onClick={handleCancel}
          className="bg-gray-400 hover:bg-gray-300 hover:text-black text-gray-700 px-3 text-white rounded-full py-1 text-[10px] sm:text-[12px] 2xl:text-[14px] font-semibold"
          color="secondary"
        >
          Cancel
        </button>
        <button
          onClick={handleApply}
          className="gradient-bg px-3 text-white rounded-full py-1 text-[10px] sm:text-[12px] 2xl:text-[14px] font-semibold"
        >
          Apply
        </button>
      </DialogActions>
    </Popover>
  );
};

export default ConfigureTableModal;
