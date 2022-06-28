import R077_ContextApi from "./R077_ContextApi";
import StrAddButton from './StrAddButton' // 버튼 컴포넌트인 StrAddButton을 임포트해 사용할 수 있도록 한다. 

function App() {
  return (
		<div>
      <h1>Start React 200!</h1>
      <span>{this.props.store.getState().data.str}</span><br /> {/* props를 통해 index에서 전달받은 store에 접근한다. 스토어 state 데이터에서 str 변숫값을 가져온다. */}
      <StrAddButton store={this.props.store} />
		</div>
  );
}

export default App;
