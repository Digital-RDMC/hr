import { currentUser } from "@clerk/nextjs/server";
import { prisma } from '@/lib/prisma'


export const  checkUser = async () =>{
    const user = await currentUser()

    if(!user) return null

    const loggedUser = await prisma.users.findUnique({
        where : {
            clerkUserId: user.id
        }
    })

    if(loggedUser) return loggedUser

    const newUser = await prisma.users.create({
        data: {
            clerkUserId: user.id,
            name: `${user.firstName} ${user.lastName}`,
            email: user.emailAddresses[0].emailAddress,
            image: user.imageUrl
        }
    })

    return newUser

}