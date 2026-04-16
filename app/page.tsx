'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function CorporateInsurancePage() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (form.current) {
      emailjs
        .sendForm(
          'service_gnz04f8',
          'template_wptqdou',
          form.current,
          'XhUyzaqw9GXuiliA',
        )
        .then(() => {
          alert(
            '상담 신청이 완료되었습니다. 2026년 최신 자료와 함께 곧 연락드리겠습니다!',
          );
          form.current?.reset();
        })
        .catch((error) => {
          alert('전송 중 오류가 발생했습니다. 다시 시도해 주세요.');
        })
        .finally(() => setIsSubmitting(false));
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#4a4a4a] font-sans selection:bg-green-100">
      {/* Hero Section */}
      <header className="py-20 lg:py-32 bg-[#f1f3ef]">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1 mb-6 text-sm font-medium text-green-700 bg-green-100 rounded-full">
            2026년도 개정 기업 지원 제도 완벽 반영
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2d3436] mb-8 leading-tight">
            성장하는 법인을 위한
            <br />
            <span className="text-green-600 underline decoration-green-200 underline-offset-8">
              가장 따뜻한 리스크 진단
            </span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            자동화 설비부터 식품 제조까지, 업종별 특화된 솔루션으로
            <br />
            대표님의 소중한 자산과 기업의 미래를 든든하게 지켜드립니다.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-block bg-[#84a59d] hover:bg-[#6b8d85] text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-lg"
            >
              2026 기업 지원 전략 상담하기
            </a>
          </div>
        </div>
      </header>

      {/* Core Services Section (보강된 내용) */}
      <section className="py-24 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#2d3436] mb-4">
            어떤 고민을 도와드릴까요?
          </h2>
          <p className="text-gray-400">
            대표님들께서 가장 많이 문의하시는 3가지 핵심 영역입니다.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 bg-white rounded-[2.5rem] shadow-sm border border-gray-100">
            <div className="text-3xl mb-6">📑</div>
            <h3 className="text-xl font-bold mb-4 text-[#2d3436]">
              정부지원사업 & 인증
            </h3>
            <ul className="text-gray-500 text-sm space-y-3 leading-relaxed">
              <li>• 2026년 개정 산업진흥 정책 매칭</li>
              <li>• 스마트공장/ISO 인증 가점 전략</li>
              <li>• 기술금융 및 정책자금 활용 방안</li>
            </ul>
          </div>
          <div className="p-10 bg-white rounded-[2.5rem] shadow-sm border border-gray-100">
            <div className="text-3xl mb-6">🔍</div>
            <h3 className="text-xl font-bold mb-4 text-[#2d3436]">
              노무 및 산재 리스크
            </h3>
            <ul className="text-gray-500 text-sm space-y-3 leading-relaxed">
              <li>• 중대재해처벌법 대응 매뉴얼 수립</li>
              <li>• 제조 현장(FA/식품) 맞춤형 안전 관리</li>
              <li>• 효율적인 임원/근로자 복지 설계</li>
            </ul>
          </div>
          <div className="p-10 bg-white rounded-[2.5rem] shadow-sm border border-gray-100">
            <div className="text-3xl mb-6">⚖️</div>
            <h3 className="text-xl font-bold mb-4 text-[#2d3436]">
              절세 및 자산 승계
            </h3>
            <ul className="text-gray-500 text-sm space-y-3 leading-relaxed">
              <li>• 가지급금/이익잉여금 최적 정리</li>
              <li>• 가업 상속 공제 및 증여 플랜</li>
              <li>• 법인세 절감을 위한 맞춤 세무 진단</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section (추가된 부분) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-bold text-center mb-12">
            많이 궁금해하시는 질문
          </h2>
          <div className="space-y-6">
            <div className="bg-[#fafaf8] p-6 rounded-2xl">
              <h4 className="font-bold text-[#84a59d] mb-2">
                Q. 상담은 어떤 방식으로 진행되나요?
              </h4>
              <p className="text-sm text-gray-500">
                기초 정보를 토대로 1차 유선 상담을 진행한 후, 필요한 경우 기업을
                직접 방문하여 상세한 진단 보고서를 전달해 드립니다.
              </p>
            </div>
            <div className="bg-[#fafaf8] p-6 rounded-2xl">
              <h4 className="font-bold text-[#84a59d] mb-2">
                Q. 상담 비용이 발생하나요?
              </h4>
              <p className="text-sm text-gray-500">
                기초 진단 및 2026년도 정부지원사업 매칭 리포트 작성은 무료로
                지원해 드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-[#f1f3ef]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto bg-white p-10 md:p-16 rounded-[3rem] shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#2d3436] mb-4">
                맞춤 전략 신청
              </h2>
              <p className="text-gray-400">
                정보를 남겨주시면 정성을 다해 준비하겠습니다.
              </p>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2 ml-1">
                    회사명
                  </label>
                  <input
                    type="text"
                    name="company_name"
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[#84a59d] outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2 ml-1">
                    성함
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[#84a59d] outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2 ml-1">
                  연락처
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[#84a59d] outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2 ml-1">
                  관심 분야
                </label>
                <select
                  name="interest"
                  className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-[#84a59d] outline-none transition-all"
                >
                  <option>2026 정부지원사업 및 인증</option>
                  <option>산업재해 및 기업 보험 리스크</option>
                  <option>법인세 절세 및 가업 승계</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-5 rounded-2xl font-bold text-white transition-all ${isSubmitting ? 'bg-gray-300' : 'bg-[#f28482] hover:bg-[#f59a98] shadow-lg'}`}
              >
                {isSubmitting
                  ? '전송 중입니다...'
                  : '무료 진단 리포트 신청하기'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-gray-300 text-sm">
        <p>© 2026 Corporate Strategy Lab. All rights reserved.</p>
      </footer>
    </div>
  );
}
