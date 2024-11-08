import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dragon.read',
  name: '番茄免费小说',
  groups: [
    {
      key: 0,
      name: '自动领听书时长',
      rules: [
        {
          key: 0,
          quickFind: true,
          activityIds:
            'com.dragon.read.component.audio.impl.ui.page.AudioPlayActivity',
          matches: '[id="com.dragon.read:id/e22"]',
          snapshotUrls: 'https://i.gkd.li/snapshot/1730988480401',
        },
      ],
    },
    {
      key: 1,
      name: '看广告领听书时常',
      activityIds: 'com.ss.android.excitingvideo.ExcitingVideoActivity',
      rules: [
        {
          key: 0,
          matches: '[text="开启声音"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/snapshot/1730952094725',
        },
        {
          key: 1,
          matches:
            '[text="领取成功"] +2 @com.lynx.tasm.behavior.ui.LynxFlattenUI[clickable=true]',
          snapshotUrls: 'https://i.gkd.li/snapshot/1730985938046',
        },
      ],
    },
  ],
});
