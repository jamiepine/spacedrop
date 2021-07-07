import { builder } from "../../../builder";

builder.queryField('TestResult', (t) => 
  t.field({
    type: 'String',
    resolve: () => ('hello !')
  })
)