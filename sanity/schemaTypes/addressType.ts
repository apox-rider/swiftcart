import { defineField, defineType } from "sanity";
import { HomeIcon } from "@sanity/icons";

export const addressType = defineType({
    name:'address',
    title:'Address',    
    type:'document',
    icon:HomeIcon,
    fields:[
        defineField({
            name:'name',
            title:'Address Name',
            type:'string',
            description:'A name to identify this address (e.g., Home, Work)',
            validation: (Rule) => Rule.required().max(50),
        }),
        defineField({
            name:'email',
            title:'Email Address',
            type:'string',
            validation: (Rule) => Rule.required().email().max(100),
        }),
        defineField({
            name:'phone',
            title:'Phone Number',
            type:'number',
            validation: (Rule) => Rule.required().min(255600000000),
        }),
        defineField({
            name:'street',
            title:'Street Address',
            type:'string',
        }),
        defineField({
            name:'city',
            title:'City',
            type:'string',
            validation: (Rule) => Rule.required().max(100),
        }),
        defineField({
            name:'state',
            title:'State/Province',
            type:'string',
        }),
        defineField({
            name:'postalCode',
            title:'Postal Code',
            type:'string',
        }),
        defineField({
            name:'country',
            title:'Country',
            type:'string',
            validation: (Rule) => Rule.required().max(100),
        }),
        defineField({
            name:'isDefault',
            title:'Default Address',
            type:'boolean',
            description:'Indicates if this is the default address for the user.',
            initialValue: false,
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            options: {
                dateFormat: 'YYYY-MM-DD',
                timeFormat: 'HH:mm',
                timeStep: 15, // Intervals for the time picker
            }
}),
    ],
    preview:{
        select:{
            title:'name',
            subtitle:'street',
            city:'city',
            country:'country',
        },
        prepare(selection){
            const {title, subtitle, city, country} = selection;    
            return {
                title: title,
                subtitle: `${subtitle}, ${city}, ${country}`,
            } 
        }
    }
})