import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { BadRequest } from "./_errors/bad-request";

export async function registerForEvent(app: FastifyInstance) {
    app
        .withTypeProvider<ZodTypeProvider>()
        .post('/events/:eventId/attendees', {
            schema: {
                summary: 'Make an registration',
                tags: ['attendees'],
                body: z.object({
                    name: z.string().min(4),
                    email: z.string().email(),
                }),
                params: z.object({
                    eventId: z.string().uuid(),
                }),
                response: {
                    201: z.object({
                        attendeeId: z.number(),
                    })
                }
            }
     }, async (request, reply) => {
       const { eventId } = request.params
       const { name, email } = request.body

       const attendeeFromEmail = await prisma.attendees.findUnique({
        where: {
            eventId_email: {
                email,
                eventId
            }
        }
       })

       if (attendeeFromEmail !== null) {
        throw new BadRequest('E-mail already being used on this event.')
       }

       const [event, amountOfAttendeesForEvent] = await Promise.all([
        prisma.events.findUnique({
            where: {
                id: eventId,
            }
           }),

           prisma.attendees.count({
            where: {
                eventId,
            }  
     })
     ])

     if (event?.maximumAttendees && amountOfAttendeesForEvent >= event?.maximumAttendees) {
        throw new Error('The maximum amount of attendees for this event has been reached.')
     }

     const attendee = await prisma.attendees.create({ 
         data: {
             name,
             email,
             eventId,
         }
     })

     return reply.status(201).send({ attendeeId: attendee.id })
     })
 }