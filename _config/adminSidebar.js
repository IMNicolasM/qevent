import pages from 'src/config/pages' // Get Pages from config

//Blog
export default [
  {
    title: 'ievent.cms.sidebar.adminGroup',
    icon: 'fa-light fa-calendar',
    children: [
      pages.qevent.events,
      pages.qevent.categories,
    ]
  },
]
