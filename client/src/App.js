import './App.css';
import R019_PropsBoolean from './R019_PropsBoolean';

function App() {
  return (
		<div>
			<h1>Start React 200!</h1>
			<p>CSS 적용하기</p>
      <R019_PropsBoolean BooleanTrueFalse={false} />
      <R019_PropsBoolean BooleanTrueFalse />
		</div>
  );
}

export default App;
