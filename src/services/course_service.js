import axios from "axios"
import { COURSE_API } from "../config/api"

export const courseService = {
  getCourse: async () => {
    try {
      return await axios.get((`${COURSE_API}?populate=*`))
    } catch (error) {
      console.log(error)
    }
  }
}