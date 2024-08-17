import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WeatherApp from "./WeatherApp";

// 1. 앱이 실행되자마자 현재위치기반의 날씨가 보인다.
// 2. 날씨App 에는 도시, 섭씨, 화씨, 날씨상태
// 3. 5개의 버튼이 있다 (1개는 현재위치, 4개는 다른도시)
// 4. 4개의 도시버튼을 클릭할때마다 도시별 날씨 출력
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
// 6. 데이터를 들고오는 동안 로딩스피너가 작동한다.

function App() {
  return (
    <div className="App">
      <WeatherApp />
    </div>
  );
}

export default App;
