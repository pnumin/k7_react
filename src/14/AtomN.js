import { atom, selector} from "recoil";

export const AtomN = atom({
  key : "AtomN",
  // default : parseInt(localStorage.getItem("n") )
  default : 0 
}) ; 

export const AtomN2 = selector({
  key : "AtomN2",
  get : ({get}) => {
    // let tm =  get(AtomN) % 2 === 0 ? "짝수" : "홀수" ;
    return  get(AtomN)*2 ;
  }
});
