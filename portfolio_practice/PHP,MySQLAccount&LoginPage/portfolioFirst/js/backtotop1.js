1 /*
             * - 변수 지정하기
             * - 문서의 높이를 계산하고 원하는 부분이 상단에서 얼마큼 떨어져 있는지 offset 값을 계산하기
             * - 스크롤과 클릭 이벤트 작성하기
             */

            var btt = document.getElementById('back-to-top');
            var docElem = document.documentElement; // 문서 자체를 가져옴
            var offset;
            var scrollPos;
            var docHeight;
            
            
            // 문서 높이 계산하기
            //docHeight = docElem.offsetHeight;

            docHeight = Math.max(docElem.scrollHeight, docElem.offsetHeight);

            if(docHeight != undefined){
                offset = docHeight / 4; // 스크롤이 1/4가 내려온 양을 offset에 값으로 저장
            }

            // 스크롤 이벤트 추가
            window.addEventListener('scroll', function() {
                scrollPos = docElem.scrollTop;
                


                btt.className = (scrollPos > offset) ? 'visible' : '';
                /* if(scrollPos > offset) {
                    btt.className = "visible";
                 } else {
                    btt.className = '';
                 }*/
                
            });


            btt.addEventListener('click', function(ev){
                ev.preventDefault(); // 링크의 본연의 기능을 막는다.
                // docElem.scrollTop = 0;
                scrollToTop();
            });

            function scrollToTop(){
                // 일정시간 마다 할 일
                // setInterval(할일, 시간);
                // 시간은 0.0015s = 15
                // 윈도우에 스크롤이 0이 아닐 때
                // window.scrollBy(0. -55);
                // 스크롤이 0이면 setInterval을 멈춰야 한다.
                var scrollInterval = setInterval(function(){
                    if(scrollPos != 0){
                        window.scrollBy(0,-55);
                    } else {
                        clearInterval(scrollInterval);
                    }
                }, 15);
            }
            // 클릭 이벤트 추가

    