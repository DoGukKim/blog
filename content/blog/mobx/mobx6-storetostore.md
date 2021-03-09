---
title: '갓빅스 시리즈 - MobX Store에서 다른 Store 참조'
date: 2021-02-09 23:42:29
category: 'mobx'
draft: false
---

MobX는 자유도가 무척 높아 이 글이 절대적인 정답이 아니며, 작성한 방식 외에 추천하는 방식이 있으면 댓글로 알려주세요!

이 글은 MobX6와 class, typescript가 적용된 형태를 기준으로 작성되었습니다!

<br />

### MobX 스토어 to 스토어

갓빅스를 통해 스토어 디자인 구축을 하다보면, 스토어 to 스토어가 필요한 상황이 발생한다.

참조할 스토어를 임포트 후, `constructor`에 하나의 상태에 할당해 준다. 만약 타입스크립트를 사용한다면 하단과 같이 `typeof`를 통해 타입을 작성해 준다.

<br />

`src/store/storeOne.ts`

```ts
import { makeAutoObservable } from 'mobx';

// stores
import StoreTwo from 'stores/Suggestion';

class StoreOne {
  storeTwo: typeof SuggestionStore;

  constructor() {
    makeAutoObservable(this);
    this.storeTwo = StoreTwo;
  }

  increase = () => {
    this.storeTwo.count++;
  }
  decrease = () => {
    this.storeTwo.count--;
  }
}

const oneStore = new StoreOne();
export default oneStore;
```

간략하고 깔끔하게 설명 이즈 던.

<br />

<p style="font-size: 13px; font-style: italic; text-align: center">피드백은 언제나 부탁드려요!</p>
