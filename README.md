# 아키드로우 사전과제

- url
  https://archidraw-test-nu.vercel.app/

## 기술스택

- typescript
- Next.js
- msw
  - 모킹데이터를 develop mode에서 비동기 데이터로 사용할 수 있는 라이브러리
- styled-component
  - CSS-in-JS
- redux
  - 상태 관리
- next-redux-wrapper
  - SSR상황을 필요시 고려하여 사용
- redux-thunk
  - redux 비동기 통신
- file-saver
  - file save
- jszip
  - zip file

## 컴포넌트

- Gallery
  - GalleryInfo
  - ItemList
    - Item
      - ItemCheckBOx
      - ItemImage
      - ItemOption
  - GalleryModal
    - ModalTop
      - ModalTopMenu
    - ModalArrow
    - ModalContent
