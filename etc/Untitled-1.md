정처기 요약 공부

IDE(통합 개발 환경)

- coding - 프언어로 컴프 만드는 기능

- 컴파일 - 언어 프롬 -> 목적 프롬 번역 후 실행 가능한 형태로 변환

- 디버깅 : 버그를 찾아 수정

- 배포 : 사용자에게 소웨 전달

빌드 자동화 도구

- Ant : 자바 프로젝트의 공식적인 빌드 도구

- Maven : ant 대안

- jenkins : java 기반의 오픈 소스, 가장 많이 사용됨

- gradle : groovy 기반으로 한 오픈 소스 형태의 자동화 도구, 안드에서 사용

sw 패키징

- 모듈별로 생성 실행 파일 묶어 배포용 설치 파일만드는것

- 사용자 중심진행

고려사항

- 내부 콘텐츠 암호화 및 보안 고려

- 다른 여러 콘텐츠 및 단말기 간 DRM 연동 고려

DRM(디지털 저작권 관리)

- 클리어링 하우스 : 저작권 사용 권한, 라이선스 발급, 사용량에 따른 결제 관리 등을 하는곳

- 콘텐츠 제공자 : 저작권자

- 패키저 : 메타 데이터와 함계 배포형태로 묶어 암호화하는 프로

- 콘텐츠 분배자 : 유통하는 곳 이나 사람

- drm 컨트롤러 : 배포된 콘텐츠의 이용권한 통제

- 보안 컨테이너 : 원본을 안전하게 유통하기 위한 전자적 보안장치

소프트웨어 설치 메뉴얼

- 사용자 기준 작성

- 개요, 설치 관련 파일, 아이콘 ,삭제, 관련 추가정보

메뉴얼 작성 순서

- 지침 정의 -> 메뉴얼 구성 요소 정의 -> 구성 요소별 내용 작성 -> 검토

형상 관리(SCM)

- 개발 과정에서 변경 사항을 관리하기 위해 개발된 일련의 활동

- 전체비용을 줄이고, 여러 방해 요인이 최소화되도록 보증하는 것이 목적

- 관리 항목 : 코드, 계획, 분석서, 설계서, Tc, program

- 형상 관리 도구 : git, cvs, subversion

형상 관리 기능

- 형상 식별 : 이름과 관리 번호 부여하고, 계층 구조로 구분하여 수정 및 추적이 용이

- 버전 제어 : 업그레이드나 유지 보수 과정에서 생성된 다른 버전의 형상 항목을 관리하고, 이를 위해 특정 절차와 도구를 결합시키는 작업

- 형상 통제: 식별된 형상 항목에 대한 변경 요구를 검토하여 base line이 잘 반영될 수 있도록 조정

- 형상 감사 : base line의 무결성을 평가하기 위해 확인, 검증, 검열 과정을 통해 공식적으로 승인하는 작업

- 형상 기록: 식별, 통제 ,감사 작업의 결과를 기록,관리하고 보고서를 작성하는 작업.

파레토 법칙 - 테스트에서 오류의 80%는 전체 모듈의 20% 내에서 발견된다는 법칙

결함은 발생한 모듈에서 계속 추가로 발생할 가능성이 높다.

화이트박스 테스트

- 모듈의 원시 코드를 오픈시킨 상태에서 원시 코드의 논리적인 모든 경로를 테스트하여 tc 설계

- 모든 문장을 한 번 이상 실행

- 제어 구조에 따라 선택, 반복 등의 분기점 부분들을수행함

블랙박스