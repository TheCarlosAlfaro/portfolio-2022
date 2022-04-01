export default {
  title: 'Projects',
  name: 'projects',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Rating',
      name: 'rating',
      type: 'number',
      validation: (Rule) => Rule.max(5),
    },
    {
      title: 'Video URL',
      name: 'videoUrl',
      type: 'url',
    },
    {
      title: 'Created AT',
      name: 'cratedAt',
      type: 'date',
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'Github URI',
      name: 'githubUri',
      type: 'url',
    },
    {
      title: 'Thumbnail',
      name: 'thumbnail',
      type: 'image',
    },
  ],
};
