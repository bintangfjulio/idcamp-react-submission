import React from "react";

function TableAction({ actions, uuid, onDelete }) {
  return (
    <td>
      <div className="flex justify-center items-center space-x-2">
        {actions.map((actionItem, index) => (
          <button
            key={`${actionItem.action}-${index}`}
            onClick={
              actionItem.action === "delete" ? () => onDelete(uuid) : undefined
            }
            className={`btn btn-xs text-white ${actionItem.color}`}
          >
            {actionItem.label}
          </button>
        ))}
      </div>
    </td>
  );
}

export default TableAction;
