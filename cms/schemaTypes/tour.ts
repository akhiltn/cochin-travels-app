
import { defineType, defineField } from "sanity"

export default defineType({
  name: "tour",
  title: "Tour Package",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Tour Title",
      type: "string",
      validation: Rule => Rule.required()
    }),

    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),

    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Kerala Tour", value: "kerala" },
          { title: "Sabarimala Package", value: "sabarimala" }
        ],
        layout: "radio"
      },
      validation: Rule => Rule.required()
    }),

    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      description: "Example: 5 Days / 4 Nights",
      validation: Rule => Rule.required()
    }),

    defineField({
      name: "price",
      title: "Price (INR)",
      type: "number",
      validation: Rule => Rule.required().min(0)
    }),

    defineField({
      name: "peopleCount",
      title: "Number of People",
      type: "number",
      description: "Package valid for how many people",
      validation: Rule => Rule.required().min(1)
    }),

    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      validation: Rule => Rule.required()
    }),

    defineField({
      name: "gallery",
      title: "Gallery Images",
      type: "array",
      of: [{ type: "image" }]
    }),

    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }]
    }),

    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 4,
      validation: Rule => Rule.required()
    }),

    defineField({
      name: "itinerary",
      title: "Detailed Itinerary",
      type: "array",
      of: [{ type: "block" }]
    }),

    // SEO FIELDS
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description: "Recommended: under 60 characters"
    }),

    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
      description: "Recommended: under 160 characters"
    })
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "heroImage"
    }
  }
})
