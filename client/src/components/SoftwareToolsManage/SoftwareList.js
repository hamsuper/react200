import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class SoftwareList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			responseSwtoolList: '',
			append_SwtoolList: '',
		};
	}

	componentDidMount() {
		this.callSwToolListApi();
	}
	// node api를 호출하는 this.callSwToolListApi() 함수를 호출한다.

	callSwToolListApi = async () => {
		axios
			.post('/api/Swtool?type=list', {})
			.then((response) => {
				try {
					this.setState({ responseSwtoolList: response });
					this.setState({ append_SwtoolList: this.SwToolListAppend() });
				} catch (error) {
					alert('작업중 오류가 발생하였습니다.2');
				}
			})
			.catch((error) => {
				alert('작업중 오류가 발생하였습니다.');
				return false;
			});
	};

	// node api 경로를 호출. 호출 결과 response를 state 변수 responseSwtoolList에 할당.
	// 배열을 반환하는 SwToolListAppend 함수를 실행
	// return 값을 state 변수 append_SwtoolList에 할당 setState 함수를 사용하면 state 변수에 값이 할당되고 render 함수를 다시 실행
	// render 함수가 재실행되면서 append_SwtoolList에 할당됐던 html 코드가 화면에 표시

	SwToolListAppend = () => {
		let result = [];
		var SwToolList = this.state.responseSwtoolList.data;

		for (let i = 0; i < SwToolList.json.length; i++) {
			var data = SwToolList.json[i];

			var date = data.reg_date;
			var year = date.substr(0, 4);
			var month = date.substr(4, 2);
			var day = date.substr(6, 2);
			var reg_date = year + '.' + month + '.' + day;

			result.push(
				<tr className="hidden_type">
					<td>{data.swt_toolname}</td>
					<td>{data.swt_function}</td>
					<td>{reg_date}</td>
					<td>
						<Link to={'/AdminSoftwareView/' + data.swt_code} className="bt_c1 bt_c2 w50_b">
							수정
						</Link>
						<a href="#n" className="bt_c1 w50_b">
							삭제
						</a>
					</td>
				</tr>
			);
		}
		return result;
	};
	// state 변수 responseSwtoolList.data로 접근해 지역 변수 SwToolList 변수에 할당
	// json 배열의 첫 데이터부터 순서대로 data라는 지역 변수에 할당
	// 반복문을 실행할 때마다 tr 태그 생성해 result라는 배열에 추가
	// td 태그안에 data.변수명으로 사용할 데이터를 가져 옴(변수명은 SwToolsMapper.xml 파일에서 select한 react_swtool 테이블의 컬럼명과 동일)
	// result 반환

	render() {
		//componentDidMount() 함수보다 먼저 실행된다.
		return (
			<section className="sub_wrap">
				<article className="s_cnt mp_pro_li ct1 mp_pro_li_admin">
					<div className="li_top">
						<h2 className="s_tit1">Software Tools 목록</h2>
						<div className="li_top_sch af">
							<Link to={'/SoftwareView/register'} className="sch_bt2 wi_au">
								Tool 등록
							</Link>
						</div>
					</div>

					<div className="list_cont list_cont_admin">
						<table className="table_ty1 ad_tlist">
							<tr>
								<th>툴 이름</th>
								<th>기능</th>
								<th>등록일</th>
								<th>기능</th>
							</tr>
						</table>
						<table className="table_ty2 ad_tlist">{this.state.append_SwtoolList}</table>
						{/* append_SwtoolList는 rend 함수가 처음 실행되는 시점에 빈 값이기 때문에 화면에 빈 리스트가 표시된다. */}
					</div>
				</article>
			</section>
		);
	}
}
