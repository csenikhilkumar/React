import {atomFamily} from "recoil"
import { Todos } from "../AtomsData/data"


export const atomParivar = atomFamily({
  key:"atomFamily",
  default:id => {
    return Todos.find(x => x.id === id)
  }
})