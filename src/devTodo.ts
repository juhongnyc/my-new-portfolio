export type DevTodoItem = {
  id: string
  text: string
  done?: boolean
}

// 개발 중에만 확인하는 개인 메모용 to-do (프로덕션 빌드에는 UI가 노출되지 않게 처리합니다.)
export const devTodosKo: DevTodoItem[] = [
  { id: 'content', text: 'content.ts의 profile / 프로젝트 텍스트를 내 실제 정보로 교체' },
  { id: 'case', text: 'Featured Case Study에 스크린샷 2–3장 + 설명(왜/결정) 추가' },
  { id: 'projects', text: 'Highlight projects 3개를 실제 프로젝트로 교체 + 결과(숫자) 보강' },
  { id: 'resume', text: 'LinkedIn / PDF Resume 링크 추가(있다면)' },
  { id: 'qa', text: '모바일/태블릿에서 간격, 줄바꿈, 버튼 터치 영역 QA' },
]

