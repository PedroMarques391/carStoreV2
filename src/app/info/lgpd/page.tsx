"use client"
import Container from '@/components/Container/Container'
import FAQ from '@/components/Utils/FAQ'
import { IconLock } from '@/components/Utils/Icons'
import Metadata from '@/components/Utils/Metadata'
import React from 'react'

const LGPD = (): React.JSX.Element => {
  return (
    <Container>
      <Metadata seoTitle='carStore | LGPD' seoDescription='carStore - Página sobre a LGPD'/>
      <section className='mt-10 w-full'>
        <div className='w-full flex justify-start items-center gap-2'>
          {IconLock}
          <div>
            <h1 className='text-xl sm:text-4xl font-bold tracking-wide'>Lei Geral de Proteção de Dados Pessoais (LGPD)</h1>
            <p className='text-black/60 text-xs sm:text-lg font-bold'>Lei 13.709 de 14.08.2018</p>
          </div>
        </div>
        <p className='mt-5 text-sm sm:text-base'>É uma lei que estabelece regras ao uso de dados pessoais de pessoas físicas por entidades públicas e privadas. A LGPD é uma norma que garante direitos aos titulares dos dados e estabelece uma regra mínima para coleta, armazenamento, tratamento e compartilhamento de dados pessoais de pessoas físicas. As regras estabelecidas pela LGPD devem ser observadas por todos os setores do mercado: bancos, hospitais, comércios, empresas de e-commerce e também o setor público.
        </p>

        <section className='w-full bg-white mt-10 py-2 rounded-lg'>
          <h1 className='text-2xl md:text-3xl font-bold tracking-wide mt-5 mb-10 text-center'>Tire suas dúvidas sobre o uso de dados</h1>
          <section className='flex flex-col justify-center items-center'>
            <FAQ question='Quando a LGPD entra em vigor?'>
              A LGPD entrou em vigor em 18 de setembro de 2020.
            </FAQ>

            <FAQ question='O que dados pessoais sensíveis?'>
              Dados pessoais sensíveis são uma subcategoria de dados pessoais que, devido à sua natureza, exigem um nível mais alto de proteção. Esses dados são considerados sensíveis porque seu uso inadequado pode causar discriminação ou outros tipos de danos ao titular.
            </FAQ>

            <FAQ question='O que é considerado um tratamento de dado pessoal?'>
              O tratamento de dados pessoais refere-se a qualquer operação ou conjunto de operações realizadas com dados pessoais, desde a coleta até a sua eliminação. A definição abrange uma ampla gama de atividades que envolvem o uso de dados pessoais. De acordo com legislações de proteção de dados, como a Lei Geral de Proteção de Dados (LGPD) no Brasil e o Regulamento Geral sobre a Proteção de Dados (GDPR) na União Europeia.
            </FAQ>

            <FAQ question='Por que a carStore trata dados pessoais?'>
              A carStore trata dados pessoais por várias razões, todas centradas em fornecer um serviço eficaz e eficiente aos seus clientes, cumprir obrigações legais, melhorar suas operações e garantir a segurança e personalização da experiência do cliente. Cada atividade de tratamento de dados é conduzida de acordo com princípios de proteção de dados e dentro dos limites permitidos por leis e regulamentações de privacidade aplicáveis.
            </FAQ>

            <FAQ question='Quais os direitos dos titulares dos dados?'>
              <p>Os titulares de dados pessoais têm uma série de direitos garantidos por legislações de proteção de dados, como a Lei Geral de Proteção de Dados (LGPD) no Brasil e o Regulamento Geral sobre a Proteção de Dados (GDPR) na União Europeia. Esses direitos são projetados para dar aos indivíduos maior controle sobre suas informações pessoais e para assegurar que as organizações tratem esses dados de maneira justa e transparente.</p>
              <ul className="list-disc list-inside space-y-4 mt-4">
                <li>
                  <strong>Direito de Acesso:</strong> O titular tem o direito de saber se seus dados pessoais estão sendo tratados e, se estiverem, de obter uma cópia desses dados e informações sobre como eles são usados.
                </li>
                <li>
                  <strong>Direito de Retificação:</strong> O titular pode solicitar a correção de dados pessoais incorretos, imprecisos ou desatualizados.
                </li>
                <li>
                  <strong>Direito ao Apagamento (Direito de Ser Esquecido):</strong> O titular pode solicitar a exclusão de seus dados pessoais em determinadas circunstâncias, como quando os dados não são mais necessários para a finalidade original ou quando o consentimento é retirado.
                </li>
                <li>
                  <strong>Direito à Limitação do Tratamento:</strong> O titular pode solicitar a restrição do tratamento de seus dados pessoais em certas situações, por exemplo, enquanto a exatidão dos dados é verificada ou em caso de tratamento ilícito.
                </li>
                <li>
                  <strong>Direito à Portabilidade dos Dados:</strong> O titular tem o direito de receber seus dados pessoais em um formato estruturado, de uso comum e legível por máquina, e de transmiti-los a outro controlador sem impedimentos.
                </li>
                <li>
                  <strong>Direito de Oposição:</strong> O titular pode se opor ao tratamento de seus dados pessoais com base em interesses legítimos do controlador ou em caso de marketing direto.
                </li>
                <li>
                  <strong>Direito de Não Ser Submetido a Decisões Automatizadas:</strong> O titular tem o direito de não estar sujeito a decisões baseadas unicamente em tratamento automatizado, incluindo a criação de perfis, que produzam efeitos jurídicos ou que afetem significativamente de forma similar.
                </li>
                <li>
                  <strong>Direito de Informação:</strong> O titular tem o direito de ser informado sobre a coleta e uso de seus dados pessoais de forma clara, transparente e facilmente compreensível.
                </li>
                <li>
                  <strong>Direito de Retirar o Consentimento:</strong> Quando o tratamento de dados é baseado no consentimento do titular, ele tem o direito de retirar seu consentimento a qualquer momento, sem afetar a legalidade do tratamento realizado anteriormente.
                </li>
                <li>
                  <strong>Direito de Reclamação:</strong> O titular tem o direito de apresentar uma reclamação a uma autoridade supervisora se considerar que o tratamento de seus dados pessoais viola a legislação de proteção de dados.
                </li>
              </ul>
            </FAQ>
          </section>
        </section>
      </section>
    </Container>
  )
}

export default LGPD