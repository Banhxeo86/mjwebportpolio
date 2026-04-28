/**
 * 📂 웹앱 포트폴리오 데이터 설정 파일
 * 
 * [수정 방법]
 * 1. 각 카테고리(category)와 아이콘(icon)을 설정합니다.
 * 2. items 배열 안에 새로운 프로젝트를 { } 블록으로 추가합니다.
 * 3. 아이콘 이름은 https://lucide.dev/icons 에서 찾아 입력할 수 있습니다.
 */

const projects = [
    {
        category: "Canva/Gems",
        icon: "layout",
        items: [
            {
                title: "우리반 바탕화면",
                description: "우리반과 관련된 정보를 Html로 만들어 배경화면으로 설정하는 자료입니다.",
                link: "https://banhxeo86.github.io/-/",
                icon: "school"
            }
        ]
    },
    {
        category: "Apps script",
        icon: "code-2",
        items: [
            {
                title: "구글 시트 자동화 봇",
                description: "구글 앱스 스크립트를 이용한 업무 자동화 및 데이터 시각화 툴 모음입니다.",
                link: "#",
                icon: "table"
            }
        ]
    },
    {
        category: "AI Studio",
        icon: "cpu",
        items: [
            {
                title: "프롬프트 튜닝 연구소",
                description: "AI Studio를 통해 다양한 모델의 프롬프트를 테스트하고 최적화하는 워크스페이스입니다.",
                link: "#",
                icon: "terminal"
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
                title: "새로운 프로젝트",
                description: "아이디어가 떠오르면 새로운 웹앱이 이곳에 추가됩니다.",
                link: "#",
                icon: "plus"
            }
        ]
    }
];
