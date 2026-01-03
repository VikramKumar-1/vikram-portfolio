export default {
  name: "job",
  title: "Job",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Job Title",
      type: "string",
      validation: Rule => Rule.required()
    },
   /* {
      name: "company",
      title: "Company",
     // type: "string"
      type: "reference",
       to: [{ type: "company" }],
      validation: Rule => Rule.required()
    },*/
    {
  name: "companyName",
  title: "Company Name",
  type: "string",
  validation: Rule => Rule.required()
},

{
  name: "company",
  title: "Featured Company (Optional)",
  type: "reference",
  to: [{ type: "company" }]
},

    

    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "IT", value: "IT" },
          { title: "Non-IT", value: "NON_IT" }
        ],
        layout: "radio"
      }
    },
    {
      name: "experience",
      title: "Experience",
      type: "string"
    },
   

    {
      name: "eligibility",
      title: "Eligibility",
      type: "string"
    },
     {
    name: "location",
      title: "Job Location",
      type: "string",
     validation: Rule => Rule.required()
     },

    {
      name: "lastDate",
      title: "Last Date",
      type: "date"
    },
    {
      name: "description",
      title: "Job Description",
      type: "text"
    },
    {
      name: "applyLink",
      title: "Apply Link",
      type: "url"
    },
    {
      name: "postedAt",
      title: "Posted At",
      type: "datetime",
      initialValue: () => new Date().toISOString()
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    }
  ]
};
