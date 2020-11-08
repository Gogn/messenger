import axios from 'axios';
import {emit} from "./index";

const getMessages = async() => {
  const res = await emit();
  return res
};

export default {
  getMessages,
}
