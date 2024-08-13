export const portfolioData = {
    id: "portfolio",
    title: "포트폴리오",
    items: [
        {
            id: "portfolio",
            title: "포트폴리오",
            content: `
        <h2>포트폴리오</h2>
        <p>안녕하세요, 저는 iOS 애플리케이션 개발자 이승기입니다. 다양한 프로젝트에 참여했습니다.</p>
        <section>
            <h2>경력</h2>
            <ul>
                <li>네오플러스: 2019.07 - 2020.06</li>
                <li>B2 (프리랜서): 2020.09 - 2020.11</li>
                <li>ICB: 2021.01 - 2022.10</li>
                <li>MDS: 2023.12 - 2024.02</li>
            </ul>
        </section>
        <section>
            <h2>프로젝트</h2>
            <div class="tab">
                <button class="tablinks" onclick="openTab(event, 'companyProjects')" id="defaultOpen">회사에서 한 프로젝트</button>
                <button class="tablinks" onclick="openTab(event, 'personalProjects')">개인 프로젝트</button>
                <button class="tablinks" onclick="openTab(event, 'externalActivities')">대외활동</button>
            </div>
            <div id="companyProjects" class="tabcontent">
                <h3>네오플러스</h3>
                <h3>사내인트라넷 개발</h3>
                <p>휴가정보 및 사내 연락처 조회 가능. RESTful API를 이용한 서버 API 통신 개발.</p>
                <p><strong>사용 기술:</strong> Swift, SwiftyJSON, Alamofire, KeychainSwift, SnapKit, FSCalendar</p>
                <div class="image-gallery">
                    <img src="images/네오인트라넷-1.jpg" alt="사내인트라넷 프로젝트" onclick="openModal(this)">
                    <img src="images/네오인트라넷-2.jpg" alt="사내인트라넷 프로젝트" onclick="openModal(this)">
                    <img src="images/네오인트라넷-3.jpg" alt="사내인트라넷 프로젝트" onclick="openModal(this)">
                    <img src="images/네오인트라넷-4.jpg" alt="사내인트라넷 프로젝트" onclick="openModal(this)">
                </div>
                <h3>지아이티 - 글로벌 서비스 앱 개발</h3>
                <p>멕시코, 러시아, 인도 서비스 앱 개발, 언어팩 적용 및 화면 변경, 유지보수 작업.</p>
                <p><strong>사용 기술:</strong> Objective-C, Swift, Masonry, Firebase, Google Maps, FMDB</p>
                <h3>ICB</h3>
                <h3>GOS 앱</h3>
                <p>소스 리팩토링, 기능 추가 및 개선, 소스 이슈대응 등을 포함한 유지보수 작업.</p>
                <p><strong>사용 기술:</strong> Objective-C, Swift</p>
                <p><strong>앱스토어 링크:</strong> <a href="https://apps.apple.com/kr/app/gos/id1509217154">GOS</a></p>
                <div class="image-gallery">
                    <img src="images/GOS1.PNG" alt="ICB" onclick="openModal(this)">
                    <img src="images/GOS2.PNG" alt="ICB" onclick="openModal(this)">
                </div>
                <h3>Qrick 앱</h3>
                <p>소스 리팩토링, 기능 추가 및 개선, 소스 이슈대응 등을 포함한 유지보수 작업.</p>
                <p><strong>사용 기술:</strong> Objective-C, Swift</p>
                <p><strong>앱스토어 링크:</strong> <a href="https://apps.apple.com/us/app/qrick/id1331822769">Qrick</a></p>
                <div class="image-gallery">
                    <img src="images/Qrick1.PNG" alt="ICB" onclick="openModal(this)">
                    <img src="images/Qrick2.PNG" alt="ICB" onclick="openModal(this)">
                    <img src="images/Qrick3.PNG" alt="ICB" onclick="openModal(this)">
                    <img src="images/Qrick4.PNG" alt="ICB" onclick="openModal(this)">
                </div>
                <h3>MDS</h3>
                <h3>파킹프렌즈 앱</h3>
                <p>소스 리팩토링, 유지보수, 이슈 대응, 기능 추가 및 개선 작업을 진행했습니다. 라이브러리 마이그레이션 작업도 포함되었습니다.</p>
                <p><strong>사용 기술:</strong> Swift, RxSwift</p>
                <p><strong>기간:</strong> 2023.01 ~ 2024.02</p>
                <p><strong>앱스토어 링크:</strong> <a href="https://apps.apple.com/us/app/%ED%8C%8C%ED%82%B9%ED%94%84%EB%A0%8C%EC%A6%88/id1437488741">파킹프렌즈</a></p>
                <div class="image-gallery">
                    <img src="images/파킹프렌즈1.PNG" alt="MDS" onclick="openModal(this)">
                    <img src="images/파킹프렌즈2.PNG" alt="MDS" onclick="openModal(this)">
                </div>
                <h3>파킹프렌즈 파트너 앱</h3>
                <p>소스 리팩토링, 유지보수, 이슈 대응, 기능 추가 및 개선 작업을 진행했습니다.</p>
                <p><strong>사용 기술:</strong> React, Swift</p>
                <p><strong>기간:</strong> 2021.06 ~ 2024.02</p>
                <p><strong>앱스토어 링크:</strong> <a href="https://apps.apple.com/us/app/%ED%8C%8C%ED%82%B9%ED%94%84%EB%A0%8C%EC%A6%88-%ED%8C%8C%ED%8A%B8%EB%84%88/id1456976566">파킹프렌즈 파트너</a></p>
                <div class="image-gallery">
                    <img src="images/파킹프렌즈파트너1.PNG" alt="MDS" onclick="openModal(this)">
                    <img src="images/파킹프렌즈파트너2.PNG" alt="MDS" onclick="openModal(this)">
                </div>
                <h3>B2 - 강아샘통 앱</h3>
                <p>앱 소스 리팩토링 및 기능 개선 작업을 진행.</p>
                <p><strong>앱스토어 링크:</strong> <a href="https://apps.apple.com/kr/app/%EA%B0%95%EC%95%84%EC%83%98%ED%86%B5/id1295938279">강아샘통</a></p>
                <div class="image-gallery"></div>
            </div>
            <div id="personalProjects" class="tabcontent">
                <h3>We</h3>
                <p>커플 D-day, 일정관리 앱. RxSwift와 MVVM 패턴을 활용하여 개발하였습니다.</p>
                <p><strong>사용 기술:</strong> RxSwift, MVVM</p>
                <div class="image-gallery"></div>
                <h3>Nurse Timer</h3>
                <p>동시에 여러개의 타이머를 등록할 수 있는 watchOS 앱. & 근무 일정 관리 및 타이머를 관리하는 iOS 앱.</p>
                <p><strong>사용 기술:</strong> SwiftUI, MVVM</p>
                <p><strong>앱스토어 링크:</strong> <a href="https://apps.apple.com/kr/app/nursetimer/id6477325168">Nurse Timer</a></p>
                <div class="image-gallery">
                    <img src="images/NurseTimer-아이폰1.PNG" alt="Nurse Timer" onclick="openModal(this)">
                    <img src="images/NurseTimer-아이폰2.PNG" alt="Nurse Timer" onclick="openModal(this)">
                    <img src="images/NurseTimer-아이폰3.PNG" alt="Nurse Timer" onclick="openModal(this)">
                    <img src="images/NurseTimer-아이폰4.PNG" alt="Nurse Timer" onclick="openModal(this)">
                    <img src="images/NurseTimer-아이폰5.PNG" alt="Nurse Timer" onclick="openModal(this)">
                    <img src="images/NurseTimer-아이폰6.PNG" alt="Nurse Timer" onclick="openModal(this)">
                    <img src="images/NurseTimer-애플워치1.jpg" alt="Nurse Timer" onclick="openModal(this)">
                    <img src="images/NurseTimer-애플워치2.jpg" alt="Nurse Timer" onclick="openModal(this)">
                    <img src="images/NurseTimer-애플워치3.jpg" alt="Nurse Timer" onclick="openModal(this)">
                </div>
            </div>
            <div id="externalActivities" class="tabcontent">
                <h3>협업하는 프론티어</h3>
                <p>지역 내 문제를 해결하기 위한 아이디어 및 개발 공모전</p>
                <p>휴대폰 어플(iOS,AOS)과 아두이노 블루투스를 이용하여 연동 차량 번호판 글자를 인식하여 주차장 자리를 예약하는 플랫폼 개발</p>
                <p><strong>기간:</strong> 2018.03</p>
                <p><strong>사용기술:</strong> Swfit,Java,Core Bluetooth</p>
                <h3>한이음 공모전 참여</h3>
                <p>AWS 클라우드 서비스를 이용하여 제품 개발.</p>
                <p><strong>기간:</strong> 2018.03 - 2018.12</p>
                <p><strong>사용 기술:</strong> AWS EC2, S3, Polly, SDK, DynamoDB, Swift, Alamofire</p>
                <p><strong>시연 영상 링크:</strong> <a href="https://www.youtube.com/watch?v=cranY6sji4g">시연 영상 보기</a></p>
                <div class="image-gallery">
                    <img src="images/한이음1.PNG" alt="한이음" onclick="openModal(this)">
                    <img src="images/한이음2.PNG" alt="한이음" onclick="openModal(this)">
                </div>
                <h3>Linxtelecom 외주 프로젝트</h3>
                <p>기존 custom QR 코드 앱 유지보수 및 UI 개선 작업.</p>
                <p><strong>기간:</strong> 2018.07 - 2018.10</p>
                <p><strong>사용 기술:</strong> Objective-C</p>
                <p><strong>앱스토어 링크:</strong> <a href="https://itunes.apple.com/kr/app/pufscanner/id1084263211?mt=8">Pufscanner</a></p>
                <div class="image-gallery">
                    <img src="images/퍼프스케너-1.jpg" alt="Linxtelecom" onclick="openModal(this)">
                    <img src="images/퍼프스케너-2.jpg" alt="Linxtelecom" onclick="openModal(this)">
                </div>
                <h3>정보처리기사 취득</h3>
                <p><strong>기간:</strong> 2018.08</p>
                <p><strong>발급처:</strong> 한국산업인력공단</p>
                <h3>스마트윈도우</h3>
                <p>아두이노와 iOS앱을 활용한 자동창문. iOS 앱과 아두이노 연동 개발을 진행하였습니다.</p>
                <p><strong>기간:</strong> 2020.12</p>
                <p><strong>사용 기술:</strong> Swift, Core Bluetooth</p>
                <p><strong>시연 영상:</strong> <a href="video/smartwindowapp.mp4" target="_blank">시연 영상 보기</a></p>
            </div>
        </section>
    `
        }
    ]
}