import { defineArrayMember, defineField, defineType } from "sanity";
import { BasketIcon } from "@sanity/icons";

export const orderType = defineType({
  name: "order",
  title: "Order",
  type: "document",
  icon: BasketIcon,
  fields: [
    defineField({
      name: "orderNumber",
      title: "Order Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "invoice",
      title: "Invoice Details",
      type: "object",
      fields: [
        { name: "id", title: "Invoice ID", type: "string" },
        { name: "number", title: "Invoice Number", type: "string" },
        { name: "hosted_invoice_url", title: "Invoice URL", type: "url" },
      ],
    }),
    defineField({
      name: "stripeSessionCheckoutId",
      title: "Stripe Session Checkout ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "stripeCustomerId",
      title: "Stripe Customer ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "clerkUserId",
      title: "Store User ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "customerName",
      title: "Customer Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Customer Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "stripePaymentIntentId",
      title: "Stripe Payment Intent ID",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "totalPrice",
      title: "Total Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "currency",
      title: "Currency",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "products",
      title: "Products",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "product",
              title: "Product bought",
              type: "reference",
              to: [{ type: "product" }],
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "quantity",
              title: "Quantity Purchased",
              type: "number",
              validation: (Rule) => Rule.required().min(1),
            }),
          ],
          preview: {
            select: {
              title: "product.name",
              quantity: "quantity",
              media: "product.image",
              price:"product.price",
              currency:"product.currency"
            },
            prepare(select) {
              return {
                title: `${select.title} x ${select.quantity}`,
                subtitle:`${select.price * select.quantity}`,
                media: select.media,
              };
            },
          },
        }),
      ],
    }),
    defineField({
        name:"address",
        title:"Shipping Address",
        type:"object",
        fields:[
            defineField({name:"state",title:"State",type:"string"}),
            defineField({name:"city",title:"City",type:"string"}),
            defineField({name:"name",title:"Name",type:"string"}),
        ],
        validation:(Rule)=>Rule.required()
    }),
    defineField({
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Paid", value: "paid" },
          { title: "Shipped", value: "shipped" },
          { title: "Delivered", value: "delivered" },
          { title: "Cancelled", value: "cancelled" },
        ],
      },
      initialValue: "pending",
    }),
    defineField({
        name: 'orderDate',
        title: 'Order Date',
        type: 'datetime',
        initialValue: () => new Date().toISOString(),
    })
  ],
  preview: {
    select: {
      name: "customerName",
      amount: "totalPrice",
      currency: "currency",
      orderId: "orderNumber",
      email: "email",
    },
    prepare(select) {
      const orderIdSnippet = `${select.orderId.slice(0, 5)}...${select.orderId.slice(-1,-3)}`;
      return {
        title: `${select.name} (${orderIdSnippet})`,
        subtitle: `${select.amount} ${select.currency} - ${select.email}`,
        media: BasketIcon,
      };
    },
  },
});