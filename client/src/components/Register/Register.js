import React, { Component } from 'react';
import axios from "axios";
import Swal from 'sweetalert2'
import $ from 'jquery';

class Register extends Component {
    
    mustNumber = (id) => {
        var pattern1 = /[0-9]/;
        var str = $('#'+id).val();
        if(!pattern1.test(str.substr(str.length - 1, 1))){
            $('#'+id).val(str.substr(0, str.length-1));
        }
    }

    render () {
        return (
			<form method="post" name="frm">
				<div className="re1_wrap">
					<div className="re_cnt ct2">
						<table className="table_ty1">
							<tr className="re_email">
								<th>이메일</th>
								<td>
									<input
										id="email_val"
										type="text"
										name="is_Useremail1"
										placeholder="이메일을 입력해주세요."
										onKeyPress={this.emailKeyPress}
									/>
									<span className="e_goll">@</span>
									<select id="email2_val" name="is_Useremail2" className="select_ty1">
										<option value="">선택하세요</option>
										<option value="naver.com">naver.com</option>
										<option value="hanmail.net">hanmail.net</option>
										<option value="nate.com">nate.com</option>
										<option value="hotmail.com">hotmail.com</option>
										<option value="gmail.com">gmail.com</option>>
										<option value="yahoo.co.kr">yahoo.co.kr</option>
										<option value="yahoo.com">yahoo.com</option>
									</select>
								</td>
							</tr>
							<tr>
								<th>비밀번호</th>
								<td>
									<input
										id="pwd_val"
										type="password"
										name="is_Password"
										placeholder="비밀번호를 입력해주세요."
										onKeyPress={this.pwdKeyPress}
									/>
								</td>
							</tr>
							<tr className="tr_tel">
								<th>핸드폰</th>
								<td>
									<select id="phone1_val" name="is_Userphone1" className="select_ty1">
										<option value="">선택</option>
										<option value="010">010</option>
										<option value="011">011</option>
										<option value="016">016</option>
										<option value="017">017</option>
										<option value="018">018</option>
										<option value="019">019</option>
									</select>
									<span className="tel_dot">-</span>
									<input
										id="phone2_val"
										name="is_Userphone2"
										max="9999"
										maxlength="4"
										onChange={(e) => this.mustNumber('phone2_val')}
									/>
									<span className="tel_dot">-</span>
									<input
										id="phone3_val"
										name="is_Userphone3"
										max="9999"
										maxlength="4"
										onChange={(e) => this.mustNumber('phone3_val')}
									/>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</form>
		);
    }
}

export default Register;