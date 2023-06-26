# Cryptocurrency Exchanges

암호화폐 거래소의 목록과 해당 거래소마다 지원하는 거래쌍을 보여주는 웹서비스입니다.

[배포한 사이트](https://pmjuu-cryptocurrency-exchanges.vercel.app/)

<br>

# Table of Contents

- [Issues](#issues)
- [Tech stack](#tech-stack)
- [Features](#features)
- [Implementation](#implementation)

<br>

# Issues

## Next.js 적용하기

이번 프로젝트를 진행하면서 `Next.js`를 처음 사용하였습니다. 지금까지는 주로 Client Side Rendering 위주로 작업해왔는데, 이번 프로젝트를 통해서 렌더링 방법, 특히 Server Side Rendering과 Static Site Generation에 대해 좀 더 알아보게 되었습니다.

[노션 정리 자료](https://www.notion.so/Front-end-1c0fbc557aab4864bff6784a74055f76#96c4ac047a33443eb8938a773f66ce72)

렌더링 방법에는 3가지가 있습니다.

- Pre-Rendering
  1. **Server-Side Rendering**
     - 매 요청마다 HTML을 생성합니다.
  2. **Static Site Generation**
     - 빌드 타임에 HTML을 생성하고, 매 요청마다 HTML을 재사용합니다.

3. **Client-Side Rendering.**

어떤 상황에서 무엇을 사용할지 고민하는 시간이 필요했습니다.

<br>

### Static Site Generation vs Server-side Rendering 어떤 방법으로 데이터를 불러올까?

- Static Site Generation
  - 사용자 요청 전에 페이지를 pre-render 할 수 있을 때 사용하면 효율적입니다.
- Server-side Rendering
  - 사용자 요청 전에 페이지를 pre-render 할 수 없거나, 자주 바뀌는 데이터를 페이지에서 보여줘야 하는 경우에 적합합니다.

### Static Site Generation의 장점

- 검색 엔진 최적화
  - 검색 엔진 크롤러가 정적 HTML 콘텐츠를 쉽게 분석하고 인덱싱할 수 있습니다.
- 서버 부하 감소
  - SSG를 사용하면 서버는 빌드 프로세스 중에 정적 페이지를 생성하므로 런타임 중 서버 부하가 줄어듭니다.

따라서, 거래소 목록 데이터를 불러올 때는 `getStaticProps()`를 사용했습니다.

Pre-rendering을 통해 미리 HTML 페이지를 생성하여 성능을 향상시킬 수 있었습니다. 이는 페이지 로딩 시간을 단축시키고 SEO 친화적인 사용자 경험을 제공합니다.

<br>

# Tech stack

- React
- Next.js
- Redux (Redux/toolkit)
- axios
- Jest

## Redux를 사용한 이유

- Redux는 엄격한 단방향 데이터 흐름을 강조하여 상태 변경을 쉽게 이해할 수 있도록 합니다.
- 액션은 디스패치를 통해 상태를 예측 가능한 방식으로 업데이트하는 리듀서로 전달됩니다. 이 디자인 패턴은 복잡한 상태 상호작용을 다룰 때 특히 유용하며, 관심사를 명확히 분리하여 상태 변경을 추적하고 디버깅하기 쉽게 만들어줍니다.

## axios를 사용한 이유

axios란 브라우저와 node.js에서 사용할 수 있는 Promise 기반 HTTP 클라이언트 라이브러리입니다.

- 편의를 위해 지원하는 모든 요청 메소드의 명령어를 제공합니다.
- response timeout (fetch에는 없는 기능) 처리 방법이 존재합니다.
- Promise 기반으로 만들어졌기 때문에 데이터 다루기 편리합니다.
- 브라우저 호환성이 뛰어납니다.

<br>

# Features

- 사이트에 점속하면 거래소 100개에 관한 정보가 나타납니다.
- ASC/DESC 버튼으로 거래량 기준 오름차순/내림차순 정렬이 가능합니다.
- 거래소 목록에서 row를 클릭하면 해당 거래소에서 지원하는 거래쌍의 목록이 모달창에서 보입니다.
- 모달창의 X 버튼이나 모달 바깥쪽을 클릭하면 모달창은 사라집니다.

<br>

# Implementation

```
git clone https://github.com/pmjuu/cryptocurrency-exchanges.git
```

개발모드에서 실행

```
npm run dev
```
