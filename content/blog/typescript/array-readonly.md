---
title: 'Deep dive TS - 배열 정의 방식과 readonly'
date: 2021-02-20 22:13:13
category: 'typescript'
draft: false
---

타입스크립트를 겉 핥기식이 아닌, 제대로 사용하기 위한 노력.

## 배열에 타입을 정의할 때

하단의 두 가지 방식으로 배열의 타입을 정의 할 수 있는데, 둘 중에 어느 것이 더 좋고 나쁜 것은 없다.

한 가지 차이점을 뽑자면 제네릭 타입은 아직 `readonly`를 허용하지 않기 때문에, 첫 번째 타입 정의를 주로 사용한다.

```typescript
// ...
const fruits: string[] = ['🍌', '🍓'];
const scores: Array<number> = [1, 2, 3]; // 제네릭 타입
// ...
```

## 그래서 readonly가 무엇이쥬?

함수를 통해 주어진 데이터를 변경, 업데이트 하지 않도록 하기 위해서 타입으로 보장할 수 있는 방법이다.

따라서 함수 내에서 주어진 데이터를 출력 외 변경하는 로직을 구성한다면 에러 한 방 맞고 시작할 것이다.

```typescript
// ...
function print(fruits: readonly string[]) {
  fruits.push(...) // X 에러 한 방
  console.log(fruits);
}
// ...
```

<br />

**참고**

<div style="font-size: 12px;">

- [Typescript](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)

</div>
