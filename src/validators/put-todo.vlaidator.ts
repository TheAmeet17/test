/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { z } from 'zod'

export const putTodoDto = z.object({  //The createTodoDto is a Zod schema defined using z.object
    body: z.object({
        title: z.string().optional(),

        status: z.object({
            status: z.string({
                required_error: 'Status  is required',
            }),
        }),
    }),
})