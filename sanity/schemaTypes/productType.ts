import { defineField, defineType } from "sanity";
import { TrolleyIcon } from "@sanity/icons";
import { de } from "date-fns/locale";
import { sub } from "date-fns";

export const productType = defineType({
    name:'product',
    title:'Product',
    type:'document',
    icon:TrolleyIcon,
    fields:[
        defineField({
            name:'name',
            title:'Product Name',
            type:'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:'slug',
            title:'Slug',
            type:'slug',
            options:{
                source:'name',
                maxLength:96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:'image',
            title:'Product Image',
            type:'array',
            of:[{type:'image', options:{hotspot:true}}],        
        }),
        defineField({
            name:'description',
            title:'Product Description',
            type:'string',
        }),
        defineField({
            name:'price',
            title:'Product Price',
            type:'number',
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name:'discountPrice',
            title:'Discount Price',
            type:'number',
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name:'categories',
            title:'Product Categories',
            type:'array',
            of:[{type:'reference', to:{type:'category'}}],
        }),
        defineField({
            name:'stock',
            title:'Product Stock',
            type:'number',
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name:'brand',
            title:'Product Brand',
            type:'reference',
            to:{type:'brand'},
        }),
        defineField({
            name:'status',
            title:'Product Status',
            type:'string',
            options:{
                list:[
                    {title:'New', value:'new'},
                    {title:'Hot', value:'hot'},
                    {title:'Sale', value:'sale'},
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:'variant',
            title:'Product type',
            type:'string',
            options:{
                list:[
                    {title:'Power', value:'power'},
                    {title:'Hand', value:'hand'},
                    {title:'Tech', value:'tech'},
                    {title:'Fastener', value:'fasteners'},
                    {title:'Other', value:'other'},
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name:'isfeatured',
            title:'Fieatured Product',
            type:'boolean',
            description:'Whether this product should be featured on the homepage',
            initialValue: false,
        }),
    ],
    preview:{
        select:{
            title:'name',
            media:'image',
            subtitle:'price',
        },
        prepare(selection){
            const {title, media, subtitle} = selection;
            const image= media && media[0] ;
            return {
                title: title,
                subtitle: `$${subtitle}`,
                media: image,
            }
        }   
    }
});