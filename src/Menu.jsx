import React from "react";
import pizzaData from "./data";

function Menu() {
  const pizzas = pizzaData;

  const numpizzas = pizzas.length;

  return (
    <div className="menu">
      <h2>Our Menu</h2>

      {numpizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicous
          </p>
          <ul className="pizzas">
            {pizzas.map((item) => {
              {
              }
              return (
                <li
                  className={`pizza ${item.soldOut ? "sold-out" : ""}`}
                  key={item.id}
                >
                  <img src={item.photoName} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.ingredients}</p>
                    <span>{item.soldOut ? "Sold Out" : item.price}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <p>We are stell working on our menu. Please come later :) </p>
      )}
    </div>
  );
}

export default Menu;
