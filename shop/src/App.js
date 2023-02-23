import { Navbar, Container, Nav, Row, Col, Card} from 'react-bootstrap';
import './App.css';
import img1 from './123.png'
import { useState } from 'react';
import shoesData from './data.js';
import { Routes, Route, useNavigate, Outlet} from 'react-router-dom';
import Detail from './routes/detail.js';
import Cart from './routes/cart.js';
import axios from 'axios';
//part2 1강
//부트스트랩 라이브러리 -> 복사붙여넣기 식으로 편하개 개발가능
//import 잊지마!

//2강
//이미지 넣어보자.
//html에서 배경넣어보기
//이미지 import해오고 style에 넣기 ㅈㄴ별로
//react-bootstrap 이 용량 기본보다 더 작음
//이미지 다른방법이 하나 ㄷ있다.
// 퍼블릭 폴더에도 이미지 보관가능
// 리액트는 사이트발행 전에 html js css파일을 압축함.
// 그냥 퍼블릭 폴더에 있는건 import필요없이 /logo192.png 이런식으로 가져오기가능
// 그대신 나중에 경로 신경써야한다. 
//<img src={process.env.PUBLIC_URL + '/logo.png'} 이런식으로 하면 경로 신켱x

//3강
//코드 길어지면 import export해라.
//export로 보내고 import로 가져와라.
//여러개 export하고 싶으면 {a, b}
//중괄호로 가져올땐 작명 export한 변수명이랑 일치해야함.
//함수도 export 가능
//array 안에 object가 들어있다. shoes[0].title 이런식을 뺌
//이미 충분히 object 학습이 된상태임.

//5강
//컴포넌트 만들어서 그 페이지이동하면 컴포넌트 보여줌
//react-router-dom 라이브러리쓰면 쉽게만들수있다.
//import { Routes, Route, Link} from 'react-router-dom';
//Routes와 Route로 페이지를 나눈다.
//목록은 메인에만 보여주고싶다. route안에 넣기 컴포넌트화 ㄱㅊ
//버튼으로 페이지이동함.

//6강 navigate outlet 배운다.
// use로 시작하는걸 훅이라함
// navigate 페이지 이동을 도와주는 함수이다.
// Link는 a태그같이 생겨서 꼴보기싫다.
//<Nav.Link onClick={()=>{ navigate('1') }}>Home</Nav.Link> 앞으로가기뒤로가기잇음 
// 404페이지 * 오타포함 모든페이지
// Nested Routes -> about/~~ , about/~~~ 이런거
// route작성이 좀 간단해질수도. 
// nested route 접속시엔 element 2개나보임
// Outlet nested를 어디서보여줄지 자리 결정
// 어디다가 써야할지 생각해보길. 
// 여러 유사한 페이지 필요할때 nested routes ㄱㅊ다

//7강 URL 파라미터로 상세페이지 만들기
//shoes를 detail로 전송하면 쓸수있다.
//관리가 용이하게하기위해 props로 준다. 데이터는 한곳에보관
//URL 파라미터문법이용한다.
//리액트라우터적으로 해결가능.
//props.shoes[현재url에입력한숫자]를 넣고싶다.
//useParams를써라.
//파라미터 이상한값이 들어오면 조건문으로 다른거 보여줘라.
//발생하는 문제 -> 상품을 정렬한다. -> 그러면 0번째상품이 바뀌게 된다. -> 
// 상품중에 고유 id를가진것을 보여주면 될것같다.

//styled-components
//장점 다른 js파일들을 간섭하지 않는다. 오염되지 않음.
//백팁안에 내용 집어넣어라.
//컴포넌트명.module.css 파일만들면 해당 js파일만 스타일 적용가능
//장점 : 페이징 로딩시간 단축

//Lifecycle과 useEffect
// 컴포넌트의 Lifecycle
// mount (페이지에 장착) , update, unmount(필요없으면 제거.
// 왜 배우냐? -> 주기를 알고 있으면 중간중간 간섭(코드실행)이 가능 
// 갈고리를 단다. 
function App() {

  let [shoes,setShoes] = useState(shoesData);
  let [axCount,setAxCount] = useState(0);
  let navigate = useNavigate();
  let [visibleBtn,setVisibleBtn] = useState(true);
  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">상현쇼핑</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/about') }}>About</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/event') }}>event</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/cart') }}>cart</Nav.Link>
            <Nav.Link href="#pricing">주문</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={
        <div>
          <div className="main-bg" style={{ backgroundImage : 'url('+ img1 +')' }}>
          </div>
          <Container>
            <Row>
            {shoes.map((shoe,i)=>{
              return(
                <Col key={i}>
                  <Cards  i = {i} shoe = {shoe}></Cards>
                </Col>
              )})
            }
            </Row>
          </Container>
          { visibleBtn && <button onClick={()=>{
            if (axCount === 0) {
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((request)=>{
                console.log(request.data)
                let copy = [...shoes,...request.data]
                setShoes(copy)
              })
              .catch((err)=>{
                alert(err)
              })
            } else if (axCount === 1) {
              axios.get('https://codingapple1.github.io/shop/data3.json')
            .then((request)=>{
              console.log(request.data)
              let copy = [...shoes,...request.data]
              setShoes(copy)
            })
            .catch((err)=>{
              alert(err)
            })
            setVisibleBtn(false)
            }
            setAxCount(axCount+1)
          }}>서버에서받아와</button>}
    </div>}/>
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>} />
        <Route path="/about" element={<About/>} >
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치정보</div>} />
        </Route>
        <Route path="/event" element={<Event/>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<div>없는페이지</div>} />
      </Routes>
    </div>
  );
}

function Cards(props) {
  let navigate = useNavigate();

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.shoe.imgg ? props.shoe.imgg : `https://codingapple1.github.io/shop/shoes${props.shoe.id+1}.jpg`} />
      <Card.Body>
        <Card.Title >{props.shoe.title}</Card.Title>
        <Card.Text>
        {props.shoe.price} 
        </Card.Text>
        <Card.Text>
        <button onClick={()=>{navigate('/detail/'+props.i)}}>상세보기</button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

function About(){
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event(){
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;


// api.interceptors.response.use(
//   function (response) {
//       return response;
//   },
//   async function (error) {
//       const { config, response } = error;
//       const originalRequest = config;

//       if (response && response.data.error.code === 'ACCESS_TOKEN_EXPIRED') {
//           const refreshToken = localStorage.getItem('refresh-token');

//           const header = {};

//           header['refresh-token'] = refreshToken;

//           await axios
//               .post(`${BASE_URL}auth/reissue`, null, {
//                   headers: header,
//               })
//               .then(res => {
//                   if (res.data.data === 'Reissue Success') {
//                       const newAccessToken = res.headers.authorization;
//                       const newRefreshToken = res.headers['refresh-token'];

//                       originalRequest.headers.authorization = newAccessToken;
//                       originalRequest.headers['refresh-token'] =
//                           newRefreshToken;

//                       localStorage.setItem('access-token', newAccessToken);
//                       localStorage.setItem('refresh-token', newRefreshToken);

//                       return axios(originalRequest);
//                   }
//                   return Promise.reject(error);
//               })
//               .catch(err => {
//                   if (
//                       err.response.data.error.code === 'REFRESH_TOKEN_EXPIRED'
//                   ) {
//                       localStorage.removeItem('access-token');
//                       localStorage.removeItem('refresh-token');
//                       window.location.replace = '/login';
//                   }
//               });
//       }

//       return Promise.reject(error);
//   },
// );