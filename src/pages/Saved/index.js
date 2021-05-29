import "./style.css";
import { useContext } from "react";
import { Context } from "../../context/Session";
import Card from "../../components/Card";

const Saved = () => {
  const { saveds } = useContext(Context);
  return (
    <main>
      <section className="saveds container">
        {saveds && !saveds.length ? (
          <p className="text-info">You don't have any saveds.</p>
        ) : (
          <>
            <h2 className="text-info">SAVEDS</h2>
            {saveds.map((meal) => (
              <Card key={meal.idMeal} meal={meal} />
            ))}
          </>
        )}
      </section>
    </main>
  );
};

export default Saved;
