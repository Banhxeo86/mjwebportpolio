/**
 * 📂 웹앱 포트폴리오 데이터 설정 파일
 * * [수정 완료]
 * - 객체 간 누락된 쉼표(,) 추가
 * - 불필요한 공백 정리
 * - 아이콘 확인(https://lucide.dev/)
 */

const projects = [
    {
        category: "Canva/Gemini/Gems",
        icon: "layout",
        items: [
            {
                title: "우리반 바탕화면",
                description: "우리반과 관련된 정보를 Html로 만들어 배경화면으로 설정하는 자료입니다.",
                link: "https://banhxeo86.github.io/-/",
                icon: "school"
            },

            {
                title: "나라 수도 게임",
                description: "대결을 하며 여러 나라의 수도를 알아볼 수 있도록 하는 교육용게.",
                link: "https://banhxeo86.github.io/capital/",
                icon: "landmark"
            },          

            
            {
                title: "10만들기",
                description: "10을 만들 수 있는 숫자를 찾아 연결하는 수학 임.",
                link: "https://banhxeo86.github.io/plus10/",
                icon: "school"
            },            

            {
                title: "뚝딱! 블록 대전",
                description: "쌓기 나무 모양을 보며 쌓기 나무 개수를 알아보는 수학 게임.",
                link: "https://banhxeo86.github.io/block1/",
                icon: "math"
            },
            
            
        ]
    },
    {
        category: "Apps script",
        icon: "code-2",
        items: [
            {
                title: "과학토론 문제 생성기",
                description: "구글 API를 활용한 제미나이 기반 과학토론 문제 생성기",
                link: "https://script.google.com/macros/s/AKfycbwWvSBoxbfo_n_rbjc6Uz9OZQEqQjga9q99mu6GlPg-brHckSE6knQ02bWE4McUij7D/exec",
                icon: "flask-conical"
            }, // 쉼표 추가
            {
                title: "일기쓰기 도우미",
                description: "학생들이 쓴 일기를 제출하여 DB로 관리하는 웹앱",
                link: "https://script.google.com/macros/s/AKfycbwp0OPKGbjGiHkZHVt6rg-ggnB0qIx2nr4W0cMunWs/dev",
                icon: "book-text"
            }, // 쉼표 추가
            {
                title: "연구회 협의록",
                description: "연구회 협의를 위해 작성한 웹앱. 내용 수정 및 작성. 작성된 내용 DB로 자동 저장",
                link: "https://script.google.com/macros/s/AKfycbzH6XJhjCrXCbXJLJHtrVjOir6hm2du0JO1lVJz-jM/dev",
                icon: "speech"
            }
        ]
    },
    {
        category: "AI Studio",
        icon: "cpu",
        items: [
            {
                title: "우리가 만드는 사회 웹앱",
                description: "개념기반 교육과정 운영을 위한 사회 교과 문제 출제 및 해설 생성 웹앱.",
                link: "https://service-69394360653.asia-south1.run.app/",
                icon: "book-open-text"
            }, // 쉼표 추가
            {
                title: "알파벳 매칭게임",
                description: "카드게임 형태로 알파벳 대/소문자를 학습할 수 있는 교육용 게임.",
                link: "https://alphamatch-alphabet-card-memory-game-69394360653.asia-south1.run.app",
                icon: "book-a"
            }, // 쉼표 추가
            {
                title: "구구단 카드배틀",
                description: "카드게임 형태로 서로 대결하며 구구단을 학습하는 교육용 게임.",
                link: "https://multiplication-battle-964240085349.asia-south1.run.app",
                icon: "copy-x"
            }, // 쉼표 추가
            {
                title: "구구단 카드배틀(교사용)",
                description: "구구단 카드배틀 방생성 및 학생관리를 할 수 있는 관리자용 웹앱.",
                link: "https://multiplication-battle-964240085349.asia-south1.run.app/teacher",
                icon: "presentation"
            }
        ]
    },
    {
        category: "Cursor/Antigravity",
        icon: "zap",
        items: [
            {
                title: "연구회 홈페이지",
                description: "Antigravity로 제작한 연구회 공식 홈페이지입니다.",
                link: "https://aionweb-xi.vercel.app/",
                icon: "home"
            }
        ]
    },
    {
        category: "기타",
        icon: "more-horizontal",
        items: [
            {
                title: "AI 토론&토의 주제 생성기",
                description: "토론 토의 주제를 생성할 수 있는 스트림릿 기반 웹앱.",
                link: "https://debate-aion.streamlit.app/",
                icon: "messages-square"
            }, // 쉼표 추가
            {
                title: "스마트 점수판",
                description: "체육 시간에 활용할 수 있는 스마트 점수판.",
                link: "https://smart-scoreboard1.streamlit.app/",
                icon: "volleyball"
            }
        ]
    }
];
