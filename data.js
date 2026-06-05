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
                link: "https://banhxeo86.github.io/batang/",
                icon: "school"
            },


            {
                title: "우리반 활동 안내 타이머",
                description: "활동 내용과 시간을 직접 입력하면 순서대로 자동 진행되는 맞춤형 수업 타이머.",
                link: "https://c-geumsan.my.canva.site/myclasstodo",
                icon: "alarm-clock-check"
            },          


            
            {
                title: "나라 수도 게임",
                description: "대결을 하며 여러 나라의 수도를 알아볼 수 있도록 하는 교육용게임.",
                link: "https://banhxeo86.github.io/capital/",
                icon: "landmark"
            },          


            {
                title: "스마트 좌석 배치도",
                description: "학생 좌석 배치를 쉽게 바꿀 수 있도록 도와주는 웹.",
                link: "https://banhxeo86.github.io/seat-sellect/",
                icon: "replace"
            },          

            

            {
                title: "초등상담가 Gems",
                description: "따뜻한 공감과 대화로 초등학생의 고민을 함께 나누는 Gems.",
                link: "https://gemini.google.com/gem/17JUlJxjEZKoNayxW4oRb5eGEp6VAPUJp?usp=sharing",
                icon: "message-circle"
            },      

            {
                title: "글쓰기 도우미 Gems",
                description: "초등학생 글쓰기 도우미 Gems.",
                link: "https://gemini.google.com/gem/1NoM_EoTMAxtWRLrsZCrNbQdY1eIPAGx0?usp=sharing",
                icon: "notebook-pen"
            },      

            {
                title: "공학용 계산기",
                description: "제미나이 캔버스로 쉽게 만드는 공학용 계산기.",
                link: "https://gemini.google.com/share/13270d6dc0cd",
                icon: "calculator"
            },            
            
            {
                title: "10만들기",
                description: "10을 만들 수 있는 숫자를 찾아 연결하는 수학 게임.",
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
                title: "필수연수 이수증 제출 시스템",
                description: "교직원 연말 필수연수 이수 정보를 입력하고 증빙 파일을 간편하게 제출하는 관리 도구.",
                link: "https://script.google.com/macros/s/AKfycbx3fN9_tLRmX9emn14owoGehSVbQlwUI-_Ped9B5GgoPZbLLTE8NUVIeu3vd9zJSGo/exec",
                icon: "file-text"
            },


            
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
            },


            {
                title: "현장체험학습 사전 안내 자료",
                description: "현장체험학습 일정, 준비물, 안전 수칙 및 장소 정보를 한눈에 확인할 수 있는 디지털 안내서.",
                link: "https://banhxeo86.github.io/fieldtrip0623/",
                icon: "bus"
            },
     
            
{
  title: "자기장 탐구실",
  description: "초등 과학 교육과정 기반, 자석의 성질과 자기장을 힘 지향 그래프 알고리즘으로 시뮬레이션하는 인터랙티브 웹앱.",
  link: "https://Banhxeo86.github.io/magnetic-field-lab/",
  icon: "magnet"
},

            
             {
                title: "우리가 만드는 사회 웹앱",
                description: "개념기반 교육과정 운영을 위한 사회 교과 문제 출제 및 해설 생성 웹앱.",
                link: "https://service-69394360653.asia-south1.run.app/",
                icon: "book-open-text"
            },


             {
                title: "실시간 OX 퀴즈(학생용)",
                description: "정해진 주제에 대해 실시간으로 OX 반응을 보여주는 웹앱",
                link: "https://interactive-ox-quiz.onrender.com/student",
                icon: "users"
            },


             {
                title: "실시간 OX 퀴즈(교사용)",
                description: "정해진 주제에 대해 실시간으로 OX 반응을 보여주는 웹앱",
                link: "https://interactive-ox-quiz.onrender.com/teacher",
                icon: "users"
            },
            
            
             {
                title: "다했어요 체크리스",
                description: "학생별 과제 활동 여부를 한 눈에 확인하고 관리하는 학급형 체크리스트 웹앱.",
                link: "https://purplewinterblue.github.io/checklist/",
                icon: "square-check-big"
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
