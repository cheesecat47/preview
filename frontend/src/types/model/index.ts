// 공통 응답 객체 타입
export interface APIResponse<T> {
  result: 'ok' | 'fail';
  data: T;
}

// 면접 질문 리스트 타입
export interface IQuestionList {
  id: number;
  question: string;
  type: interviewType;
  keywordList: IKeywordList[] | null;
}

export type interviewType = 'common' | 'resume';

// 면접 키워드 리스트 타입
export interface IKeywordList {
  id: number;
  keyword: string;
}

// 이력서 리스트 타입
export interface IResumeList {
  name: string;
  filePath: string;
}