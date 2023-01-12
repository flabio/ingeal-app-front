import { useDispatch, useSelector } from "react-redux";
import ingealApi from "../api/ingealApi";
import {
  onLoadingCharacter
} from "../store";

export const useCharacterStore = () => {
  const dispatch = useDispatch();
  const { pagination,characters,isLoadingCharacter} = useSelector((state) => state.character);

  
  const startLoadingCharacters = async (page,name="",status="") => {
    try {
      console.log(page);

      const { data } = await ingealApi.get(`/characters?page=${page?page:"0"}&name=${name}&status=${status}`);
      
      dispatch(onLoadingCharacter(data));
    } catch (err) {
      const { response } = err;
      //Swal.fire("error", response.data.error, "error");
    }
  };
  return {
    characters,
    isLoadingCharacter,
    pagination,
    //methods
    startLoadingCharacters,
  };
};
