
import { z } from 'zod'

export const deleteTodoDto = z.object({
    params: z.object({
        id: z.string().refine((value) => !isNaN(Number(value)), {
            message: 'ID must be a number',
        }),
    }),
})