import React from 'react';
import { useTranslation } from 'react-i18next';
import { BarChart3, Lightbulb, FileText, Users, GraduationCap, Target, TrendingUp, Building, Globe, Award } from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Market Intelligence Energetica",
      objective: "Fornire dati affidabili e analisi approfondite per orientare le scelte strategiche nei settori dell'energia sostenibile e dell'accesso all'energia.",
      offerings: [
        "Analisi della domanda energetica (segmenti domestico, commerciale, pubblico)",
        "Mappatura dei competitor e delle supply chain locali",
        "Analisi di trend regolatori, tecnologici e di consumo",
        "Benchmarking e studi di fattibilità territoriale"
      ],
      clients: "ONG, agenzie di sviluppo, imprese energetiche, enti pubblici, investitori d'impatto",
      benefit: "Decisioni strategiche basate su evidenze solide, riducendo i rischi di investimento.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Consulenza Economica e Business Model Energetici",
      objective: "Sviluppare modelli economici solidi e sostenibili per l'accesso e la gestione dell'energia.",
      offerings: [
        "Business model personalizzati (PAYGo, mini-grid, CER)",
        "Analisi di costi, tariffe, ROI, LCOE e break-even",
        "Proiezioni economico-finanziarie",
        "Sistemi di contabilità ambientale ed economica"
      ],
      clients: "Start-up, microimprese, ONG operative, operatori di microfinanza",
      benefit: "Strumenti pratici che rendono bancabili e scalabili i progetti energetici.",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      icon: <FileText className="w-8 h-8" />,
      title: "Ricerca e Politiche per l'Energia",
      objective: "Supportare lo sviluppo di politiche energetiche inclusive e basate su evidenze scientifiche.",
      offerings: [
        "Studi socioeconomici e mappature energetiche",
        "Policy brief e linee guida",
        "Supporto alla definizione di strategie locali e nazionali",
        "Collaborazioni con università e centri di ricerca"
      ],
      clients: "Ministeri, enti regolatori, università, agenzie multilaterali",
      benefit: "Evidenze scientifiche e strumenti concreti per rafforzare la governance energetica.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 4,
      icon: <Globe className="w-8 h-8" />,
      title: "Consulenza per Cooperazione e Donors",
      objective: "Accompagnare i progetti di cooperazione verso efficacia, efficienza e impatto misurabile.",
      offerings: [
        "Progettazione secondo logica Logframe e Teoria del Cambiamento",
        "Sistemi di monitoraggio e valutazione (M&E) personalizzati",
        "Elaborazione di proposte per bandi internazionali (UE, AICS, WB, GIZ)",
        "Facilitazione di partenariati multi-attore e PPP"
      ],
      clients: "ONG internazionali, consorzi di cooperazione, enti locali",
      benefit: "Massimizzare l'impatto dei progetti con strumenti avanzati di pianificazione e valutazione.",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Formazione e Capacity Building",
      objective: "Rafforzare competenze tecniche e manageriali per accelerare la transizione energetica sostenibile.",
      offerings: [
        "Corsi per installatori, tecnici e imprenditori verdi",
        "Programmi in economia dell'energia, project management e finanza verde",
        "Formazione blended (in presenza/online) con certificazioni",
        "Training istituzionali per PA, enti locali e ONG"
      ],
      clients: "Centri di formazione, università, enti pubblici, progetti di inclusione giovanile",
      benefit: "Formazione orientata all'occupabilità e allo sviluppo locale.",
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-blue-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Servizi Strategici di MEA S.r.l.s.
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                Making Energy Available (MEA S.r.l.s.) è un'impresa impegnata nella transizione energetica equa e sostenibile.
              </p>
              <p className="text-lg md:text-xl opacity-90 leading-relaxed">
                Con una presenza operativa in Italia e Camerun, MEA agisce come ponte tra Europa e Africa, 
                offrendo soluzioni concrete che uniscono consulenza strategica, ricerca economica applicata e formazione professionale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              La Nostra Missione
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Sosteniamo clienti pubblici, privati e del terzo settore nel disegno, implementazione e valutazione 
              di progetti energetici ad alto impatto sociale ed economico.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Le Nostre Aree di Servizio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cinque aree specializzate per accompagnare la transizione energetica sostenibile
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                    {/* Service Header */}
                    <div className="lg:w-1/3 mb-8 lg:mb-0">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6`}>
                        <div className="text-white">
                          {service.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {index + 1}. {service.title}
                      </h3>
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Target className="w-5 h-5 mr-2 text-blue-600" />
                          Obiettivo:
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {service.objective}
                        </p>
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="lg:w-2/3 space-y-8">
                      {/* What We Offer */}
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                          <Lightbulb className="w-6 h-6 mr-2 text-yellow-500" />
                          Cosa offriamo:
                        </h4>
                        <ul className="space-y-3">
                          {service.offerings.map((offering, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700">{offering}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Clients and Benefits */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 p-6 rounded-xl">
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <Users className="w-5 h-5 mr-2 text-blue-600" />
                            Clienti:
                          </h4>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {service.clients}
                          </p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-xl">
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <Award className="w-5 h-5 mr-2 text-green-600" />
                            Beneficio per il cliente:
                          </h4>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {service.benefit}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronti a Trasformare il Vostro Progetto Energetico?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contattaci per una consulenza personalizzata e scopri come MEA S.r.l.s. 
            può supportare la tua transizione energetica sostenibile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Richiedi Consulenza
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Scarica Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;