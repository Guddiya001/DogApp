import React, { useEffect } from "react";
import { singleFetchDogs } from "../redux/actions";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Loader from "./Loader";
const SingleDog = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(singleFetchDogs(name));
  }, [dispatch, name]);
  let { dog, loading } = useSelector((state) => ({ ...state.dogsReducer }));
  console.log(dog);
  return (
    <>
      <section>
        <section>
          <div class="container h-100 w-100 py-4 mx-auto">
            {loading ? (
              <Loader />
            ) : (
              <div
                class="row h-100 m-0 p-0 my-2 w-100 align-items-center py-4 "
                id="details"
              >
                <div class="col-md-6 order-md-2 order-2 text-md-start text-center py-4 px-4 ">
                  <h4 class="font-weight-light animation">
                    <b>{dog[0]?.name}</b>
                  </h4>
                  <div class="description py- animation  overflow-hidden">
                    <span>
                      <i class="fas fa-paw"></i>
                    </span>
                    <p>
                      <span>Weight</span>:{dog[0]?.weight?.imperial} Kg
                    </p>
                    <p>
                      <span>Height</span>: {dog[0]?.height?.imperial} Cm
                    </p>
                    <p>
                      <span>Breed</span>:{dog[0]?.bred_for}{" "}
                    </p>
                    <p>
                      <span>Life</span>:{dog[0]?.life_span}
                    </p>
                    <p>
                      <span>Temperament</span>:{dog[0]?.temperament}{" "}
                    </p>
                    <span>
                      <i class="fas fa-paw"></i>
                    </span>
                  </div>
                  <NavLink to="/">
                    {" "}
                    <span>
                      <i class="fas fa-chevron-left"></i>
                    </span>
                  </NavLink>
                </div>
                <div class="col-md-6 order-md-1 order-1 text-center p-0">
                  <img
                    src={`https://cdn2.thedogapi.com/images/${dog[0]?.reference_image_id}.jpg`}
                    alt={dog[0]?.name}
                    class="img-fluid"
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      </section>
    </>
  );
};

export default SingleDog;
