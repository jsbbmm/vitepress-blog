export default [
	{ text: '首页', link: '/' },
	{ 
	  text: '前端笔记', 
	  items: [
		{
		  text: 'JavaScript',
		  link: '/前端笔记/JavaScript/第一章：课程介绍'
		},
		{
			text: 'TypeScript',
			link: '/前端笔记/TypeScript/第一章:认识TypeScript'
		  },
		{
		  text: 'VitePress',
		  link: '/前端笔记/VitePress/第一章：课程介绍'
		},
		{
		  text: 'Vue学习笔记',
		  link: '/前端笔记/Vue学习笔记/第一章：课程介绍'
		},
		{
		  text: 'React学习笔记',
		  link: '/前端笔记/React学习笔记/第一章：课程介绍'
		}
	  ],
	  activeMatch: '/前端笔记'
	},
	{
      text: 'CSS笔记',
	  items: [
		{
			text: 'CSS基础',
			link: '/CSS笔记/CSS基础/第一章：课程介绍'
		},
		{
			text: 'Flex布局',
			link: '/CSS笔记/Flex布局/第一章：课程介绍'
		},

	  ]
	},
	{ text: 'GIT系列', link: '/生活分享/index' },
	{ text: '生活分享', link: '/生活分享/index' },
	{ text: '读书笔记', link: '/读书笔记/index' },
	{ text: '算法笔记', link: '/算法笔记/index' },
	{ text: 'Python学习', link: '/Python学习/index' },
	{ text: 'AI编程', link: '/AI编程/index' },
];