import React from "react";
import Icon from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";

export const View = ({ books, deleteBook }) => {
  return books.map((book, index) => (
    <tr key={index}>
      <td>{book.number}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td className="delete-btn">
        <Icon icon={trash} onClick={() => deleteBook(book.number)} />
      </td>
    </tr>
  ));
};
