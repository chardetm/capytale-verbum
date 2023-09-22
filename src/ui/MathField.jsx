import "//unpkg.com/mathlive";
import { useState } from "react";

function MathField() {
  const [value, setValue] = useState("");

  return (
    <div>
      <math-field 
        onInput={evt => setValue(evt.target.value)}
      >
        {value}
      </math-field>
      <p>Value: {value}</p>
    </div>
  );
}

export default MathField;
