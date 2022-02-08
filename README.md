# 원티드 프리온보딩 코스 (wanted_pre_onboarding)

## 공통

Create React App을 활용했습니다. <br/>
CSS는 Styled-components를 활용했습니다.<br/>
기능 구현에 직접적인 영향을 주는 라이브러리는 사용하지 않았습니다.<br/>

> App 실행 방법

- 터미널에서 custom-component 폴더로 이동 후 `npm ci`를 입력해 패키지를 설치합니다.
- `npm run start`를 입력해 구현한 결과물을 확인할 수 있습니다.

## Toggle

![Toggle](https://user-images.githubusercontent.com/82519180/152779675-ae308cbb-4373-4a93-acab-241c6d87bcbc.gif)

### 실행 방법

토글 스위치를 클릭하면 On/Off 됩니다.

### 구현 방법

토글 스위치 On/Off를 true/false 상태로 관리하고 토글 스위치에 onClick 이벤트로 토글 상태를 변경했습니다.

토글 스위치의 배경 색상이 바뀌는 애니메이션은 CSS의 가상 요소 ::before와 transform 속성을 사용해 구현했습니다.

## Modal

![Modal](https://user-images.githubusercontent.com/82519180/152779794-9233e08d-e52f-4d4a-949f-a9e0be60c0bd.gif)

### 실행 방법

Open Modal 버튼을 클릭하여 모달 창을 열 수 있습니다. 모달 창을 열면 X 버튼과 창 주위 검은 바탕(LightBox)을 클릭하여 모달 창을 닫을 수 있습니다. 그 외의 구역은 눌러도 닫히지 않습니다.

### 구현 방법

모달 창의 Open/Close를 true/false 상태로 관리해 X 버튼과 LightBox에 onClick 이벤트를 설정해 모달 창을 닫을 수 있게 구현했습니다. 그 외의 구역인 모달 창엔 이벤트 전파를 막는 `event.stopPropagation()` 메서드를 사용하여 클릭해도 닫히지 않게 구현했습니다.

## Tab

![Tab](https://user-images.githubusercontent.com/82519180/152779831-69cf1289-5057-4af0-b0be-50875c3c8c96.gif)

### 실행 방법

원하는 탭을 클릭하면 해당 탭에 맞는 View를 볼 수 있습니다.

### 구현 방법

tab 속성 값을 가지고 있는 객체들을 요소로 가진 배열을 정의하고 현재 인덱스 값을 나타내는 상태 변수를 선언합니다. 각 탭을 클릭하면 해당 탭의 인덱스로 바꿔주는 함수를 onClick 이벤트에 설정해 선택된 탭의 인덱스를 변경되면 그에 맞는 tab 속성 값이 렌더링 됩니다. 각 탭의 className에 선택된 요소에 'selected' 클래스를 추가하는 조건문을 사용해 선택된 탭 UI를 구현했습니다.

## Tag

![Tag](https://user-images.githubusercontent.com/82519180/152954147-374f5726-d595-42d9-b7d9-c068650a02e8.gif)

### 실행 방법

input 창에 추가하고 싶은 태그의 내용을 입력 후 `Enter`를 눌러 태그를 추가할 수 있습니다. 단, 이미 존재하는 태그는 추가되지 않습니다.

### 구현 방법

tag 문자열을 요소로 가지고 있는 배열인 tags 상태를 정의하고 map 메서드를 사용해 모든 태그를 렌더링 했습니다. input 태그의 onKeyUp 이벤트에 `Enter`를 입력받을 시 입력값이 있는지, 이미 존재하는 태그가 아닌지 확인 후 새로운 태그를 추가한 배열을 갱신하는 함수를 설정해 구현했습니다.

## AutoComplete

![AutoComplete](https://user-images.githubusercontent.com/82519180/152954110-a24cf964-6f00-472c-95aa-a31a7bedc8e9.gif)

### 실행 방법

input 창에 값을 입력하면 해당 입력 값을 포함하고 있는 자동완성 항목을 보여줍니다. 해당 항목을 클릭하면 input 값을 선택한 값으로 변경합니다.

### 구현 방법

자동완성 항목을 렌더링 하기 위해 상태로 관리합니다. input 창의 값의 유무를 상태 값으로 설정해 값이 있을 시 자동완성 항목을 렌더링 합니다. 자동완성 항목의 값을 선택했을 때 선택된 값을 input 값으로 변경하기 위해 input 값도 상태로 관리하고 onClick 이벤트에 input 값, 자동완성 항목 값을 변경하는 함수를 설정해 구현했습니다.

## ClickToEdit

![ClickToEdit](https://user-images.githubusercontent.com/82519180/152779898-712908c1-79ea-4aed-bae6-693065d1bbc9.gif)

### 실행 방법

편집하기 원하는 텍스트 상자를 클릭하면 해당 텍스트 상자가 편집할 수 있는 상태로 변경되고 편집 후 편집 구역에서 사용자가 벗어나면(blur) 편집이 완료됩니다.

### 구현 방법

이름, 나이를 상태로 관리해 변경되는 값을 렌더링 할 수 있게 구현했습니다. 편집 모드 On/Off의 여부를 상태로 관리하며 마우스 `Click` 여하에 따라 모드를 토글 하여 조건부 렌더링 했습니다. 편집을 위한 input 태그에 onChange 이벤트로 입력 값을 상태로 관리, onBlur 이벤트로 입력 값을 최종 변경 값으로 전달해 `Edit` 기능을 구현했습니다.
