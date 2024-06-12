export default [
	{ text: '首页', link: '/' },
	{ 
	  text: '前端笔记', 
	  items: [
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
	{ text: 'GIT系列', link: '/生活分享/index' },
	{ text: '生活分享', link: '/生活分享/index' },
	{ text: '读书笔记', link: '/读书笔记/index' },
	{ text: '算法笔记', link: '/算法笔记/index' },
	{ text: 'Python学习', link: '/Python学习/index' },
	{ text: 'AI编程', link: '/AI编程/index' },
];