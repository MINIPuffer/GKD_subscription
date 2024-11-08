import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qqmusic',
  name: 'QQ音乐',
  groups: [
    {
      key: 1,
      name: '高品质音质弹窗',
      rules: [
        {
          activityIds: 'com.tencent.qqmusic.activity.AppStarterActivity',
          matches:
            '[id="android:id/content"] >4 FrameLayout[childCount=3] > FrameLayout[childCount=2][text=null][index=1] > ImageView[visibleToUser=true][childCount=0][index=1]',
        },
      ],
    },
  ],
});
