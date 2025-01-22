import { type SchemaTypeDefinition } from 'sanity'
import chefSchema from './chefs'
import foodSchema from './food'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [chefSchema,foodSchema],
}
