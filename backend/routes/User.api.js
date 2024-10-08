//api를 용도별로 구분하기
//LEADME/backend/routes/User.api.js
const express = require("express");
const router = express.Router();
const { loginUser, createUser } = require("../controllers/User.controller"); // 컨트롤러 임포트
const { check, validationResult } = require("express-validator");
// 로그인
// router.post(
//     "/",
//     [
//         check("email", "이메일을 입력하세요").isEmail(),
//         check("password", "비밀번호를 입력하세요").exists()
//      ],
//     loginUser // 컨트롤러 함수 호출
// );

// 회원 생성
router.post(
    "/",
    [
        check("name", "이름을 입력하세요").not().isEmpty(),
        check("nickname", "닉네임을 입력하세요").not().isEmpty(),
        check("email", "유효한 이메일을 입력하세요").isEmail(),
        check("password", "비밀번호는 6자 이상이어야 합니다").isLength({ min: 6 })
    ],
    createUser // 컨트롤러 함수 호출
);


module.exports = router;
