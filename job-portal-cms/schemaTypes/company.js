export default {
  name: "company",
  title: "Company",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Company Name",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96
      }
    },
    {
      name: "logo",
      title: "Company Logo",
      type: "image",
      options: {
        hotspot: true
      }
    }
  ]
};
