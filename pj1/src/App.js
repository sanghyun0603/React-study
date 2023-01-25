import './App.css';
import { useState } from 'react';
import { Routes, Route, useNavigate, Outlet} from 'react-router-dom';
import Detail from './pages/Detail.js';
import {useStore, testStore} from './store.js';
// document.querySelector('h4').innerHTML = post; 원래는 이렇게
  // js중괄호 문법사용. 데이터바인딩
  // 어디서든 사용가능
  //camelCase 사용
//리턴안에는 병렬로 태그 2개 이상 기입금지 --> 뷰랑 똑같음.
// 자료를 보관할때 사용하는 state
//useState 사용 -> let [a,b]
// a => 자료 나옴
// b => state 변경 도와주는 함수이다.
// 자바스크립트 Destructuring 문법
// let [a, c] = [1, 2]; a =1 b = 2 다.
// 일반변수는 갑자기 변경되면 html 자동으로 반영이 안된다.
// state는 html은 바로 재렌더링된다.
// 로고글자 같은건 굳이 스테이트로 만들필요가 없다. 자주 바뀌는것이 아니기 때문에
//5강
//waring은 개무시 - 하지만 안쓰는건 없애는게 맞다.
//좋아요 버튼 만들기 -> 숫자 state로 만들면 좋을거 같아.
// onClick 쓰는 법 함수를 별도로 만들어 사용해라.
// state는 등호로 변경하면 안된다.
// state 제 1 원칙 : state변경용 함수 사용해라 -> 재렌더링이 일어남.

//6강
//array, object state 변경하는법
//일부분만 바꾸는식으로 해야 효율적.
//원본은 보존하는게 좋다. copy사용
//state 변경함수 특징 - 기존 == 신규의 경우 변경 안해줌
//array/object 특징 -> 변수엔 화살표만 저장됨.
//array를 수정했지 화살표는 변경안됨-> state에서 인식 변화를 인식못함.
//변수 & 변수2 화살표가 같으면 변수1 == 변수2 비교해도 true 나옴.
//state가 array/object면 독립적 카피본을 만들어서 수정해야 함. deep copy

//7강 많은 div들을 한 단어로 줄이고 싶으면
//상세페이지(실은 모달창)개발
//덩어리들을 하나로 축약 -> 컴포넌트 문법.
//1. function 만들고 2. retrun()안에 html담기 3.<함수명><함수명> 쓰기
//매우 유용하다. 
//참고 1 의미없는 div대신 <></>사용가능
//참고 2 <Modal/>도 가능
//언제쓰면 좋을까? 3가지 경우가 있다.
//1. 반복적인 html 축약할 때
//2. 큰 페이지들
//3. 자주변경되는 것들
//모든걸 컴포넌트로 만들려하지마.

//8강 동적인 UI 만드는 step 3 탭 모달창 햄버거메뉴 경고문...
//1.html css로 미리 디자인 완성하기
//2.UI 현재상태를 state로 저장
//3. state에 따라 UI가 어떻게 보일지 작성.
//첫번째는 저번시간에 함.
//두번째로 state false로저장
//세번째 false면 숨기기 true면 보이기.
//html상이라 if문 못쓴다. 삼항연산자사용해야함!
//state는 스위치역할.

//9강 map : 많은 div들을 반복문으로 줄이고 싶은 충동이 들 때
// [1,2,3].map(function(){}) 
//1. array 자료 갯수만큼 함수안의 코드 실행해줌 
//2. 함수의 파라미터는 array안에 있던 자료임.
//3. retrun에 뭐 적으면 array로 담아줌.
//보통은 for문 쓰는데 리액트는 for반복분 사용불가능. v-for 그립다...
//map 가져다쓰면 된다.
//반복문쓸땐 key값 잊지말기!

//10강 props 부모가->자식준다. 
//props를 사용하면 부모컴포넌트에서 자식컴포넌트로 전달가능 이러면 자식이 부모state사용가능
//1.<자식컴포넌트 작명={state이름}>
//2.props 파라미터 등록후 props.작명 사용
//컴포넌트 많아지면 props 쓰는게 귀찮아짐.
//Q. 다양한 색의 모달창이 필요하다.

//11강 props를 응용한 상세페이지 만들기
//state 하나 더 만들어서 각각 다른제목에 i를 선택타이틀 state에 저장해서 props후 Idx로사용

//12강 input 1: 사용자가 입력한 글 다루기
// 리액트에서는 반드시 태그 끝내야함.
// type 종류가있다. text range date number
// select, textarea
// 뭔가 입력시 코드실행하고 싶으면 onChange
// 이벤트핸들러 공부하기.
// 값가져오고 싶을때 -> v-model, event 비슷
// event.target.value 식
// span 눌러도 모달창이 뜨고잇음 현재 이벤트버블링때문에
// stopPropagation() 버블링막기
// state변경함수는 늦게처리됨 그래서 다음줄이 먼저 실행됨
function App() {

  let [title, setTitle] = useState(['남자 코트 추천','강남 우동 맛집', '파이썬독학']);
  //let [logo, setLogo] = useState('ReactBlog');//비추천적인방법. 변경이 됐을때 바로 반영할필요가 있을때에만 써라
  let [likes, setLikes] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [chooseTitle, setChooseTitle] = useState(0);
  let [inputData, setInputData] = useState('');
  let navigate = useNavigate();
  const { bears, increasePopulation, removeAllBears } = useStore(state => state)
  const { cart, increaseCount} = testStore(state => state)
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ { color : 'red' , fontSize : '30px'} }>ReactBlog</h4>
        <p>
          <button onClick={()=>{ navigate('/') }}>홈</button>
          <button onClick={()=>{ navigate('/detail') }}>디테일</button>
        </p>
      </div>
      <Routes>
        <Route path='/' element={
          <div>
            <button onClick={()=>{
            let copy =[...title];
            copy.sort();
            setTitle(copy);
            }}>가나다순정렬</button>
            <h1>{bears} around here ...</h1>
            <button onClick={()=>{increasePopulation()}}>one up</button>
            <button onClick={()=>{removeAllBears()}}>remove all</button>
            {
              cart.map((data,i)=>{
                return (
                  <div key = {i}>
                    <h2>{data.name}</h2>
                    <h3>{data.count}
                      <button onClick={()=>{increaseCount(data.id)}}>
                        +
                      </button>
                    </h3>
                  </div>
                )
              })
            }
          {
            title.map(function(titlez, i){
              return (
                <div className ="list" key={i}>
                  <h4 onClick={()=>{
                    setChooseTitle(i); 
                    setModal(!modal);
                    }}>{ titlez }
                  <span onClick={(e)=>{
                    e.stopPropagation();
                    let copy = [...likes];
                    copy[i] += 1;
                    setLikes(copy);
                  }}>💖
                  </span> { likes[i] } 
                  </h4>
                  <p>2월 17일 발행</p>
                  <button onClick={()=>{
                    let copy = [...title];
                    let copyLikes = [...likes];
                    copy.splice(i,1);
                    copyLikes.splice(i,1);
                    setLikes(copyLikes);
                    setTitle(copy);
                  }}>삭제</button>
                </div>
              )
            })
          }
  
          <input type="text" onChange={(e)=>{ setInputData(e.target.value);
          }}></input>
          <button onClick={()=>{
            if (inputData === '') {
              alert('내용입력해라')
            } else
            {
              let copy = [...title];
              let copyLikes = [...likes];
              copy.unshift(inputData);
              copyLikes.unshift(0);
              setLikes(copyLikes);
              setTitle(copy);
            }
            
          }}>글작성</button>
  
            {
              modal === true ? <Modal setTitle = {setTitle} chooseTitle = {chooseTitle} title = {title}></Modal> : null
            }
            </div>
        }/>
      <Route path='/detail' element={<Detail/>}/>

      </Routes>

      
    </div>
  );
}

//let Modal = () => {
  //return () }도 가능

function Modal(props){

  let array = ['여자 코트 추천', '대전 우동 맛집', 'C++독학']
  return (
    <div className="modal">
          <h4>{props.title[props.chooseTitle]}</h4>
          <p>날짜</p>
          <p>상세내용</p>
          <button onClick={()=>{
            let copy = [...props.title];
            copy[props.chooseTitle] = array[props.chooseTitle];
            props.setTitle(copy);
          }}>글수정</button>
    </div>
  )
}

export default App;




 {/* <div className ="list">
        <h4>{ title[0] } <span onClick={()=>{
          let copy = [...likes];
          copy[0] += 1;
          setLikes(copy);
        }}>💖</span> { likes[0] } </h4>
        <p>2월 17일 발행 <button onClick={()=>{
          let copy = [...title];
          copy[0] = '여자 코트 추천';
          setTitle(copy);
          }}>변경</button></p>
      </div>
      <div className ="list">
        <h4>{ title[1] }
        <span onClick={()=>{
          let copy = [...likes];
          copy[1] += 1;
          setLikes(copy);
        }}>💖</span> { likes[1] } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className ="list">
        <h4 onClick={()=>{
          let copy = !modal;
          // {
          //   copy === true ? copy = false : copy = true
          // }
          setModal(copy);
        }}>{ title[2] }
        <span onClick={()=>{
          let copy = [...likes];
          copy[2] += 1;
          setLikes(copy);
        }}>💖</span> { likes[2] } </h4>
        <p>2월 17일 발행</p>
      </div> */}