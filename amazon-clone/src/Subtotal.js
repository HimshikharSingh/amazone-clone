import { SportsBasketball } from '@mui/icons-material';
import React from 'react';
import "./Subtotal.css";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrentFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items):
              <strong>{0}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox"/> This order contains a gift
            </small>
          </>
        )}
        decimalScal={2}
        value={0}
        displayType={"text"}
        thousandSepereator={true}
        prefix={"₹"}
      />
      
    </div>
  )
}

export default Subtotal;
