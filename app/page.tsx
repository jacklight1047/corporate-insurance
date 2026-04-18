'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function CorporateInsurancePage() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 상태 관리: 서비스 섹션과 FAQ 섹션 각각 관리
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (form.current) {
      emailjs
        .sendForm(
          'service)gnz04f8',
          'template_wptqdou',
          form.current,
          'XhUyzaqw9GXuxiliA',
        )
        .then(() => {
          alert('신청 완료! 곧 연락드리겠습니다.');
          form.current?.reset();
        })
        .finally(() => setIsSubmitting(false));
    }
  };

  const services = [
    {
      title: '정부지원사업 & 인증',
      emoji: '📑',
      summary: '2026년 개정 정책 매칭 및 인증 전략',
      details: [
        '2026년 신규 유망 업종(FA, 스마트 제조) 가점 분석',
        '벤처기업/ISO/연구소 설립을 통한 법인세 절세',
        '무상 환수 없는 정부 출연금 로드맵 설계',
        '고용지원금 및 일자리 창출 장려금 최적화',
      ],
    },
    {
      title: '노무 및 산재 리스크',
      emoji: '🛡️',
      summary: '중대재해 예방 및 안전 관리 시스템',
      details: [
        '중대재해처벌법 대응 현장 안전 점검 리스트 제공',
        '제조현장(식품/자동화) 맞춤형 단체보험 설계',
        '근로계약서 및 취업규칙 2026년 최신 법규 반영',
        '퇴직금 재원 마련 및 임원 보수 규정 정비',
      ],
    },
    {
      title: '절세 및 자산 승계',
      emoji: '⚖️',
      summary: '합리적인 가업 승계 및 법인세 절감',
      details: [
        '가지급금 및 이익잉여금 무세금 정리 플랜',
        '차명주식 해지 및 주식 가치 평가 관리',
        '상속세 재원 마련을 위한 법인 전용 플랜',
        '배당 및 자본거래를 통한 개인 자산화 전략',
      ],
    },
  ];

  const faqs = [
    {
      question: '상담 비용은 정말 무료인가요?',
      answer:
        '네, 첫 방문 기초 진단과 2026년도 정부지원사업 매칭 리포트 작성은 별도의 비용 없이 무료로 진행해 드립니다. 기업의 현황을 파악하는 것이 가장 우선이기 때문입니다.',
    },
    {
      question: '상담 신청 후 연락은 언제쯤 오나요?',
      answer:
        '보통 영업일 기준 24시간 이내에 담당 전문가가 직접 전화를 드려 기초 상담을 진행합니다. 이후 대표님 일정에 맞춰 대면 상담 일정을 조율하게 됩니다.',
    },
    {
      question: '특정 업종(제조업, 식품업)만 상담이 가능한가요?',
      answer:
        '아니요. 모든 법인이 대상이지만, 특히 공정 자동화(FA) 설비나 식품 제조 등 산업재해 위험이 높거나 인증이 필수적인 업종에 대해 더욱 특화된 솔루션을 보유하고 있습니다.',
    },
    {
      question: '상담 시 어떤 서류를 준비해야 하나요?',
      answer:
        '상담 신청 단계에서는 서류가 필요 없습니다. 전화 상담 후 더 심도 있는 진단이 필요할 때 재무제표나 법인 등기부등본 등을 요청드릴 수 있으며, 모든 정보는 철저히 비밀 유지됩니다.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#4a4a4a] font-sans">
      <header className="py-20 bg-[#f1f3ef] text-center px-6">
        <div className="inline-block px-4 py-1 mb-6 text-sm font-medium text-green-700 bg-green-100 rounded-full">
          2026 Corporate Insight
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#2d3436] mb-6 leading-tight">
          성공하는 법인의
          <br />
          든든한 파트너
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto italic">
          "대표님은 경영에만 집중하세요. 리스크는 저희가 관리하겠습니다."
        </p>
      </header>

      {/* 서비스 섹션 */}
      <section className="py-16 container mx-auto px-6 max-w-4xl">
        <h2 className="text-2xl font-bold mb-8 text-center text-[#2d3436]">
          전문 서비스 영역
        </h2>
        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() =>
                setOpenSection(openSection === index ? null : index)
              }
              className={`group p-8 bg-white rounded-[2rem] border transition-all cursor-pointer ${openSection === index ? 'border-green-400 shadow-xl' : 'border-gray-100 hover:border-green-200'}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <span className="text-4xl">{service.emoji}</span>
                  <div>
                    <h3 className="text-xl font-bold text-[#2d3436]">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {service.summary}
                    </p>
                  </div>
                </div>
                <div
                  className={`text-green-500 transition-transform ${openSection === index ? 'rotate-180' : ''}`}
                >
                  ▼
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openSection === index ? 'max-h-[500px] opacity-100 mt-8' : 'max-h-0 opacity-0'}`}
              >
                <div className="pt-6 border-t border-gray-50">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.details.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-500"
                      >
                        <span className="text-green-400">✔</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ 섹션 (새로 추가된 부분) */}
      <section className="py-16 bg-white border-y border-gray-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-2xl font-bold mb-10 text-center text-[#2d3436]">
            자주 묻는 질문
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="border-b border-gray-100 last:border-0"
              >
                <div className="flex justify-between items-center py-6 cursor-pointer group">
                  <h4
                    className={`font-semibold transition-colors ${openFaq === index ? 'text-green-600' : 'text-[#4a4a4a] group-hover:text-green-500'}`}
                  >
                    Q. {faq.question}
                  </h4>
                  <span className="text-xs text-gray-300">
                    {openFaq === index ? '닫기' : '보기'}
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-sm text-gray-500 leading-relaxed bg-[#fafaf8] p-5 rounded-2xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 상담 신청 폼 */}
      <section id="contact" className="py-24 bg-[#f1f3ef]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto bg-white p-10 md:p-16 rounded-[3rem] shadow-xl">
            <h2 className="text-3xl font-bold text-center mb-4 text-[#2d3436]">
              비즈니스 상담
            </h2>
            <p className="text-center text-gray-400 mb-10 text-sm">
              한 줄의 정보가 기업의 운명을 바꿀 수 있습니다.
            </p>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="company_name"
                placeholder="회사명"
                required
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#84a59d]"
              />
              <input
                type="text"
                name="user_name"
                placeholder="성함"
                required
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#84a59d]"
              />
              <input
                type="tel"
                name="user_phone"
                placeholder="연락처"
                required
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border-none outline-none focus:ring-2 focus:ring-[#84a59d]"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-5 rounded-2xl font-bold text-white transition-all ${isSubmitting ? 'bg-gray-300' : 'bg-[#f28482] hover:bg-[#f59a98] shadow-lg'}`}
              >
                {isSubmitting ? '전송 중...' : '무료 리포트 신청하기'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-gray-300 text-sm italic">
        <p>Your Trustworthy Business Partner. 2026</p>
      </footer>
    </div>
  );
}
