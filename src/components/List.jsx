import React, { useContext } from "react";
import { Context } from "../context";
import TableHead from "./TableHead";
import TableFooter from "./TableFooter";

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
// }
export default function List({ db }) {
  const { edRec, delRec } = useContext(Context);
  return (
    <div className="App">
      <table>
        <TableHead />
        <tbody>
          {db.map((item, id) => (
            <tr key={id.toString()}>
              <th>{`${item.index + 1}.`}</th>
              <th>{item.name}</th>
              <th>{item.phone}</th>
              <th>{item.email}</th>
              <th>
                <button attribute={item} onClick={() => edRec(id)}>
                  Edit
                </button>
              </th>
              <th>
                <button attribute={item} onClick={() => delRec(id)}>
                  Del
                </button>
              </th>
            </tr>
          ))}
        </tbody>
        <TableFooter />
      </table>
    </div>
  );
}
