//client2/src/pages/Auth/EmailLogin.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

const EmailLogin = () => {
  return (
    <>
      {/* 상단 광고 줄 */}
      <div className='flex items-center justify-between w-full bg-black p-2'>
        <Link to="/home">
          <button className="text-xl bg-transparent text-scampi-200 py-2 px-4 rounded-full hover:bg-scampi-300 dark:hover:bg-scampi-700 cursor-pointer transition-colors font-semibold">
            📂 MAEGEUL LOGO
          </button>
        </Link>
        <div className='text-scampi-200'>
          꾸준히 감정일기를 작성하면 나에게 맞는 콘텐츠를 추천받을 확률이 높아져요!
        </div>
        <Link to="/article">
          <button className="text-sm bg-transparent text-scampi-200 py-2 px-4 rounded-full border border-scampi-400 hover:bg-scampi-600 hover:text-white dark:hover:bg-scampi-700 cursor-pointer transition-colors">
            콘텐츠 탐색
          </button>
        </Link>
      </div>

      {/* 이메일 로그인 페이지 */}
      <div className='grid grid-cols-2 h-screen bg-gray-100 dark:bg-gray-800 dark:text-white'>
        {/* 텍스트 영역 */}
        <div className='flex flex-col justify-center p-8 text-left'>
          <h2 className="text-4xl font-semibold mb-4 text-scampi-700">이메일 로그인하기</h2>
          <p className="text-sm left text-scampi-600 leading-6 mb-10">
            회원가입 시에 입력했던 이메일 주소와 비밀번호를 입력해 주세요. 만약 이메일 주소나 비밀번호가 기억나지 않는다면 아래의 계정 찾기 버튼을 통해 확인 후 로그인할 수 있어요.
          </p>
          <p className="text-sm font-semibold text-scampi-500 mb-10">회원가입 정보가 기억나지 않는다면?</p>
          <div className="flex space-x-10">
            <Link to="#" className="text-scampi-500 hover:text-scampi-700 transition-colors duration-300">자동 로그인</Link>
            <Link to="#" className="text-scampi-500 hover:text-scampi-700 transition-colors duration-300">계정 찾기</Link>
            <Link to="#" className="text-scampi-500 hover:text-scampi-700 transition-colors duration-300">비밀번호 재설정</Link>
          </div>
        </div>

        {/* 로그인 폼 영역 */}
        <div className='flex items-center justify-center bg-scampi-700'>
          <LoginForm />
        </div>
      </div>

        {/* 하단 부분 */}
       <div className='flex flex-col w-full h-16 justify-center items-center bg-black text-scampi-200'>
        Copyright © 2024 MAEGEUL | All Rights Reserved
      </div>
    </>
  );
};

export default EmailLogin;
