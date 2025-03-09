import {data} from "./p-bolsa-familia-brasil-mensal.data";
import {autoType} from "d3";

export default data.map(({...d}) => autoType(d));