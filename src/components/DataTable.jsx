import React from "react";
import TableAction from "./TableAction";
import { showFormattedDate } from "../utils";

function DataTable({ headers, datas, actions, onDelete }) {
  return (
    <div className="overflow-x-auto overflow-y-hidden border border-1 rounded-lg">
      <table className="table table-zebra">
        <thead className="bg-[#2d3e50] text-white font-bold">
          <tr className="text-md text-center">
            {headers.map((header, index) => (
              <td key={index}>{header}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {datas.length === 0 ? (
            <tr>
              <td
                colSpan={headers.length}
                className="text-center text-gray-500"
              >
                No data found
              </td>
            </tr>
          ) : (
            datas.map((data, rowIndex) => (
              <tr key={rowIndex}>
                <td className="text-center">{rowIndex + 1}.</td>
                <td>{data.title}</td>
                <td>{data.body}</td>
                <td>{showFormattedDate(data.createdAt)}</td>
                <TableAction
                  actions={actions.tableAction}
                  id={data.id}
                  onDelete={onDelete}
                />
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
