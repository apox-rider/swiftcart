import { defineArrayMember, defineType } from "sanity";
import { ImageIcon } from "@sanity/icons";

export const blockContentType = defineType({
    name:'blockContent',
    title:'Block Content',
    type:'array',
    of:[
        defineArrayMember({
            type:'block',
            styles:[
                {title:'Normal', value:'normal'},
                {title:'H1', value:'h1'},
                {title:'H2', value:'h2'},
                {title:'H3', value:'h3'},
                {title:'H4', value:'h4'},
                {title:'Quote', value:'blockquote'},
            ],
            lists:[
                {title:'Bullet', value:'bullet'},
                {title:'Numbered', value:'number'},
            ],
            marks:{
                decorators:[
                    {title:'Strong', value:'strong'},
                    {title:'Emphasis', value:'em'},
                    {title:'Underline', value:'underline'},
                    {title:'Strike', value:'strike-through'},
                ],
                annotations:[
                    {
                        name:'link',
                        type:'object',
                        title:'URL',
                        fields:[
                            {
                                name:'href',
                                type:'url',
                                title:'URL',
                            }
                        ]
                    }
                ]
            }
        }),
        defineArrayMember({
            type:'image',
            icon:ImageIcon,
            options:{
                hotspot:true,
            },
            fields:[
                {
                    name:'alt',
                    type:'string',
                    title:'Alternative Text',
                    description:'A description of the image for accessibility purposes.',
                    validation: (Rule) => Rule.required().max(150),
                }
            ]
        }),
    ],
});