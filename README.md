# dockerstudy
## 기본 설정
 - 1. `npm init`으로 프젝트 초기화
 - 2. `npm i express` node를 이용한 서버를 만들기 위해 설치
 - 3. index.js 에 호출되는 페이지 생성 및 서버 기본 생성 
  ---
  ## 도커 파일 생성
  - 1. Docker 파일 만들기
  - 2. Docker 파일은 **Dockerfile** 로 네이밍 
  - 3. 시작은 `FROM baseImage`로 시작
  - 4. 노드에서는 노드에서 만들어 놓은 이미지가 존재한다 
  - 5. WORKDIR 이미지안에서 어떤 디렉토리안에서 어플리케이션을 복사해 올 것 인지
  - 6. COPY package.json package-lock.json ./
  - 7. RUN npm ci => ci를 사용하면 현재 pack-lock.json에 있는 버전으로 설치
  - 8. 소스 파일 카피 => 가장 많은 변화가 있을 것 같은 부분을 맨 밑에
  - 9. Layer 형태로 작성 하는 것이 좋다 => 변경된 레이어만 다시 만들고 변경 되지  않은 것은 캐싱처리 되어 있다
  ---
   ## 도커  빌드 및 실행
  - 1. `docker build -f Dockerfile -t fun-docker .` 
  - 2. 마지막 . 은 빌드 컨텐스이며 도커에게 필요한 파일을 알려준다 즉 명령어를 수햏하는 경로를 지정
  - 3. t 옵션은 도커 이미지에 이름을 작성해준다   
  - 4. `docker images` 만들어진 이미지를 알 수 있다
  - 5. `docker run -d  -p 8080:8080 imgName`
  - 6. -d는 dispatch를 의미 한다 터미널에게 완료시 까지 기다리지 말고 다음으로 넘어가도 된다. 
  - 7. -p 명령어로 호스트 머신과 컨테이너 포트를 입력하여 연결해 준다
  - 8. `docker ps`를 이용허면 현재 작동중인 컨테이너를 알 수 있다
  ---
  ## 도커 허브에 업로드 
  1. 레포지토리 생성
  2. 만든 이미지 이름이 레포지토리의 이름과 동일해야 한다
  3. docker tag 명령어 사용  
     => `docker tag fun-docker2:latest solleefine/dockerexample` 
  4. push하기 위해서는 로그인 필요 `docker login `명령어 이용  
     => `docker push solleefine/dockerexample:latest`