import { useParams } from "react-router-dom";
import styled from "styled-components";
import {useEffect, useState } from "react";
import { Nav} from 'react-bootstrap';
import './detail.css';
//styled-components 사용법
//장점 다른 js파일들을 간섭하지 않는다.
//백팁안에 내용 집어넣어라.
//오랜지색 버튼이 필요하면? props문법써라.
// ${ props => props.bg}; 라이브러리 자체 문법임. 외워
// 기존 스타일 복사가능 let ~~ = styled.button(YellowBtn)
// 단점1. JS파일 매우 복잡해진다.
// 단점2. 중복스타일은 컴포넌트간 import 할텐데 CSS와 다를 바가 없다.
// 단점3. 협업시 CSS 담당의 숙련도 이슈
let YellowBtn = styled.button`
  background : ${ props => props.bg}; 
  color : ${ props => props.bg === 'blue' ? 'white' : 'black'};
  padding : 10px;
`
//까만색박스만들자

//props.shoes[현재url에입력한숫자]를 넣고싶다.
//useParams를써라.

//Lifecycle과 useEffect
//mount, update시 코드 실행해주는 useEffect
//useEffect 바깥에 넣어도 똑같은데 ?????????
// useEffect 쓰는 이유 -> 실행시점이 약간 다르다. html 렌더링 후에 동작한다.
// for 만번정도 돌린다고 생각.. 오래 걸리는 코드들은 useEffect에 넣는게 좋다.
// 어려운 연산이나 서버에서 데이터가져오는 작업들을 useEfffect에서 해라.
// 타이머 장착하는것도 가능
// 왜 이름이 Effect? -> Side Effect : 함수의 핵심기능과 상관없는 부가 기능
// setTimeout( () => { 실행할코드 }, 1000)

//Lifecycle과 useEffect2
//숙제는 쉬웠음. settimeout으로 스테이트 건드리기
//useEffect , [] 추가하는 이유는 뭔가?
// 디펜던시라고 한다. 실행조건 넣을 수 잇는 곳
// [] 없을경우는 mount, update시 실행됨 [안에 뭐 추가하면] 그 해당 state가 변할때 실행됨
//애니메이션 만들고 싶으면 
//1. 애니메이션 동작 전 스타일을 담을 className 만들기 
//2. 애니메이션 동작 후 스타일을 담을 className 만들기 
//3. transition 속성도 추가
//4. 원할 때 2번 탈부착
function Detail(props){
  let [box, setBox] = useState(true);
  let [count, setCount] = useState(0);
  let [num, setNum] = useState('');
  let {id} = useParams();
  let shoe = props.shoes.find((data) => data.id == id);
  let [taab, setTaab] = useState(0);
  let [fadeDetail, setFadeDetail] = useState('');
  useEffect(() => {
    let a = setTimeout(() => {
      setBox(false);
    }, 2000);
    return ()=>{
      clearTimeout(a);
    }
  }, [])
  useEffect(() => {
    if (isNaN(num) === true) {
      alert('ㄴㄴㄴㄴㄴㄴ')
    }
  }, [num])
  useEffect(()=>{
    setFadeDetail('end')
    return ()=>{
      setFadeDetail('')
    }
  },[])
  //한번만 실행됨.
  //return ()=>{} 실행가능 useEffect 동작 전에 실행된다. clean up function이라 한다.
  //기존코드 지울때 많이 사용한다.
  // 서버로 데이터 요청하는 코드 일시 return 안에 기존 데이터요청은 삭제를 작성해라!
  // clean up function 은 mount시 실행안됨 unmount시 실행됨

  // 빡통식 정리시간
  // 1.특정컴포넌트가 재렌더링될때마다 특정코드를 실행하고 싶으면 useEffect(()=> {})
  // 2. mount 시 1회 코드 실행하고 싶으면 useEffect(()=> {}, [])
  // 3. unmount 시 1회 코드 실행하고 싶으면 useEffect(()=> { return ()=> {}}, [])
  // 4. useEffect 실행 전에 뭔가 실행하려면 언제나 return
  // 5. dependency 특정 state 변경시에만 실행하려면 [state명]

  return(
    <div className={"container start" + fadeDetail}>
      {
        box === true ? <div className="alert alert-warning">
        2초이내 구매시 할인.
        </div>
        : null
      }
      {count}
      <YellowBtn bg = "blue" onClick={() => {setCount(count + 1 )}}>버튼</YellowBtn>
      <input onChange={(e) => {setNum(e.target.value)}}/>
      <div className="row">
        <div className="col-md-6">
          <img src={shoe.imgg ? shoe.imgg : `https://codingapple1.github.io/shop/shoes${shoe.id+1}.jpg`} width="100%" alt="noimg" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
      <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={()=>{setTaab(0)}} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{setTaab(1)}} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{setTaab(2)}} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent taab={taab}/>
    </div> 
  )
}

function TabContent(props){

  let [fade, setFade] = useState('');

  useEffect(()=>{
    setTimeout(()=>{ setFade('end') }, 100)
  return ()=>{
    setFade('')
  }
  }, [props.taab])

  return <div className={'start'+ fade}>
    {[ <div>내용0</div>, <div>내용1</div>, <div>내용2</div> ][props.taab]}
  </div> 
}

export default Detail;