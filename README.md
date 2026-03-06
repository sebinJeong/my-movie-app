# my-movie-app
movieMeta는 최신 영화 정보를 한눈에 확인하고 상세 정보를 탐색할 수 있는 React 기반 영화 큐레이션 웹 애플리케이션입니다.
사용 API : https://nomad-movies.nomadcoders.workers.dev/

## 미리보기
![alt text](<스크린샷 2026-03-06 오후 5.55.47.png>)
![alt text](<스크린샷 2026-03-06 오후 5.56.01.png>)
**[🔗 웹사이트 방문하기](https://sebinjeong.github.io/my-movie-app/)**


## 주요 기능
- 실시간 영화 목록: 최신 영화 데이터를 API로부터 비동기적으로 호출하여 렌더링합니다.
- 상세 정보 페이지: 영화별 포스터, 줄거리, 평점, 상영 시간 및 출연진(Credits) 정보를 제공합니다.

## 기술 스택
- Frontend: React, JavaScript (ES6+), CSS Modules.
- Routing: React Router v6.
- Build Tool: Vite.
- Deployment: GitHub Pages.

## 디렉터리 구조
```text
src/
├── components/             
│   ├── Movie.jsx           # 메인 화면의 영화 리스트
│   ├── MovieDetail.jsx     # 상세 페이지 상단 정보
│   ├── MovieCredits.jsx    # 출연진 정보 목록
│   └── SimilarMovie.jsx    # 하단 유사 영화 추천 섹션
├── css/                    
│   ├── App.module.css      # 공통 레이아웃 스타일
│   ├── Movie.module.css    # 영화 카드 및 그리드 스타일
│   └── Detail.module.css   # 상세 페이지 전용 스타일
├── routes/                 
│   ├── Home.jsx            # 메인 페이지 (API 호출 및 목록 렌더링)
│   └── Detail.jsx          # 상세 페이지 (파라미터 기반 데이터 호출)
├── App.jsx                 # 라우팅 설정 (React Router)
├── index.css               
└── main.jsx                

