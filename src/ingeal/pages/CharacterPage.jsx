import React, { useEffect, useState } from "react";

import { useCharacterStore } from "../../hooks";


export const CharacterPage = () => {
  const { pagination, characters, startLoadingCharacters } =
    useCharacterStore();
  const [page, pageSet] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    status: "",
  });

  useEffect(() => {
    startLoadingCharacters(page, "", "");
  }, [page]);

  const onInputChanged = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handlerNext = (next) => {
    if (next) {
      const array = next.split("?");
      const number = array[1].split("=");
      pageSet(number[1]);
    }

  }
  const handlerPrev = (prev) => {
    if (prev) {
      const array = prev.split("?");
      const number = array[1].split("=");
      pageSet(number[1]);
    }
  }

  const onSubmitHandle = async (e) => {
    e.preventDefault();

    await startLoadingCharacters(page, formValues.name, formValues.status);
  };
  const handleClear =  (e) => {
    setFormValues({});
     startLoadingCharacters(page, "", "");
  }
  return (
    <>
      <hr />
      <div className="container" style={{marginTop:"107px"}}>
        <div className="row">

          <div className="col-md-12">

            <div className="col-md-8">


              <form onSubmit={onSubmitHandle}>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formValues.name}
                      onChange={onInputChanged}
                      placeholder="buscar por nombre" />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      name="status"
                      value={formValues.status}
                      onChange={onInputChanged}
                      placeholder="Ingrese el estado" />
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col">
                    <button
                      type="submit"
                      className="btn btn-outline-primary btn-block"
                    >
                      <i className="far fa-save"></i>
                      <span> Buscar</span>
                    </button>
                  </div>
                  <div className="col">
                    <button onClick={handleClear}
                      type="submit"
                      className="btn btn-outline-danger btn-block"
                    >
                      <i className="far fa-trash"></i>
                      <span> Limpiar</span>
                    </button>
                  </div>
                </div>

              </form>
              <hr />
            </div>
            <div className="col-md-4">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item"><a className="page-link" onClick={() => handlerPrev(pagination.prev)}>Atras</a></li>
                  <li className="page-item"><a className="page-link" onClick={() => handlerNext(pagination.next)} >Siguientes</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <p>

          <span style={{ padding: "6px 12px 16px 2px" }}> <strong>Total:</strong><span >{pagination.count}</span></span>
          <span style={{ padding: "6px 12px 16px 2px" }}>  <strong>Pages:</strong><span >{pagination.pages}</span></span>
          <span style={{ padding: "6px 12px 16px 2px" }}>  <strong>Page actual:</strong><span >{page}</span></span>
        </p>
        <div className="row">{characters && characters.map((character) => (

          <div className="col-md-4" key={character.id}>
            <div className="card mb-4 shadow-sm">

              <img src={character.image} className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
              />
              <div className="card-body">
                <p className="card-text"><strong>Name:</strong> {character.name}.</p>
                <p className="card-text"><strong>Gender:</strong> {character.gender}.</p>
                <p className="card-text"><strong>Status:</strong> {character.status}.</p>
                <p className="card-text"><strong>Species:</strong> {character.species}.</p>
              </div>
            </div>
          </div>

        )

        )}

        </div>
      </div>





    </>
  );
};
