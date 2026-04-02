import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

export const authorType = defineType({
    name:'author',
    title:'Author',
    type:'document',
    icon:UserIcon,
    fields:[
        defineField({
            name:'name',
            title:'Name',
            type:'string',
            validation: (Rule) => Rule.required().max(100),
        }),
        defineField({
            name:'email',
            title:'Email',
            type:'string',
            validation: (Rule) => Rule.required().email().max(100),
        }),
        defineField({
            name:'bio',
            title:'Biography',
            type:'text',
        }),
        defineField({
            name:'profileImage',
            title:'Profile Image',
            type:'image',
            options:{
                hotspot:true,
            },
        }),
    ],
    preview:{
        select:{
            title:'name',
            subtitle:'email',
            media:'profileImage',
            description:'bio',
        }
    }
});