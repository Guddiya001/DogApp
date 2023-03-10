import React, { useState, useEffect } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { fetchDogs } from "../redux/actions";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Cards from "./Cards";
import Loader from "./Loader";
import Search from "./Search";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDogs());
     }, [dispatch]);

  const { dogs, loading } = useSelector((state) => ({ ...state.dogsReducer }));
  const [animals, setAnimal] = useState(...dogs);
  useEffect(() => {
      setAnimal(dogs)
   }, [dogs])

  const [sorted, setSorted] = useState({ sorted: "id", reversed: false });

  const sortById = () => {
    const animalsCopy = [...dogs];
    animalsCopy.sort((userA, userB) => {
      if (sorted.reversed) {
        return userA.id - userB.id;
      }
      return userB.id - userA.id;
    });
    setAnimal(animalsCopy);
    setSorted({ sorted: "id", reversed: !sorted.reversed });
  };

  const sortByName = () => {
    const animalsCopy = [...animals];
    animalsCopy.sort((userA, userB) => {
      const fullNameA = `${userA.name}`;
      const fullNameB = `${userB.name}`;
      if (sorted.reversed) {
        return fullNameB.localeCompare(fullNameA);
      }
      return fullNameA.localeCompare(fullNameB);
    });
    setAnimal(animalsCopy);
    setSorted({ sorted: "name", reversed: !sorted.reversed });
  };

  const sortByAge = () => {
    const animalsCopy = [...animals];
    animalsCopy.sort((userA, userB) => {
      const fullNameA = `${userA.life_span}`;
      const fullNameB = `${userB.life_span}`;
      if (sorted.reversed) {
        return fullNameB.localeCompare(fullNameA);
      }
      return fullNameA.localeCompare(fullNameB);
    });
    setAnimal(animalsCopy);
    setSorted({ sorted: "life_span", reversed: !sorted.reversed });
  };

  const sortByHeight = () => {
    const animalsCopy = [...animals];
    animalsCopy.sort((userA, userB) => {
      const fullNameA = `${userA.height.imperial}`;
      const fullNameB = `${userB.height.imperial}`;
      if (sorted.reversed) {
        return fullNameB.localeCompare(fullNameA);
      }
      return fullNameA.localeCompare(fullNameB);
    });
    setAnimal(animalsCopy);
    setSorted({ sorted: "height", reversed: !sorted.reversed });
  };

  const renderArrow = () => {
    if (sorted.reversed) {
      return <FaArrowUp />;
    }
    return <FaArrowDown />;
  };

  return (
    <>
      <Search />
      <div className="content">
        <div className="container py-4">
          <div className="row">
            <table className="table table-dark">
              <thead>
                <tr>
                  <th onClick={sortById}>
                    <span style={{ marginRight: 10 }}>Id</span>
                    {sorted.sorted === "id" ? renderArrow() : null}
                  </th>
                  <th onClick={sortByName}>
                    <span style={{ marginRight: 10 }}>Name</span>
                    {sorted.sorted === "name"
                      ? renderArrow()
                      : null}
                  </th>
                  <th onClick={sortByAge}>
                    <span style={{ marginRight: 10 }}>life_span</span>
                    {sorted.sorted === "life_span" ? renderArrow() : null}
                  </th>
                  <th onClick={sortByHeight}>
                    <span style={{ marginRight: 10 }}>Height</span>
                    {sorted.sorted === "height" ? renderArrow() : null}
                  </th>
                </tr>
              </thead>
              </table>

            {loading ? (
              <Loader />
            ) : animals?.length >1 ? (
              animals?.map((element) => {
                let {
                  id,
                  name,
                  bred_for,
                  life_span,
                  breed_group,
                  reference_image_id,
                } = element;
                return (
                  <Cards key={id}
                    name={name}
                    bred_for={bred_for}
                    life_span={life_span}
                    breed_group={breed_group}
                    reference_image_id={reference_image_id}
                  />
                );
              })
            ) : (
              <h2 className="text-white">No Breed Found</h2>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
