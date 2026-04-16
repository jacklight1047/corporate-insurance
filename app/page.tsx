'use client'; // 버튼 클릭 등의 상호작용을 위해 최상단에 반드시 필요합니다.

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function CorporateInsurancePage() {
  const form = useRef<HTMLFormElement>(null);

  // 메일 전송 함수
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    // --- [중요] 아래 'YOUR_...' 부분들을 EmailJS에서 발급받은 실제 키로 바꿔주세요 ---
    emailjs
      .sendForm(
        'service_gnz04f8', // 서비스 ID
        'template_wptqdou', // 템플릿 ID
        form.current,
        'XhUyzaqw9GXuxiIiA', // 퍼블릭 키
      )
      .then(
        (result) => {
          alert('상담 신청이 완료되었습니다. 확인 후 신속히 연락드리겠습니다!');
          form.current?.reset(); // 전송 성공 시 입력창 비우기
        },
        (error) => {
          console.log(error.text);
          alert('전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
        },
      );
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* 1. Header */}
      <nav className="flex justify-between items-center px-8 py-6 border-b sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="text-2xl font-bold text-blue-900">
          Corporate Risk Lab
        </div>
        <div className="hidden md:flex space-x-8 font-medium text-slate-600">
          <a href="#services" className="hover:text-blue-600 transition">
            주요서비스
          </a>
          <a href="#industry" className="hover:text-blue-600 transition">
            업종별전략
          </a>
          <a
            href="#contact"
            className="hover:text-blue-600 transition font-bold text-blue-700 underline underline-offset-4"
          >
            컨설팅신청
          </a>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="bg-slate-900 text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            2026 법인 경영의 핵심,
            <br />
            리스크 관리가 곧 성장의 발판입니다.
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            단순한 보험 가입을 넘어, 2026년 정부 정책 연계 및{' '}
            <br className="hidden md:block" />
            기업 인증 시너지를 통한 통합 리스크 솔루션을 제안합니다.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg transition"
            >
              무료 리스크 진단 신청
            </a>
          </div>
        </div>
      </section>

      {/* 3. Key Services */}
      <section
        id="services"
        className="py-24 px-6 max-w-7xl mx-auto text-slate-900"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            전문 리스크 관리 솔루션
          </h2>
          <p className="text-slate-500 text-lg">
            기업의 생애 주기에 맞춘 3대 핵심 분야를 집중 관리합니다.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 text-slate-900">
          <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">
              정부지원사업 연계
            </h3>
            <p className="text-slate-600 leading-relaxed">
              2026년 정부 지원금 수혜를 위한 보험 전략 및 기업 가점 확보를 위한
              경영 공시 최적화.
            </p>
          </div>
          <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">
              CEO 은퇴 및 절세
            </h3>
            <p className="text-slate-600 leading-relaxed">
              합법적 법인세 절감, 가지급금 정리, 가업 승계를 위한 상속·증여세
              재원 마련 전략.
            </p>
          </div>
          <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">
              기업 인증 시너지
            </h3>
            <p className="text-slate-600 leading-relaxed">
              ISO, MAIN-BIZ 인증 유지 및 산업재해 발생 시 기업 손실을 최소화하는
              포트폴리오.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Industry Focused Strategy */}
      <section id="industry" className="py-24 bg-slate-50 px-6 text-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                업종의 특수성을 <br />
                누구보다 잘 압니다.
              </h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-xl mb-2 text-blue-800">
                    제조 및 자동화 설비(FA)
                  </h4>
                  <p className="text-slate-600">
                    고가 설비 리스크 담보 및 핵심 인력 이탈 방지를 위한 복지
                    플랜
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2 text-blue-800">
                    식품 가공 및 유통
                  </h4>
                  <p className="text-slate-600">
                    PL(생산물배상책임) 및 HACCP 인증 유지를 위한 안전 설계
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-blue-900 rounded-3xl p-10 text-white shadow-2xl">
              <h4 className="text-2xl font-bold mb-6">2026 법인 체크리스트</h4>
              <ul className="space-y-4 text-blue-100">
                <li>✓ 2026 세법 개정안 절세 포인트 확인</li>
                <li>✓ 정부 지원금 신청용 보험 요건 충족</li>
                <li>✓ 핵심 인력 장기근속 보상 설계</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact Form Section (이 부분이 핵심입니다) */}
      <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
        <div className="bg-white border-4 border-slate-900 p-10 md:p-16 rounded-[2rem] shadow-[20px_20px_0px_0px_#1e293b] text-slate-900">
          <h2 className="text-3xl font-bold text-center mb-10">
            전문 컨설팅 신청
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">
                  법인명
                </label>
                <input
                  name="company_name"
                  type="text"
                  required
                  placeholder="예: (주)대한상사"
                  className="w-full p-4 border-2 border-slate-100 rounded-xl outline-none focus:border-blue-500 transition text-slate-900"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">
                  성함 및 직함
                </label>
                <input
                  name="user_name"
                  type="text"
                  required
                  placeholder="예: 홍길동 대표"
                  className="w-full p-4 border-2 border-slate-100 rounded-xl outline-none focus:border-blue-500 transition text-slate-900"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">연락처</label>
              <input
                name="phone_number"
                type="tel"
                required
                placeholder="010-0000-0000"
                className="w-full p-4 border-2 border-slate-100 rounded-xl outline-none focus:border-blue-500 transition text-slate-900"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">
                상담 관심 분야
              </label>
              <select
                name="interest"
                className="w-full p-4 border-2 border-slate-100 rounded-xl outline-none focus:border-blue-500 transition bg-white text-slate-900"
              >
                <option>2026 정부지원사업 및 인증 연계</option>
                <option>CEO 은퇴 및 절세 전략</option>
                <option>단체보험 및 산재 리스크 관리</option>
                <option>기타 통합 법인 진단</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-slate-900 text-white py-5 rounded-xl font-bold text-xl hover:bg-blue-600 transition-all duration-300 transform hover:-translate-y-1"
            >
              컨설팅 리포트 무료 신청하기
            </button>
          </form>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-500 border-t bg-slate-50">
        <p className="mb-2 font-bold text-slate-800">Corporate Risk Lab</p>
        <p className="text-sm tracking-widest uppercase">
          &copy; 2026 RISK MANAGEMENT PARTNERS
        </p>
      </footer>
    </div>
  );
}
