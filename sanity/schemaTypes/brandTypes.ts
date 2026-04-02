import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";


export const brandTypes = defineType({
    name:'brand',
    title:'Brand',
    type:'document',
    icon: TagIcon,
    fields:[
        defineField({
            name:'title',
            type:'string',
        }),
        defineField({
            name:'slug',
            type:'slug',
            options:{
                source:'title',
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:'description',
            type:'text',
        }),
    ],
    preview:{
        select:{
            title:'title',
            subtitle:'description',
            media:'image',
        }
    }
});