module.exports = {
  preset: 'ts-jest', //trypeScript파일은 ts-jest에서 CommonJS구문으로 변환
  testEnvironment: 'jsdom', //테스트 환경
  testMatch: ['**/*.spec.[jt]s?(x)', '**/*.test.[jt]s?(x)'], //테스트 파일 위치
};
