import React from "react";

function Cell({ id, cell, go, setGo, cells, setCells, winningMessage }) {
  const handleCellChange = (className) => {
    const nextCells = cells.map((cell, index) => {
      if (index === id) {
        return className;
      } else {
        return cell;
      }
    });
    setCells(nextCells);
  };
  const handleClick = (e) => {
    const taken =
      e.target.firstChild?.classList.contains("circle") ||
      e.target.firstChild?.classList.contains("cross");
    if (!taken) {
      if (go === "circle") {
        e.target.firstChild?.classList.add(`circle`);
        handleCellChange("circle");
        setGo("cross");
      }
      if (go === "cross") {
        e.target.firstChild?.classList.add(`cross`);
        handleCellChange("cross");
        setGo("circle");
      }
    }
  };
  return (
    <div className="square" id={id} onClick={winningMessage== null ? handleClick : undefined}>
      <div className={cell}></div>
    </div>
  );
}

export default Cell;
