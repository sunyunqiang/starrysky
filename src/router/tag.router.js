import Tag from '@/components/Tag'
import TagSettings from '@/pages/tag/TagSettings'
import TagQuery from '@/pages/tag/TagQuery'

export default [
	{
		path: '/tag',
		name: 'Tag',
		component: Tag,
		children: [
			{
				path:'settings',
				name:'TagSettings',
				template: TagSettings
			},
			{
				path:'query',
				name:'TagQuery',
				template: TagQuery
			},
			
		]
	}
]