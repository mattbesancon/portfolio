const project = {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'title',
        type: 'string',
      },
      {
        name: 'date',
        type: 'datetime',
      },
      {
        name: 'place',
        type: 'string',
      },
      {
        name: 'description',
        type: 'text',
      },
      {
        name: 'projectType',
        title: 'Project type',
        type: 'string',
        options: {
            list: [
                { value: 'personal', title: 'Personal'},
                { value: 'professional', title: 'Professional'},
            ]
        }
      },
      {
        name: 'link',
        type: 'url',
      },
      {
        name: 'tags',
        type: 'array',
        of: [
            {
                type: 'string',
            }
        ],
        options: {
            layout: 'tags',
        }
      }
    ]
}

export default project;
