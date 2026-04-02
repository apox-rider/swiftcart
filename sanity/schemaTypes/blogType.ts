import { defineArrayMember, defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";
import { de, se } from "date-fns/locale";

export const blogType = defineType({
    name:'blog',
    title:'Blog',
    type:'document',
    icon: DocumentTextIcon,
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
            name:'author',
            type:'reference',
            to:{type:'author'},
        }),
        defineField({
            name:'mainImage',
            type:'image',
            options:{
                hotspot:true,
            },
        }), 
        defineField({
            name:'blogcategories',
            type:'array',
            of:[
               defineArrayMember({
                type:'reference',
                to:{type:'blogCategory'},
               }),
            ],
        }),
        defineField({
            name:'publishedAt',
            type:'datetime',
        }),
        defineField({
            name:'islatest',
            title:'Is Latest',
            type:'boolean',
            description:'Whether this blog post should be featured as the latest on the homepage',
            initialValue: false,
        }),
        defineField({
            name:'body',
            type:'blockContent',
        }),
    ],
    preview:{
        select:{
            title:'title',
            author:'author.name',
            media:'mainImage',
            islatest:'islatest',
        },
        prepare(selection){
            const {title, author, media, islatest} = selection;
            return {
                 ...selection,
                subtitle:author && `${islatest ? 'Latest' : ''} By:${author}`,
            }
        }
    }
});