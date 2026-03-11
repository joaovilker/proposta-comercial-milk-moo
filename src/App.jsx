import React, { useState } from 'react';
import { 
  Milk, 
  Star, 
  TrendingUp, 
  ShieldCheck, 
  MessageCircle, 
  ChevronRight, 
  Menu, 
  X,
  MapPin,
  Clock,
  Box,
  Layers,
  CheckCircle2,
  Cpu,
  Smartphone
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const whatsappNumber = "5511977276397";
  const whatsappMessage = encodeURIComponent("Olá João, gostei da proposta, podemos seguir?");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'historia', label: 'Nossa História' },
    { id: 'sistema', label: 'O Sistema' },
    { id: 'cronograma', label: 'Prazo' },
    { id: 'investimento', label: 'Investimento' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setActiveSection(id);
  };

  const CowPattern = ({ className }) => (
    <div className={`absolute inset-0 opacity-5 pointer-events-none ${className}`} style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10c-5 0-10 5-10 10s5 10 10 10 10-5 10-10-5-10-10-10zm40 40c-8 0-15 7-15 15s7 15 15 15 15-7 15-15-7-15-15-15zM20 70c-6 0-12 6-12 12s6 12 12 12 12-6 12-12-6-12-12-12zm60-50c-4 0-8 4-8 8s4 8 8 8 8-4 8-8-4-8-8-8z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E")` }}></div>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-pink-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">M</div>
            <span className="font-black text-2xl tracking-tighter text-slate-900 uppercase">Milky<span className="text-pink-500">Moo</span> <span className="text-blue-500 text-sm align-top">PDV</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                  activeSection === item.id ? 'text-pink-500' : 'text-slate-500 hover:text-blue-500'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-200 active:scale-95"
            >
              FALAR COM JOÃO
            </a>
          </div>

          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left py-2 font-bold text-slate-700 uppercase tracking-tighter"
              >
                {item.label}
              </button>
            ))}
            <a href={whatsappUrl} className="bg-pink-500 text-white p-4 rounded-xl text-center font-bold">Falar no WhatsApp</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <CowPattern />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <span className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6">
              Exclusivo para Luh
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8">
              O Controle da Moo na <span className="text-pink-500 italic">palma da mão.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
              Luh, o próximo passo para o sucesso da sua franquia é um sistema de PDV que entende a complexidade de mais de 30 sabores e o carinho pelos nossos Mooners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('sistema')}
                className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
              >
                Ver Solução PDV <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="historia" className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white p-8 md:p-12 rounded-[60px] shadow-xl border border-slate-100">
                <div className="space-y-6 text-slate-600 leading-relaxed">
                  <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase">Nossa Jornada <span className="text-pink-500">Muu</span>ltiplicada</h2>
                  <p>A Milky Moo nasceu em outubro de 2019, fruto do sonho de quatro amigos. Em março de 2020, as portas se abriram, desafiando até o lockdown com um ambiente malhadinho e copo único.</p>
                  <p>Hoje, nossa mascote <span className="font-bold text-pink-500">Moo</span> é a estrela, a influencer que guia nossos clientes — os <span className="font-bold text-blue-500">Mooners</span> — em uma experiência iniciada em 1885, mas reinventada por nós.</p>
                  <div className="flex gap-4 mt-8">
                    <div className="bg-pink-100 p-4 rounded-2xl text-center flex-1">
                      <div className="text-2xl font-black text-pink-600 italic">2019</div>
                      <div className="text-xs font-bold uppercase text-pink-400">O Sonho</div>
                    </div>
                    <div className="bg-blue-100 p-4 rounded-2xl text-center flex-1">
                      <div className="text-2xl font-black text-blue-600 italic">30+</div>
                      <div className="text-xs font-bold uppercase text-blue-400">Sabores</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-none">Para quem atende <span className="text-blue-500 italic">Mooners</span>, a precisão é essencial.</h3>
              <p className="text-xl text-slate-500">Luh, seu sistema PDV precisa ser tão irreverente quanto a Moo e tão eficiente quanto o seu crescimento exige.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The System - Stock Control Focus */}
      <section id="sistema" className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase">PDV <span className="text-pink-500 italic">Sob Medida</span></h2>
            <p className="text-slate-600 text-lg italic">Por que um sistema genérico não serve para a Milk Moo? A resposta está nos detalhes do seu estoque.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Box className="text-pink-500" />, 
                title: "Estoque Inteligente", 
                desc: "Controle granular de insumos. Saiba exatamente quanto leite, caldas e toppings restam após cada pedido dos Mooners." 
              },
              { 
                icon: <Layers className="text-blue-500" />, 
                title: "Gestão de Receitas", 
                desc: "Baixa automática de estoque baseada na receita de cada um dos 30+ sabores. Erro zero na reposição." 
              },
              { 
                icon: <Smartphone className="text-green-500" />, 
                title: "Interface Intuitiva", 
                desc: "Agilidade no PDV para reduzir filas. Ambiente visual alinhado com a estética malhadinha da loja." 
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] border-2 border-slate-50 hover:border-pink-100 transition-all shadow-lg shadow-slate-100">
                <div className="mb-6 bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center">{feature.icon}</div>
                <h4 className="text-2xl font-black text-slate-900 mb-4">{feature.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Scrum Section */}
      <section id="cronograma" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 italic text-blue-400 leading-none underline decoration-white decoration-4 underline-offset-8">Desenvolvimento Ágil</h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                Luh, o prazo estimado para o sistema estar rodando na prática é de <span className="text-white font-bold underline">1 a 2 meses.</span> 
                Utilizaremos a metodologia <span className="text-pink-400 font-bold italic">Scrum</span>, garantindo que cada etapa seja testada e aprovada por você.
              </p>
              <div className="space-y-6">
                {[
                  "Levantamento de Requisitos e Backlog",
                  "Desenvolvimento de Sprints Quinzenais",
                  "Testes em Ambiente de Produção",
                  "Aprovação Final e Deploy"
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">{i+1}</div>
                    <span className="text-lg font-medium text-slate-200">{step}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/5 p-10 rounded-[60px] border border-white/10 backdrop-blur-md">
                <h4 className="text-2xl font-black mb-6 flex items-center gap-3">
                  <Cpu className="text-pink-400" /> Tecnologia de Ponta
                </h4>
                <p className="text-slate-400 leading-relaxed italic mb-6">
                  "A finalização deste período promete que todo o Scrum será preenchido corretamente, usando todas as etapas para que o sistema seja desenvolvido, testado e aprovado dentro do prazo."
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-2xl text-center">
                    <div className="text-3xl font-black text-blue-400">100%</div>
                    <div className="text-xs font-bold uppercase tracking-tighter">Testado</div>
                  </div>
                  <div className="bg-white/10 p-4 rounded-2xl text-center">
                    <div className="text-3xl font-black text-pink-400">60d</div>
                    <div className="text-xs font-bold uppercase tracking-tighter">Prazo Máx</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Plan */}
      <section id="investimento" className="py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase">Plano de <span className="text-blue-500 italic">Investimento</span></h2>
          <p className="text-slate-600 mb-16 max-w-2xl mx-auto">Valores pensados para escalar junto com a sua franquia Milk Moo.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-50 p-10 rounded-[40px] text-left border-2 border-transparent hover:border-blue-200 transition-all">
              <div className="text-blue-600 font-black text-xs uppercase mb-2 tracking-[0.2em]">Setup Inicial</div>
              <div className="text-4xl font-black text-slate-900 mb-4 italic">R$ 3.000</div>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">Desenvolvimento completo do sistema, personalizado com a identidade da Milk Moo e focado no seu controle de estoque.</p>
            </div>
            <div className="bg-pink-50 p-10 rounded-[40px] text-left border-2 border-transparent hover:border-pink-200 transition-all">
              <div className="text-pink-600 font-black text-xs uppercase mb-2 tracking-[0.2em]">Implementação</div>
              <div className="text-4xl font-black text-slate-900 mb-4 italic">R$ 1.000</div>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">Inclui treinamento da equipe, testes físicos na unidade, integração de hardware e suporte de lançamento.</p>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-10 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8 text-left shadow-2xl">
            <div>
              <div className="text-blue-400 font-black text-xs uppercase mb-1 tracking-[0.2em]">Pós-Implementação</div>
              <h3 className="text-3xl font-black italic">R$ 500 <span className="text-lg text-slate-400 font-normal">/mensal por unidade</span></h3>
            </div>
            <p className="text-slate-400 text-sm max-w-sm">Assinatura do sistema avulso. Para expansões futuras, o plano se aplica de forma proporcional a cada nova unidade.</p>
          </div>
          
          <p className="mt-8 text-slate-400 font-bold italic">Luh, estou aberto a contrapropostas para viabilizarmos o início imediato.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-500 relative overflow-hidden">
        <CowPattern className="opacity-10" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
            Luh, pronta para levar a <span className="text-pink-200 italic">Milk Moo</span> ao próximo nível?
          </h2>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 bg-white text-blue-500 px-12 py-6 rounded-[32px] font-black text-2xl hover:scale-105 transition-all shadow-2xl hover:shadow-white/20 active:scale-95"
          >
            <MessageCircle className="fill-blue-500" size={32} />
            ACEITAR PROPOSTA
          </a>
          <p className="mt-8 text-white font-black text-sm uppercase tracking-widest">
            Clique no botão acima para iniciarmos o Scrum amanhã!
          </p>
        </div>
      </section>

      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">M</div>
            <span className="font-black text-xl tracking-tighter text-slate-900 uppercase">Milky Moo PDV</span>
          </div>
          <p className="text-slate-400 text-sm font-medium italic">© 2026 - Solução PDV desenvolvida por João.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;