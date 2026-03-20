import React from "react";

function ErrorMessage({ foodItems }) {
  return (
    <div>
      {/* Conditional-Rendering-Method3--LogicalOperator */}
      {foodItems.length === 0 && <h1>I am Still hungry</h1>}
    </div>
  );
}

export default ErrorMessage;
