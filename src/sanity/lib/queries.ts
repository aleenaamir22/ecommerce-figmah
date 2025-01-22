import { groq } from "next-sanity";


export const allfood = groq`*[_type == "product"]`;
export const three = `*[_type == "product"][0..2]`;