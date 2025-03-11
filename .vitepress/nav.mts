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
			  link: '/前端笔记/TypeScript/第一章：课程介绍'
		  },
		  {
			text: 'Vue学习笔记',
			link: '/前端笔记/Vue学习笔记/第一章：课程介绍'
		  },
		  {
			text: 'React学习笔记',
			link: '/前端笔记/React学习笔记/第一章：课程介绍'
		  },
		]
	},
	{ 
	    text: '后端笔记', 
	    items: [
		{
		  text: 'Java笔记',
		  link: '/后端笔记/Java笔记/index'
		},
		{
			text: 'NODEJS',
			link: '/后端笔记/NODEJS/index'
		},
	  ],
	  activeMatch: '/后端笔记'
	},
	{
		text: '运维笔记',
		items: [
		   { 
			text: 'Docker笔记', 
			link: '/运维笔记/Docker笔记/index' 
		  },
		  {
			text: 'NGINX笔记',
			link: '/运维笔记/NGINX笔记/index'
		  },
		  { 
			text: 'Linux', 
			link: '/运维笔记/Linux/index' 
		  },
	      { 
			text: 'GIT', 
			link: '/运维笔记/GIT/index' 
		  },
		]
	},
	{   
		text: 'AI算法',
	    items: [
			{
				text: '算法笔记',
				link: '/AI算法/算法笔记/index'
			}
		]
	},
	{ 
		text: '项目实战',
        items: [
		  {
            text: '村娘',
		    link: '/项目实战/村娘/index'
		  },
		  {
            text: '图书共享',
		    link: '/项目实战/图书共享/index'
		  }
		]
	},
	{
		text: '生活分享',
		items: [
		  {
            text: '英语学习',
		    link: '/生活分享/英语学习/index'
		  },
		  {
            text: '口才练习',
		    link: '/生活分享/口才练习/index'
		  },
		  { 
			text: '生活感悟', 
			link: '/生活分享/生活感悟/index' 
		  },
		  { 
			text: '读书笔记', 
			link: '/生活分享/读书笔记/index' 
		  },
		]
	},
];