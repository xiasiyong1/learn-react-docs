import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'react-docs',
    nav: [
      { title: 'React 基础', link: '/hooks' },
      { title: 'React 进阶', link: '/react-advance' },
    ],
    sidebar: {
      '/hooks': [
        {
          title: 'hooks',
          children: [
            {
              title: 'useState',
              link: '/hooks/use-state',
            },
            { title: 'useEffect', link: '/hooks/use-effect' },
          ],
        },
        {
          title: '事件',
          children: [
            {
              title: '合成事件',
              link: '/react-basic/events/synthesis',
            },
            { title: '原生事件', link: '/react-basic/events/native' },
          ],
        },
      ],
    },
  },
});
